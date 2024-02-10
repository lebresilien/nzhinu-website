import React from "react"
import { getDictionary } from "@/get-dictionary"
import { useProductActions } from "@/app/lib/context/product-context"

type CartTotalsProps = {
  dict: Awaited<ReturnType<typeof getDictionary>>
}

const CartTotals: React.FC<CartTotalsProps> = ({ dict }) => {
  
  const { sum } = useProductActions()

  return (
    <div>
      <div className="flex flex-col gap-y-2 text-md text-muted-foreground ">
        <div className="flex items-center justify-between">
          <span className="flex gap-x-1 items-center">
            { dict['cart']['subtotal'] }
          </span>
          <span>{ sum() }</span>
        </div>
        
        <div className="flex items-center justify-between">
          <span>{ dict['cart']['shipping'] }</span>
          <span>1 000</span>
        </div>
      </div>
      <div className="h-px w-full border-b border-gray-200 my-4" />
      <div className="flex items-center justify-between  mb-2 text-md ">
        <span>Total</span>
        <span className="text-xl">{ sum() + 1000 }</span>
      </div>
      <div className="h-px w-full border-b border-gray-200 mt-4" />
    </div>
  )
}

export default CartTotals
