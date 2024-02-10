"use client"

import { useProductActions } from "@/app/lib/context/product-context"
import { Heading } from "@medusajs/ui"
import ItemsPreviewTemplate from "@/app/components/cart/templates/preview"
import CartTotals from "@/app/components/cart-totals"
import Divider from "@/app/components/divider"
import { getDictionary } from "@/get-dictionary"

type Props = {
  dict: Awaited<ReturnType<typeof getDictionary>>
}

const CheckoutSummary = ({ dict }: Props) => {
  const { cart } = useProductActions()

  if (cart.length == 0) {
    return null
  }

  return (
    <div className="sticky top-0 flex flex-col-reverse small:flex-col gap-y-8 py-8 px-4 small:py-0 small:pr-8 ">
      <div className="w-full bg-white flex flex-col">
        <Divider className="my-6 small:hidden" />
        <Heading
          level="h2"
          className="flex flex-row text-3xl-regular items-baseline"
        >
          In your Cart
        </Heading>
        <Divider className="my-6" />
        <CartTotals dict={dict}/>
        <ItemsPreviewTemplate items={cart} />
      </div>
    </div>
  )
}

export default CheckoutSummary
