"use client"

import React, { useEffect, useRef, useState } from "react"
import { ProductProvider, useProductActions } from "@/app/lib/context/product-context"
import { useIntersection } from "@/app/lib/hooks/use-in-view"
import ProductInfo from "@/app/components/products/templates/product-info"
import ProductTabs from "@/app/components/products/components/product-tabs"
import ImageGallery from "@/app/components/products/components/image-gallery"
import MobileActions from "@/app/components/products/components/mobile-actions"
import { Product } from "@/app/types/global"
import { getDictionary } from "@/get-dictionary"
import { Button } from "@medusajs/ui"

type ProductTemplateProps = {
  product: Product,
  dict: Awaited<ReturnType<typeof getDictionary>>['products']
}

const ProductTemplate: React.FC<ProductTemplateProps> = ({ product, dict }) => {
  const [isOnboarding, setIsOnboarding] = useState<boolean>(false)

  const infoRef = useRef<HTMLDivElement>(null)
  const inView = useIntersection(infoRef, "0px")
  const { addToCart } = useProductActions()

  const cartElement = {
    id: product.id,
    title: product.title,
    thumbnail: product.thumbnail,
    price: product.price,
    quantity: 0
  }

  useEffect(() => {
    const onboarding = window.sessionStorage.getItem("onboarding")
    setIsOnboarding(onboarding === "true")
  }, [])

  return (
    <>
      <div className="container flex flex-col sm:flex-row sm:items-start py-6 relative">
        <div className="flex flex-col sm:sticky sm:top-48 sm:py-0 sm:max-w-[300px] w-full py-8 gap-y-6">
          <ProductInfo product={product} />
          <ProductTabs product={product} dict={dict} />
        </div>
        <div className="block w-full relative">
          <ImageGallery images={product.thumbnail} />
        </div>
        <div
          className="flex flex-col sm:sticky sm:top-48 sm:py-0 sm:max-w-[300px] w-full py-8 gap-y-12"
          ref={infoRef}
        >
          <div className="flex flex-col gap-y-2">
              <div className="flex flex-col text-ui-fg-base">
                <span
                    className="text-xl">
                    {product.price} FCFA
                </span>
              </div>
              <Button
                onClick={() => addToCart(cartElement)}
                variant="primary"
                className="w-full h-10 text-sm text-white bg-black"
              >
                {dict['add']}
              </Button>
            </div>
        </div>
      </div>
     {/*  <div className="content-container my-16 px-6 small:px-8 small:my-32">
        <RelatedProducts product={product} />
      </div> */}
      <MobileActions product={product} show={!inView} />
    </>
  )
}

export default ProductTemplate
