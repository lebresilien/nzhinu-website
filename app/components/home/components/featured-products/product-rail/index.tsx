"use client"

import { CategoryProduct } from "@/app/types/global"
import ProductPreview from "@/app/components/products/product-preview"
import { Text } from "@medusajs/ui"
import InteractiveLink from "@/app/components/interactive-link" 

const ProductRail = ({ category }: { category: CategoryProduct }) => {

  return (
    <div className="xs:py-12">
      <div className="content-container py-12">
        <div className="flex justify-between mb-8">
          <Text className="txt-xlarge">{category.name}</Text>
          <InteractiveLink href={`/collections/${category.slug}`}>
            View all
          </InteractiveLink>
        </div>
        <ul className="grid grid-cols-2 small:grid-cols-3 gap-x-6 gap-y-8">
          {category.products &&
            category.products.map((product) => (
              <li key={product.id}>
                <ProductPreview {...product} />
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default ProductRail
