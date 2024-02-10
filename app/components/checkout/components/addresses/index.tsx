import { Button, Heading, Text } from "@medusajs/ui"
import Spinner from "@/app/components/icons/spinner"
import BillingAddress from "../billing_address"
import Divider from "@/app/components/divider"

const Addresses = () => {
 
  return (
    <div className="bg-white px-4 sm:px-8">
     
      <div>
        <Heading
          level="h2"
          className="text-3xl-regular gap-x-4 pb-6 pt-8"
        >
          Billing address
        </Heading>

        <BillingAddress />
      </div>

      <Button
        size="large"
        className="bg-black mt-6 text-white p-2"
        onClick={() => {}}
      >
        Continue to delivery
      </Button>   
      <div className="">
        {/* <Spinner /> */}
      </div>
      <Divider className="mt-8" />
    </div>
  )
}

export default Addresses
