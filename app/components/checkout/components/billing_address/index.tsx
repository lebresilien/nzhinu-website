
import ConnectForm from "@/app/components/connect-form"
import Input from "@/app/components/input"
import { CheckoutFormValues } from "@/app/types/global"

const BillingAddress = () => {
  return (

        <div className="grid grid-cols-2 gap-4">
          <Input
            label="First name"
            autoComplete="given-name"
            required
            name="firstName"
          />
          <Input
            label="Last name"
            autoComplete="family-name"
            required
            name="lastName"
          />
          <Input
            label="Address"
            autoComplete="address-line1"
            required
            name="address"
          />
          <Input
            label="City"
            autoComplete="address-level2"
            required
            name="city"
          />
          <Input
            label="Phone"
            autoComplete="tel"
            name="phone"
            required
          />
           <Input
            label="Email"
            autoComplete="email"
            name="email"
            required
          />
        </div>
  )
}

export default BillingAddress
