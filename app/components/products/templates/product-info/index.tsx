import { Product } from "@/app/types/global"
import { Heading, Text } from "@medusajs/ui"
import Link from "next/link"
import React from "react"

type ProductInfoProps = {
  product: Product
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  return (
    <div id="product-info">
      <div className="flex flex-col gap-y-4 lg:max-w-[500px] mx-auto">
        {product.category && (
          <Link
            href={`/categories/${product.category.slug}`}
            className="text-sm text-muted-foreground hover:gray-100"
          >
            {product.category.name}
          </Link>
        )}
        <Heading level="h2" className="text-3xl leading-10">
          {product.title}
        </Heading>

        <Text className="text-sm text-muted-foreground">
          {product.handle}
        </Text>
      </div>
    </div>
  )
}

export default ProductInfo
