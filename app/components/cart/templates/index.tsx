"use client"

import SkeletonCartPage from "@/app/components/skeletons/templates/skeleton-cart-page"
import EmptyCartMessage from "../components/empty-cart-message"
import SignInPrompt from "../components/sign-in-prompt"
import ItemsTemplate from "./items"
import Summary from "./summary"
import Divider from "@/app/components/divider"
import { useProductActions } from "@/app/lib/context/product-context"
import { getDictionary } from "@/get-dictionary"
import { useAccount } from "@/app/lib/context/account-context"

type CartTemplateProps = {
  dict: Awaited<ReturnType<typeof getDictionary>>
}

const CartTemplate = ({ dict }: CartTemplateProps) => {

  const { cart } = useProductActions()
  const { user } = useAccount()

  if (!cart) {
    return <SkeletonCartPage />
  }

  return (
    <div className="py-12">
      <div className="container">
        {cart.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-40">
            <div className="flex flex-col sm:col-span-2 p-6 gap-y-6">
               {!user && ( 
                <>
                  <SignInPrompt dict={dict} />
                  <Divider />
                </>
              )} 

              <ItemsTemplate products={cart} dict={dict}/>
            </div>
            <div className="relative">
              <div className="flex flex-col gap-y-8 sticky top-12">
                {cart && 
                  <>
                    <div className="p-6">
                      <Summary dict={dict} />
                    </div>
                  </>
                }
              </div>
            </div>
          </div>
        ) : (
          <div>
            <EmptyCartMessage dict={dict} />
          </div>
        )}
      </div>
    </div>
  )
}

export default CartTemplate
