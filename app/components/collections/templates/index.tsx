"use client"

import repeat from "@/app/lib/util/repeat"
import ProductPreview from "@/app/components/products/product-preview"
import SkeletonProductPreview from "@/app/components/skeletons/components/skeleton-product-preview"
import { useInfiniteQuery } from "@tanstack/react-query"

import React, { useEffect } from "react"


const CollectionTemplate: React.FC<{ collection: any }> = ({
  collection,
}) => {



  useEffect(() => {
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="content-container py-6">
      <div className="mb-8 text-2xl-semi">
        <h1>{collection.title}</h1>
      </div>
      <ul className="grid grid-cols-2 small:grid-cols-3 medium:grid-cols-4 gap-x-6 gap-y-8">
        {previews.map((p) => (
          <li key={p.id}>
            <ProductPreview {...p} />
          </li>
        ))}
        {isFetchingNextPage &&
          repeat(getNumberOfSkeletons(infiniteData?.pages)).map((index) => (
            <li key={index}>
              <SkeletonProductPreview />
            </li>
          ))}
      </ul>
      <div
        className="py-16 flex justify-center items-center text-small-regular text-gray-700"
        ref={ref}
      >
        <span ref={ref}></span>
      </div>
    </div>
  )
}

export default CollectionTemplate
