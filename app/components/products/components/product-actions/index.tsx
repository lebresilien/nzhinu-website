import {
  ProductProvider,
} from "@/app/lib/context/product-context"
import { Product } from "@/app/types/global"
import { getDictionary } from "@/get-dictionary"
import { Button } from "@medusajs/ui"
import React, { useMemo } from "react"

type ProductActionsProps = {
  product: Product,
  dict: Awaited<ReturnType<typeof getDictionary>>['products']
}

const ProductActionsInner: React.FC<ProductActionsProps> = ({ product, dict }) => {

  return (
    <div className="flex flex-col gap-y-2">

      <div className="flex flex-col text-ui-fg-base">
        <span
            className="text-xl">
            {product.price} FCFA
        </span>
      </div>
      <Button
        onClick={() => {}}
        variant="primary"
        className="w-full h-10 text-sm text-white bg-black"
      >
        {dict['add']}
      </Button>
    </div>
  )
}

const ProductActions: React.FC<ProductActionsProps> = ({ product, dict }) => (
  <ProductProvider product={product}>
    <ProductActionsInner product={product} dict={dict} />
  </ProductProvider>
)

export default ProductActions
