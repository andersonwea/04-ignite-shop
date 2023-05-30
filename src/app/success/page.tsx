import { stripe } from '@/lib/stripe'
import Image from 'next/image'
import Link from 'next/link'
import Stripe from 'stripe'

export default async function Success({
  searchParams,
}: {
  searchParams: { session_id: string }
}) {
  const sessionId = searchParams.session_id

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const customerName = session.customer_details?.name
  const productReponse = session.line_items?.data[0].price
    ?.product as Stripe.Product

  const product = {
    name: productReponse.name,
    imageUrl: productReponse.images[0],
  }

  return (
    <main className="mx-auto mt-5 flex h-[656px] flex-col items-center">
      <h1 className="text-3xl text-gray-100">Compra efetuada!</h1>

      <div className="item-center mt-16 flex h-[145px] w-full max-w-[130px] justify-center rounded-lg bg-tshirt p-1">
        <Image
          src={product.imageUrl}
          alt=""
          className="object-cover"
          width={120}
          height={110}
        />
      </div>
      <p className="mt-8 max-w-xl text-center text-2xl text-gray-300">
        Uhuul <strong>{customerName}</strong>, sua{' '}
        <strong>{product.name}</strong> já está a caminho da sua casa.{' '}
      </p>
      <Link
        className="mt-20 block text-xl font-bold text-green-500 hover:text-green-300"
        href={'/'}
      >
        Voltar ao catálogo
      </Link>
    </main>
  )
}
