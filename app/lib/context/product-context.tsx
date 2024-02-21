"use client"

import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"
import { Cart } from "@/app/types/global" 

interface ProductContext {
  cart: Cart[] | []
  updateQuantity: (id: string, value: number) => void
  addToCart: (product: Cart) => void
  remove: (id: string) => void,
  sum: () => number
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
      product.quantity++;
      setCart([...cart, product])
    }
  }

  const updateQuantity = (id: string, value: number) => {
    setCart(prevItems =>
      prevItems.map(item => (item.id === id ? { ...item, quantity: value } : item))
    );
  }

  const remove = (id: string) => {
    const itemInCart = cart.filter((item) => item.id !== id);
    setCart(itemInCart)
  }

  const sum = () => {
    let amount = 0
    for(const i in cart) {
      amount += cart[i].quantity * cart[i].price; 
    }
    return amount
  }

  return (
    <ProductActionContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        remove,
        sum
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
