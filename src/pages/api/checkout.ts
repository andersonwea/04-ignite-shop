import { stripe } from '@/lib/stripe'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const priceid = 'price_1NCQRUHF0gD3v74TxaP2dx9s'

  const successUrl = `${process.env.NEXT_PUBLIC_APP_URL}/success`
  const cancelUrl = `${process.env.NEXT_PUBLIC_APP_URL}/`

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: 'payment',
    line_items: [
      {
        price: priceid,
        quantity: 1,
      },
    ],
  })

  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
  })
}
