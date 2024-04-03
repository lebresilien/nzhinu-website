"use client"

import { CategoryProduct } from "@/app/types/global"
import ProductPreview from "@/app/components/products/components/product-preview"
import { Text } from "@medusajs/ui"
import InteractiveLink from "@/app/components/interactive-link" 
import { getDictionary } from "@/get-dictionary"

type Props = {
	dict: Awaited<ReturnType<typeof getDictionary>>['home'],
  category: CategoryProduct
}

const ProductRail = ({ dict, category }: Props) => {

  return (
    <div>
      {category.products.length > 0  && ((
        <div className="container py-12">
          <div className="flex justify-between mb-8">
            <Text className="text-sm">{category.name}</Text>
            <InteractiveLink href={`/categories/${category.slug}`}>
              {dict['product']['see_all']}
            </InteractiveLink>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-5">
            {category && category.products &&
              category.products.map((product) => (
                <li key={product.id}>
                  <ProductPreview {...product} />
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default ProductRail
