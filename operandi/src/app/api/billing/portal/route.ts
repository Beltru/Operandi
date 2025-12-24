import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { prisma } from '@/lib/prisma'
import { getSubscription } from '@/lib/lemonSqueezy'

export async function GET() {
  try {
    // Get the authenticated user
    const supabase = await createClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
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

    if (!organization.lemon_squeezy_subscription_id) {
      return NextResponse.json(
        { error: 'Organization does not have a subscription' },
        { status: 400 }
      )
    }

    // Get subscription details including portal URL
    const subscription = await getSubscription(
      organization.lemon_squeezy_subscription_id
    )

    return NextResponse.json({ url: subscription.customerPortalUrl })
  } catch (error) {
    console.error('[Billing] Error getting portal URL:', error)
    return NextResponse.json(
      { error: 'Failed to get portal URL' },
      { status: 500 }
    )
  }
}
