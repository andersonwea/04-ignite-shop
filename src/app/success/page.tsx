import Image from 'next/image'
import Link from 'next/link'

export default function Success() {
  return (
    <main className="mx-auto mt-5 flex h-[656px] flex-col items-center">
      <h1 className="text-3xl text-gray-100">Compra efetuada!</h1>

      <div className="item-center mt-16 flex h-[145px] w-full max-w-[130px] justify-center rounded-lg bg-tshirt p-1">
        <Image src={''} alt="" className="object-cover" />
      </div>
      <p className="mt-8 max-w-xl text-center text-2xl text-gray-300">
        Uhuul <strong>Diego Fernandes</strong>, sua{' '}
        <strong>Camiseta Beyond the Limits</strong> já está a caminho da sua
        casa.{' '}
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
