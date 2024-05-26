import Stripe from 'stripe'

const STRIPE_KEY = process.env.STRIPE_SECRET_KEY ?? ''
export const stripe = new Stripe(STRIPE_KEY, {
  apiVersion: '2024-04-10',
  typescript: true,
})
