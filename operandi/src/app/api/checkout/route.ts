import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { prisma } from '@/lib/prisma'
import { createCheckout } from '@/lib/lemonSqueezy'

export async function POST(request: NextRequest) {
  try {
    // Get the authenticated user
    const supabase = await createClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Get the request body
    const body = await request.json()
    const { variantId, planId } = body

    if (!variantId) {
      return NextResponse.json(
        { error: 'variantId is required' },
        { status: 400 }
      )
    }

    // Find the user's organization
    const dbUser = await prisma.user.findUnique({
      where: { id: user.id },
      include: { organizacion: true },
    })

    if (!dbUser?.organizacion) {
      return NextResponse.json(
        { error: 'User does not have an organization' },
        { status: 400 }
      )
    }

    const organization = dbUser.organizacion

    // Check if organization already has an active subscription
    if (
      organization.estado_suscripcion === 'ACTIVE' &&
      organization.lemon_squeezy_subscription_id
    ) {
      return NextResponse.json(
        { error: 'Organization already has an active subscription' },
        { status: 400 }
      )
    }

    // Get the base URL for redirects
    const baseUrl = request.headers.get('origin') || 'http://localhost:3000'

    // Create checkout session
    const checkoutUrl = await createCheckout({
      variantId,
      email: user.email,
      name: `${dbUser.nombre} ${dbUser.apellido}`,
      organizationId: organization.id,
      successUrl: `${baseUrl}/dashboard/billing?success=true`,
      cancelUrl: `${baseUrl}/dashboard/billing?canceled=true`,
    })

    return NextResponse.json({ url: checkoutUrl })
  } catch (error) {
    console.error('[Checkout] Error creating checkout:', error)
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    )
  }
}
