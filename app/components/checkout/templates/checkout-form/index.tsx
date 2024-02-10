"use client"

import { useProductActions } from "@/app/lib/context/product-context"
import Review from "../../components/review"
import Addresses from "../../components/addresses"

const CheckoutForm = () => {
  const { cart } = useProductActions()

  if (cart.length == 0) {
    return null
  }

  return (
    <div>
      <div className="w-full grid grid-cols-1 gap-y-8">
        <div>
          <Addresses />
        </div>

       {/*  <div>
          <Shipping cart={cart} />
        </div>

        <div>
          <Payment />
        </div> */}

        <div>
          <Review />
        </div>
      </div>
    </div>
  )
}

export default CheckoutForm
