import {
  ProductProvider,
} from "@/app/lib/context/product-context"
import { Product } from "@/app/types/global"
import { Button } from "@medusajs/ui"
import React, { useMemo } from "react"

type ProductActionsProps = {
  product: Product
}

const ProductActionsInner: React.FC<ProductActionsProps> = ({ product }) => {

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
        Add to cart
      </Button>
    </div>
  )
}

const ProductActions: React.FC<ProductActionsProps> = ({ product }) => (
  <ProductProvider product={product}>
    <ProductActionsInner product={product} />
  </ProductProvider>
)

export default ProductActions
