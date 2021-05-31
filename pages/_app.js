import '@/css/tailwind.css'

import { DefaultSeo } from 'next-seo'
import Head from 'next/head'
import { loadStripe } from '@stripe/stripe-js'
import { CartProvider } from 'use-shopping-cart'
import { IdProvider } from '@radix-ui/react-id'

import { SEO } from '@/components/SEO'
import LayoutWrapper from '@/components/LayoutWrapper'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

export default function App({ Component, pageProps }) {
  return (
    <CartProvider mode="checkout-session" stripe={stripePromise} currency="SGD">
      <IdProvider>
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
        </Head>
        <DefaultSeo {...SEO} />
        <LayoutWrapper>
          <Component {...pageProps} />
        </LayoutWrapper>
      </IdProvider>
    </CartProvider>
  )
}
