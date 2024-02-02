"use client"

import React, { useEffect, useRef, useState } from "react"
import { ProductProvider } from "@/app/lib/context/product-context"
import { useIntersection } from "@/app/lib/hooks/use-in-view"
import ProductInfo from "@/app/components/products/templates/product-info"
import ProductTabs from "@/app/components/products/components/product-tabs"
import ImageGallery from "@/app/components/products/components/image-gallery"
import MobileActions from "@/app/components/products/components/mobile-actions"
import ProductOnboardingCta from "@/app/components/products/components/product-onboarding-cta"
import { Product } from "@/app/types/global"
import { getDictionary } from "@/get-dictionary"
import ProductActions from "../components/product-actions"

type ProductTemplateProps = {
  product: Product,
  dict: Awaited<ReturnType<typeof getDictionary>>['products']
}

const ProductTemplate: React.FC<ProductTemplateProps> = ({ product, dict }) => {
  const [isOnboarding, setIsOnboarding] = useState<boolean>(false)

  const infoRef = useRef<HTMLDivElement>(null)

  const inView = useIntersection(infoRef, "0px")

  useEffect(() => {
    const onboarding = window.sessionStorage.getItem("onboarding")
    setIsOnboarding(onboarding === "true")
  }, [])

  return (
    <ProductProvider product={product}>
      <div className="container flex flex-col sm:flex-row sm:items-start py-6 relative">
        <div className="flex flex-col sm:sticky sm:top-48 sm:py-0 sm:max-w-[300px] w-full py-8 gap-y-6">
          <ProductInfo product={product} />
          <ProductTabs product={product}  dict={dict}/>
        </div>
        <div className="block w-full relative">
          <ImageGallery images={product.thumbnail} />
        </div>
        <div
          className="flex flex-col sm:sticky sm:top-48 sm:py-0 sm:max-w-[300px] w-full py-8 gap-y-12"
          ref={infoRef}
        >
          <ProductActions product={product} />
        </div>
      </div>
     {/*  <div className="content-container my-16 px-6 small:px-8 small:my-32">
        <RelatedProducts product={product} />
      </div> */}
      <MobileActions product={product} show={!inView} />
    </ProductProvider>
  )
}

export default ProductTemplate
