"use client"

import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"
import { Cart } from "@/app/types/global" 
import Item from "@/app/components/cart/components/item"

interface ProductContext {
  cart: Cart[] | []
  increaseQuantity: (product: Cart) => void
  decreaseQuantity: (product: Cart) => void
  addToCart: (product: Cart) => void
}

const ProductActionContext = createContext<ProductContext | null>(null)

interface ProductProviderProps {
  children: React.ReactNode,
  cart?: Cart[] | []
}

export const ProductProvider = ({
  children,
}: ProductProviderProps) => {
  const item = {id: '1', title: 'title', thumbnail: '', price: 200, quantity: 2}
  const [cart, setCart] = useState<Cart[]>([item])
  
  const addToCart = (product: Cart) => {
    const itemInCart = cart.find((item) => item.id == product.id);
    if (itemInCart?.id) {
      itemInCart.quantity++;
    } else {
      setCart([...cart, product])
    }
  }

  const increaseQuantity = (product: Cart) => {
    const itemInCart = cart.find((item) => item.id == product.id);
    itemInCart && itemInCart.quantity++;
    setCart([...cart, product])
  }

  const decreaseQuantity = (product: Cart) => {
    const itemInCart = cart.find((item) => item.id == product.id);
    itemInCart && itemInCart.quantity--;
    setCart([...cart, product])
  }

  return (
    <ProductActionContext.Provider
      value={{
        cart,
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
