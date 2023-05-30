'use client'

import axios from 'axios'
import { useState } from 'react'

interface BuyButtonProps {
  defaultPriceId: string
}

export function BuyButton({ defaultPriceId }: BuyButtonProps) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true)

      const response = await axios.post('/api/checkout', {
        priceId: defaultPriceId,
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (err) {
      // Conectar com uma ferramenta de observabilidade (Datadog / Sentry)

      setIsCreatingCheckoutSession(false)

      alert('Falha ao redirencionar ao checkout')
    }
  }

  return (
    <button
      className=" mt-auto  cursor-pointer rounded-lg border-0 bg-green-500 p-5  text-lg font-bold text-white   hover:bg-green-300 disabled:pointer-events-none disabled:opacity-60"
      disabled={isCreatingCheckoutSession}
      onClick={handleBuyProduct}
    >
      Compre agora
    </button>
  )
}
