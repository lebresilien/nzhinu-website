import { Button, Heading, Text } from "@medusajs/ui"
import { CheckCircleSolid } from "@medusajs/icons"
import Spinner from "@/app/components/icons/spinner"
import BillingAddress from "../billing_address"
import Divider from "@/app/components/divider"

const Addresses = () => {
 

  return (
    <div className="bg-white px-4 sm:px-8">
      <div className="flex flex-row items-center justify-between mb-6">
        <Heading
          level="h2"
          className="flex flex-row text-3xl-regular gap-x-2 items-baseline"
        >
          Address
         <CheckCircleSolid />
        </Heading>
       
          <Text>
            <button className="text-ui-fg-interactive">
              Edit
            </button>
          </Text>

      </div>
     
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
        className="mt-6"
        onClick={() => {}}
      >
        Continue to delivery
      </Button>   
      <div className="">
        <Spinner />
      </div>
      <Divider className="mt-8" />
    </div>
  )
}

export default Addresses
