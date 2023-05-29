import { stripe } from '@/lib/stripe'
import Image from 'next/image'
import Stripe from 'stripe'

export async function generateStaticParams() {
  const products = await stripe.products.list()

  const productIds = products.data.map((product) => ({ id: product.id }))

  return productIds
}

export default async function Product({ params }: { params: { id: string } }) {
  const productId = params.id
  const response = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = response.default_price as Stripe.Price

  const product = {
    id: response.id,
    name: response.name,
    imageUrl: response.images[0],
    price: new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format((price.unit_amount as number) / 100),
    description: response.description,
  }

  return (
    <main className="mx-auto grid  max-w-[1180px] grid-cols-2 items-center gap-16 ">
      <div className="flex h-[556px] w-full max-w-[576px] grid-flow-col  items-center justify-center rounded-lg bg-tshirt p-1 ">
        <Image
          src={product.imageUrl}
          width={520}
          height={480}
          alt=""
          className="object-cover"
        />
      </div>
      <div className="flex h-full flex-col pt-5">
        <h1 className="text-3xl text-gray-300">{product.name}</h1>
        <span className="mt-4 block text-3xl text-green-300">
          {product.price}
        </span>
        <p className="mt-10 text-lg leading-relaxed text-gray-300">
          {product.description}
        </p>
        <button className="mt-auto cursor-pointer rounded-lg border-0 bg-green-500 p-5 text-lg font-bold text-white hover:bg-green-300">
          Compre agora
        </button>
      </div>
    </main>
  )
}
