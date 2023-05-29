'use client'

import { useKeenSlider } from 'keen-slider/react'

import 'keen-slider/keen-slider.min.css'

import Link from 'next/link'
import Image from 'next/image'

type Products = {
  id: string
  name: string
  imageUrl: string
  price: string
}

interface SliderProps {
  products: Products[]
}

export function Slider({ products }: SliderProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  })

  return (
    <div
      className="keen-slider mb-5 ml-auto flex max-h-[626px] w-full max-w-[calc(100vw-((100vw-1180px)/2))] flex-1 "
      ref={sliderRef}
    >
      {products.map((product) => {
        return (
          <Link
            key={product.id}
            prefetch={false}
            href={`/product/${product.id}`}
            className="keen-slider__slide group relative flex items-center justify-center overflow-hidden rounded-lg bg-tshirt p-1 "
          >
            <Image src={product.imageUrl} width={520} height={480} alt="" />

            <footer className=" absolute bottom-1 left-1 right-1 flex translate-y-28 items-center justify-between rounded-md bg-black/60 p-8 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              <strong className="text-xl leading-relaxed">
                {product.name}
              </strong>
              <span className="text-2xl font-bold text-green-300">
                {product.price}
              </span>
            </footer>
          </Link>
        )
      })}
    </div>
  )
}
