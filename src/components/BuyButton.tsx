'use client'

interface BuyButtonProps {
  defaultPriceId: string
}

export function BuyButton({ defaultPriceId }: BuyButtonProps) {
  function handleBuyProduct() {
    console.log(defaultPriceId)
  }

  return (
    <button
      className="mt-auto cursor-pointer rounded-lg border-0 bg-green-500 p-5 text-lg font-bold text-white hover:bg-green-300"
      onClick={handleBuyProduct}
    >
      Compre agora
    </button>
  )
}
