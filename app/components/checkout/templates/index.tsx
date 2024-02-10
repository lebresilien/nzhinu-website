import ChevronDown from "@/app/components/icons/chevron-down"
import Link from "next/link"
import CheckoutLoader from "../components/checkout-loader"
import CheckoutForm from "./checkout-form"
import CheckoutSummary from "./checkout-summary"
import SubmitSpinner from "../components/submit-spinner"
import { getDictionary } from "@/get-dictionary"

type Props = {
  dict: Awaited<ReturnType<typeof getDictionary>>
}
const CheckoutTemplate = ({ dict }: Props) => {
  return (
    <>
      <div className="bg-white relative sm:min-h-screen">
        {/* <SubmitSpinner /> */}
        <div className="h-10 bg-white">
          <nav className="flex items-center h-full justify-between content-container">
            <Link
              href="/cart"
              className="text-sm text-gray-700 flex items-center gap-x-2 uppercase flex-1 basis-0"
            >
              <>
                <ChevronDown className="rotate-90" size={16} />
                <span className="mt-px hidden sm:block uppercase">
                  Back to shopping cart
                </span>
                <span className="mt-px block sm:hidden">Back</span>
              </>
            </Link>
            <div className="flex-1 basis-0" />
          </nav>
        </div>
        <div className="relative">
          <CheckoutLoader />
          <div className="grid grid-cols-1 sm:grid-cols-[1fr_416px] container gap-x-40 py-12">
            <CheckoutForm />
            <CheckoutSummary dict={dict}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default CheckoutTemplate
