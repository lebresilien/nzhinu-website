"use client"

import repeat from "@/app/lib/util/repeat"
import ProductPreview from "@/app/components/products/product-preview"
import SkeletonProductPreview from "@/app/components/skeletons/components/skeleton-product-preview"
import React, { useEffect } from "react"
import { CategoryProduct, Product } from "@/app/types/global"

const CollectionTemplate: React.FC<{ collection: CategoryProduct }> = ({
  collection,
}) => {

  return (
    <div className="container py-10">
      <div className="mb-8 text-2xl font-semibold">
        <h1>{collection.name}</h1>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-8">
        {collection ? 
          collection.products.map((p: Product) => (
            <li key={p.id}>
              <ProductPreview {...p} />
            </li>
          )) : 
          repeat(3).map((index) => (
            <li key={index}>
              <SkeletonProductPreview />
            </li>
          ))
        }
        
      </ul>
    </div>
  )
}

export default CollectionTemplate
