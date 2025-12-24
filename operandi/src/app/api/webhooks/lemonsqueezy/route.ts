import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import {
  verifyWebhookSignature,
  parseWebhookEvent,
  mapLemonSqueezyStatus,
  type WebhookEvent,
} from '@/lib/lemonSqueezy'

export async function POST(request: NextRequest) {
  try {
    const payload = await request.text()
    const signature = request.headers.get('x-signature') || ''

    // Verify webhook signature
    if (!verifyWebhookSignature(payload, signature)) {
      console.error('[Webhook] Invalid signature')
      return NextResponse.json({ error: 'Invalid signature' }, { status: 401 })
    }

    const event = parseWebhookEvent(payload)
    console.log(`[Webhook] Received event: ${event.meta.event_name}`)

    // Handle different event types
    switch (event.meta.event_name) {
      case 'subscription_created':
        await handleSubscriptionCreated(event)
        break

      case 'subscription_updated':
        await handleSubscriptionUpdated(event)
        break

      case 'subscription_cancelled':
        await handleSubscriptionCancelled(event)
        break

      case 'subscription_resumed':
        await handleSubscriptionResumed(event)
        break

      case 'subscription_expired':
        await handleSubscriptionExpired(event)
        break

      case 'subscription_payment_failed':
        await handlePaymentFailed(event)
        break

      case 'subscription_payment_success':
        await handlePaymentSuccess(event)
        break

      default:
        console.log(`[Webhook] Unhandled event type: ${event.meta.event_name}`)
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('[Webhook] Error processing webhook:', error)
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    )
  }
}

async function handleSubscriptionCreated(event: WebhookEvent) {
  const organizationId = event.meta.custom_data?.organization_id
  const subscriptionId = event.data.id
  const customerId = event.data.attributes.customer_id.toString()
  const variantId = event.data.attributes.variant_id.toString()
  const status = event.data.attributes.status

  if (!organizationId) {
    console.error('[Webhook] No organization_id in custom_data')
    return
  }

  // Find the plan by variant ID
  const plan = await prisma.plan.findUnique({
    where: { lemon_squeezy_variant_id: variantId },
  })

  // Update the organization
  await prisma.organizacion.update({
    where: { id: organizationId },
    data: {
      lemon_squeezy_customer_id: customerId,
      lemon_squeezy_subscription_id: subscriptionId,
      estado_suscripcion: mapLemonSqueezyStatus(status),
      plan_id: plan?.id,
      fecha_inicio_plan: new Date(),
      fecha_fin_plan: event.data.attributes.renews_at
        ? new Date(event.data.attributes.renews_at)
        : null,
    },
  })

  console.log(
    `[Webhook] Subscription created for organization ${organizationId}`
  )
}

async function handleSubscriptionUpdated(event: WebhookEvent) {
  const subscriptionId = event.data.id
  const variantId = event.data.attributes.variant_id.toString()
  const status = event.data.attributes.status

  // Find organization by subscription ID
  const organization = await prisma.organizacion.findUnique({
    where: { lemon_squeezy_subscription_id: subscriptionId },
  })

  if (!organization) {
    console.error(`[Webhook] Organization not found for subscription ${subscriptionId}`)
    return
  }

  // Find the plan by variant ID (in case plan changed)
  const plan = await prisma.plan.findUnique({
    where: { lemon_squeezy_variant_id: variantId },
  })

  await prisma.organizacion.update({
    where: { id: organization.id },
    data: {
      estado_suscripcion: mapLemonSqueezyStatus(status),
      plan_id: plan?.id || organization.plan_id,
      fecha_fin_plan: event.data.attributes.renews_at
        ? new Date(event.data.attributes.renews_at)
        : null,
    },
  })

  console.log(`[Webhook] Subscription updated for organization ${organization.id}`)
}

async function handleSubscriptionCancelled(event: WebhookEvent) {
  const subscriptionId = event.data.id

  const organization = await prisma.organizacion.findUnique({
    where: { lemon_squeezy_subscription_id: subscriptionId },
  })

  if (!organization) {
    console.error(`[Webhook] Organization not found for subscription ${subscriptionId}`)
    return
  }

  await prisma.organizacion.update({
    where: { id: organization.id },
    data: {
      estado_suscripcion: 'CANCELED',
      fecha_fin_plan: event.data.attributes.ends_at
        ? new Date(event.data.attributes.ends_at)
        : new Date(),
    },
  })

  console.log(`[Webhook] Subscription cancelled for organization ${organization.id}`)
}

async function handleSubscriptionResumed(event: WebhookEvent) {
  const subscriptionId = event.data.id
  const status = event.data.attributes.status

  const organization = await prisma.organizacion.findUnique({
    where: { lemon_squeezy_subscription_id: subscriptionId },
  })

  if (!organization) {
    console.error(`[Webhook] Organization not found for subscription ${subscriptionId}`)
    return
  }

  await prisma.organizacion.update({
    where: { id: organization.id },
    data: {
      estado_suscripcion: mapLemonSqueezyStatus(status),
      fecha_fin_plan: event.data.attributes.renews_at
        ? new Date(event.data.attributes.renews_at)
        : null,
    },
  })

  console.log(`[Webhook] Subscription resumed for organization ${organization.id}`)
}

async function handleSubscriptionExpired(event: WebhookEvent) {
  const subscriptionId = event.data.id

  const organization = await prisma.organizacion.findUnique({
    where: { lemon_squeezy_subscription_id: subscriptionId },
  })

  if (!organization) {
    console.error(`[Webhook] Organization not found for subscription ${subscriptionId}`)
    return
  }

  await prisma.organizacion.update({
    where: { id: organization.id },
    data: {
      estado_suscripcion: 'EXPIRED',
      fecha_fin_plan: new Date(),
    },
  })

  console.log(`[Webhook] Subscription expired for organization ${organization.id}`)
}

async function handlePaymentFailed(event: WebhookEvent) {
  const subscriptionId = event.data.id

  const organization = await prisma.organizacion.findUnique({
    where: { lemon_squeezy_subscription_id: subscriptionId },
  })

  if (!organization) {
    console.error(`[Webhook] Organization not found for subscription ${subscriptionId}`)
    return
  }

  await prisma.organizacion.update({
    where: { id: organization.id },
    data: {
      estado_suscripcion: 'PAST_DUE',
    },
  })

  console.log(`[Webhook] Payment failed for organization ${organization.id}`)
}

async function handlePaymentSuccess(event: WebhookEvent) {
  const subscriptionId = event.data.id

  const organization = await prisma.organizacion.findUnique({
    where: { lemon_squeezy_subscription_id: subscriptionId },
  })

  if (!organization) {
    console.error(`[Webhook] Organization not found for subscription ${subscriptionId}`)
    return
  }

  await prisma.organizacion.update({
    where: { id: organization.id },
    data: {
      estado_suscripcion: 'ACTIVE',
      fecha_fin_plan: event.data.attributes.renews_at
        ? new Date(event.data.attributes.renews_at)
        : null,
    },
  })

  console.log(`[Webhook] Payment success for organization ${organization.id}`)
}
