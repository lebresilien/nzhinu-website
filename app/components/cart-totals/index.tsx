import { Tooltip } from "@medusajs/ui"
import { InformationCircleSolid } from "@medusajs/icons"
import React from "react"
import { Cart } from "@/app/types/global"
import { getDictionary } from "@/get-dictionary"

type CartTotalsProps = {
  data: Cart[]
  dict: Awaited<ReturnType<typeof getDictionary>>
}

const CartTotals: React.FC<CartTotalsProps> = ({ data, dict }) => {
  
  return (
    <div>
      <div className="flex flex-col gap-y-2 text-md text-muted-foreground ">
        <div className="flex items-center justify-between">
          <span className="flex gap-x-1 items-center">
            { dict['cart']['subtotal'] }
          </span>
          <span>78</span>
        </div>
        
        <div className="flex items-center justify-between">
          <span>{ dict['cart']['shipping'] }</span>
          <span>789</span>
        </div>
      </div>
      <div className="h-px w-full border-b border-gray-200 my-4" />
      <div className="flex items-center justify-between  mb-2 text-md ">
        <span>Total</span>
        <span className="text-xl">89*7</span>
      </div>
      <div className="h-px w-full border-b border-gray-200 mt-4" />
    </div>
  )
}

export default CartTotals
