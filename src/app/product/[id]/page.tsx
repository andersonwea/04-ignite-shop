import Image from 'next/image'

export default function Product() {
  return (
    <main className="mx-auto grid  max-w-[1180px] grid-cols-2 items-center gap-16 ">
      <div className="flex h-[556px] w-full max-w-[576px] grid-flow-col  items-center justify-center rounded-lg bg-tshirt p-1 ">
        <Image src={''} alt="" className="object-cover" />
      </div>
      <div className="flex h-full flex-col pt-5">
        <h1 className="text-3xl text-gray-300">Camiseta 1</h1>
        <span className="mt-4 block text-3xl text-green-300">R$ 49,90</span>
        <p className="mt-10 text-lg leading-relaxed text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          impedit, laborum explicabo quas ea quam reiciendis voluptas
          voluptatibus ipsam numquam eveniet vero repudiandae vitae praesentium
          in, iure est quasi quisquam?
        </p>
        <button className="mt-auto cursor-pointer rounded-lg border-0 bg-green-500 p-5 text-lg font-bold text-white hover:bg-green-300">
          Compre agora
        </button>
      </div>
    </main>
  )
}
