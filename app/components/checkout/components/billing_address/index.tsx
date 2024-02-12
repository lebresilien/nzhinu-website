
import ConnectForm from "@/app/components/connect-form"
import Input from "@/app/components/input"
import { CheckoutFormValues } from "@/app/types/global"
import { getDictionary } from "@/get-dictionary"

type Props = {
  dict: Awaited<ReturnType<typeof getDictionary>>
}

const BillingAddress = ({ dict }: Props) => {
  return (

        <div className="grid grid-cols-2 gap-4">
          <Input
            label={dict['checkout']['firstname']}
            autoComplete="given-name"
            required
            name="firstName"
          />
          <Input
            label={dict['checkout']['lastname']}
            autoComplete="family-name"
            required
            name="lastName"
          />
          <Input
            label={dict['checkout']['address']}
            autoComplete="address-line1"
            required
            name="address"
          />
          <Input
            label={dict['checkout']['city']}
            autoComplete="address-level2"
            required
            name="city"
          />
          <Input
            label={dict['checkout']['phone']}
            autoComplete="tel"
            name="phone"
            required
          />
           <Input
            label={dict['checkout']['email']}
            autoComplete="email"
            name="email"
            required
          />
        </div>
  )
}

export default BillingAddress
