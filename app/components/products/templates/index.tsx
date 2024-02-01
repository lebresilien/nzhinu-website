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

type ProductTemplateProps = {
  product: Product
}

const ProductTemplate: React.FC<ProductTemplateProps> = ({ product }) => {
  const [isOnboarding, setIsOnboarding] = useState<boolean>(false)

  const infoRef = useRef<HTMLDivElement>(null)

  const inView = useIntersection(infoRef, "0px")

  useEffect(() => {
    const onboarding = window.sessionStorage.getItem("onboarding")
    setIsOnboarding(onboarding === "true")
  }, [])

  return (
    <ProductProvider product={product}>
      <div className="content-container flex flex-col small:flex-row small:items-start py-6 relative">
        <div className="flex flex-col small:sticky small:top-48 small:py-0 small:max-w-[300px] w-full py-8 gap-y-6">
          <ProductInfo product={product} />
          <ProductTabs product={product} />
        </div>
        <div className="block w-full relative">
          <ImageGallery images={product.thumbnail} />
        </div>
        <div
          className="flex flex-col xs:sticky xs:top-48 xs:py-0 xs:max-w-[300px] w-full py-8 gap-y-12"
          ref={infoRef}
        >
          {isOnboarding && <ProductOnboardingCta />}
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
