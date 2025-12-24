import crypto from 'crypto'

const LEMONSQUEEZY_API_URL = 'https://api.lemonsqueezy.com/v1'

interface LemonSqueezyConfig {
  apiKey: string
  storeId: string
  webhookSecret: string
}

function getConfig(): LemonSqueezyConfig {
  const apiKey = process.env.LEMON_API_KEY
  const storeId = process.env.LEMONSQUEEZY_STORE_ID
  const webhookSecret = process.env.LEMONSQUEEZY_WEBHOOK_SECRET

  if (!apiKey) {
    throw new Error('LEMON_API_KEY is not configured')
  }

  return {
    apiKey,
    storeId: storeId || '',
    webhookSecret: webhookSecret || '',
  }
}

async function lemonSqueezyFetch<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const config = getConfig()

  const response = await fetch(`${LEMONSQUEEZY_API_URL}${endpoint}`, {
    ...options,
    headers: {
      Accept: 'application/vnd.api+json',
      'Content-Type': 'application/vnd.api+json',
      Authorization: `Bearer ${config.apiKey}`,
      ...options.headers,
    },
  })

  if (!response.ok) {
    const error = await response.text()
    throw new Error(`Lemon Squeezy API error: ${response.status} - ${error}`)
  }

  return response.json()
}

// ====================================
// CHECKOUT
// ====================================

export interface CreateCheckoutOptions {
  variantId: string
  email?: string
  name?: string
  organizationId: string
  successUrl?: string
  cancelUrl?: string
}

export interface CheckoutResponse {
  data: {
    id: string
    type: string
    attributes: {
      url: string
      expires_at: string
    }
  }
}

export async function createCheckout(
  options: CreateCheckoutOptions
): Promise<string> {
  const config = getConfig()

  const payload = {
    data: {
      type: 'checkouts',
      attributes: {
        checkout_options: {
          embed: false,
          media: true,
          button_color: '#7C3AED',
        },
        checkout_data: {
          email: options.email,
          name: options.name,
          custom: {
            organization_id: options.organizationId,
          },
        },
        product_options: {
          redirect_url: options.successUrl,
        },
      },
      relationships: {
        store: {
          data: {
            type: 'stores',
            id: config.storeId,
          },
        },
        variant: {
          data: {
            type: 'variants',
            id: options.variantId,
          },
        },
      },
    },
  }

  const response = await lemonSqueezyFetch<CheckoutResponse>('/checkouts', {
    method: 'POST',
    body: JSON.stringify(payload),
  })

  return response.data.attributes.url
}

// ====================================
// SUBSCRIPTIONS
// ====================================

export interface Subscription {
  id: string
  status: string
  customerId: string
  variantId: string
  productId: string
  renewsAt: string | null
  endsAt: string | null
  trialEndsAt: string | null
  cancelled: boolean
  updatePaymentMethodUrl: string
  customerPortalUrl: string
}

export interface SubscriptionResponse {
  data: {
    id: string
    type: string
    attributes: {
      status: string
      renews_at: string | null
      ends_at: string | null
      trial_ends_at: string | null
      cancelled: boolean
      urls: {
        update_payment_method: string
        customer_portal: string
      }
    }
    relationships: {
      customer: { data: { id: string } }
      variant: { data: { id: string } }
      product: { data: { id: string } }
    }
  }
}

export async function getSubscription(
  subscriptionId: string
): Promise<Subscription> {
  const response = await lemonSqueezyFetch<SubscriptionResponse>(
    `/subscriptions/${subscriptionId}`
  )

  return {
    id: response.data.id,
    status: response.data.attributes.status,
    customerId: response.data.relationships.customer.data.id,
    variantId: response.data.relationships.variant.data.id,
    productId: response.data.relationships.product.data.id,
    renewsAt: response.data.attributes.renews_at,
    endsAt: response.data.attributes.ends_at,
    trialEndsAt: response.data.attributes.trial_ends_at,
    cancelled: response.data.attributes.cancelled,
    updatePaymentMethodUrl: response.data.attributes.urls.update_payment_method,
    customerPortalUrl: response.data.attributes.urls.customer_portal,
  }
}

export async function cancelSubscription(
  subscriptionId: string
): Promise<void> {
  await lemonSqueezyFetch(`/subscriptions/${subscriptionId}`, {
    method: 'DELETE',
  })
}

export async function resumeSubscription(
  subscriptionId: string
): Promise<void> {
  await lemonSqueezyFetch(`/subscriptions/${subscriptionId}`, {
    method: 'PATCH',
    body: JSON.stringify({
      data: {
        type: 'subscriptions',
        id: subscriptionId,
        attributes: {
          cancelled: false,
        },
      },
    }),
  })
}

// ====================================
// CUSTOMER PORTAL
// ====================================

export async function getCustomerPortalUrl(
  customerId: string
): Promise<string> {
  const response = await lemonSqueezyFetch<{
    data: { attributes: { urls: { customer_portal: string } } }
  }>(`/customers/${customerId}`)

  return response.data.attributes.urls.customer_portal
}

// ====================================
// WEBHOOK VERIFICATION
// ====================================

export function verifyWebhookSignature(
  payload: string,
  signature: string
): boolean {
  const config = getConfig()

  if (!config.webhookSecret) {
    console.warn('LEMONSQUEEZY_WEBHOOK_SECRET not configured')
    return false
  }

  const hmac = crypto.createHmac('sha256', config.webhookSecret)
  const digest = hmac.update(payload).digest('hex')

  return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(digest))
}

// ====================================
// WEBHOOK EVENT TYPES
// ====================================

export type WebhookEventType =
  | 'subscription_created'
  | 'subscription_updated'
  | 'subscription_cancelled'
  | 'subscription_resumed'
  | 'subscription_expired'
  | 'subscription_paused'
  | 'subscription_unpaused'
  | 'subscription_payment_success'
  | 'subscription_payment_failed'
  | 'order_created'

export interface WebhookEvent {
  meta: {
    event_name: WebhookEventType
    custom_data?: {
      organization_id?: string
    }
  }
  data: {
    id: string
    type: string
    attributes: {
      store_id: number
      customer_id: number
      order_id?: number
      product_id: number
      variant_id: number
      status: string
      renews_at: string | null
      ends_at: string | null
      trial_ends_at: string | null
      cancelled: boolean
      first_subscription_item?: {
        id: number
        subscription_id: number
        price_id: number
        quantity: number
      }
    }
  }
}

export function parseWebhookEvent(payload: string): WebhookEvent {
  return JSON.parse(payload) as WebhookEvent
}

// ====================================
// STATUS MAPPING
// ====================================

export type SubscriptionStatus =
  | 'on_trial'
  | 'active'
  | 'paused'
  | 'past_due'
  | 'unpaid'
  | 'cancelled'
  | 'expired'

export function mapLemonSqueezyStatus(
  status: string
): 'TRIAL' | 'ACTIVE' | 'PAST_DUE' | 'CANCELED' | 'EXPIRED' {
  const statusMap: Record<string, 'TRIAL' | 'ACTIVE' | 'PAST_DUE' | 'CANCELED' | 'EXPIRED'> = {
    on_trial: 'TRIAL',
    active: 'ACTIVE',
    paused: 'ACTIVE',
    past_due: 'PAST_DUE',
    unpaid: 'PAST_DUE',
    cancelled: 'CANCELED',
    expired: 'EXPIRED',
  }

  return statusMap[status] || 'EXPIRED'
}
