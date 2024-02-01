"use client"

import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"
import { Product } from "@/app/types/global" 

interface ProductContext {
  quantity: number,
  price: number,
  increaseQuantity: () => void
  decreaseQuantity: () => void
  addToCart: () => void
}

const ProductActionContext = createContext<ProductContext | null>(null)

interface ProductProviderProps {
  children?: React.ReactNode,
  product: Product
}

export const ProductProvider = ({
  children,
}: ProductProviderProps) => {
  const [quantity, setQuantity] = useState<number>(1)
  const [price, setPrice] = useState<number>(1)
  const [options, setOptions] = useState<Record<string, string>>({})


  // memoized function to check if the current options are a valid variant
 

  // if product only has one variant, then select it
 

 

  // memoized function to get the price of the current variant


  const updateOptions = (update: Record<string, string>) => {
    setOptions({ ...options, ...update })
  }

  const addToCart = () => {
    /* if (variant) {
      addItem({
        variantId: variant.id,
        quantity,
      })
    } */
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  return (
    <ProductActionContext.Provider
      value={{
        quantity,
        price,
        addToCart,
        decreaseQuantity,
        increaseQuantity,
      }}
    >
      {children}
    </ProductActionContext.Provider>
  )
}

export const useProductActions = () => {
  const context = useContext(ProductActionContext)
  if (context === null) {
    throw new Error(
      "useProductActionContext must be used within a ProductActionProvider"
    )
  }
  return context
}
