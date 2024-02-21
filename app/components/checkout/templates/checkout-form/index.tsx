"use client"

import { useProductActions } from "@/app/lib/context/product-context"
import Review from "../../components/review"
import Addresses from "../../components/addresses"
import { getDictionary } from "@/get-dictionary"

type Props = {
  dict: Awaited<ReturnType<typeof getDictionary>>
  lang: 'fr' | 'en'
}

const CheckoutForm = ({ dict, lang }: Props) => {
  
  const { cart } = useProductActions()

  if (cart.length == 0) {
    return null
  }

  return (
    <div>
      <div className="w-full grid grid-cols-1 gap-y-8">
        <div>
          <Addresses dict={dict} lang={lang} />
        </div>

       {/*  <div>
          <Shipping cart={cart} />
        </div>

        <div>
          <Payment />
        </div> */}

        <div>
          <Review dict={dict} />
        </div>
      </div>
    </div>
  )
}

export default CheckoutForm
