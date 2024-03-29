import { Button, Heading, Text } from "@medusajs/ui"
import Spinner from "@/app/components/icons/spinner"
import BillingAddress from "../billing_address"
import Divider from "@/app/components/divider"
import { getDictionary } from "@/get-dictionary"

type Props = {
  dict: Awaited<ReturnType<typeof getDictionary>>
  lang: 'fr' | 'en'
}

const Addresses = ({ dict, lang }: Props) => {
 
  return (
    <div className="bg-white px-4 sm:px-8">
     
      <div>
        <Heading
          level="h2"
          className="text-3xl-regular gap-x-4 pb-6 pt-8"
        >
          {dict['checkout']['billing']}
        </Heading>

        <BillingAddress dict={dict} lang={lang} />
      </div>
  
      <div className="">
        {/* <Spinner /> */}
      </div>
      <Divider className="mt-8" />
    </div>
  )
}

export default Addresses
