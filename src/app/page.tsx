'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useKeenSlider } from 'keen-slider/react'

import tshirt1 from '../assets/1.png'
import tshirt2 from '../assets/2.png'
import tshirt3 from '../assets/3.png'
import tshirt4 from '../assets/4.png'

import 'keen-slider/keen-slider.min.css'

export default function Home() {
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
      <Link
        href={'/product/:id'}
        className="keen-slider__slide group relative flex items-center justify-center overflow-hidden rounded-lg bg-tshirt p-1 "
      >
        <Image src={tshirt1} width={520} height={480} alt="" />

        <footer className=" absolute bottom-1 left-1 right-1 flex translate-y-28 items-center justify-between rounded-md bg-black/60 p-8 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
          <strong className="text-xl leading-relaxed">Camiseta 1</strong>
          <span className="text-2xl font-bold text-green-300">R$ 49,90</span>
        </footer>
      </Link>

      <Link
        href={'/product/:id'}
        className="keen-slider__slide group relative flex items-center justify-center overflow-hidden rounded-lg bg-tshirt p-1"
      >
        <Image src={tshirt2} width={520} height={480} alt="" />

        <footer className=" absolute bottom-1 left-1 right-1 flex translate-y-28 items-center justify-between rounded-md bg-black/60 p-8 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
          <strong className="text-xl leading-relaxed">Camiseta 1</strong>
          <span className="text-2xl font-bold text-green-300">R$ 49,90</span>
        </footer>
      </Link>

      <Link
        href={'/product/:id'}
        className="keen-slider__slide group relative flex items-center justify-center overflow-hidden rounded-lg bg-tshirt p-1"
      >
        <Image src={tshirt3} width={520} height={480} alt="" />

        <footer className=" absolute bottom-1 left-1 right-1 flex translate-y-28 items-center justify-between rounded-md bg-black/60 p-8 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
          <strong className="text-xl leading-relaxed">Camiseta 1</strong>
          <span className="text-2xl font-bold text-green-300">R$ 49,90</span>
        </footer>
      </Link>

      <Link
        href={'/product/:id'}
        className="keen-slider__slide group relative flex items-center justify-center overflow-hidden rounded-lg bg-tshirt p-1"
      >
        <Image src={tshirt4} width={520} height={480} alt="" />

        <footer className=" absolute bottom-1 left-1 right-1 flex translate-y-28 items-center justify-between rounded-md bg-black/60 p-8 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
          <strong className="text-xl leading-relaxed">Camiseta 1</strong>
          <span className="text-2xl font-bold text-green-300">R$ 49,90</span>
        </footer>
      </Link>
    </div>
  )
}
