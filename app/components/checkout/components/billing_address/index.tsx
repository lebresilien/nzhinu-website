
import ConnectForm from "@/app/components/connect-form"
import Input from "@/app/components/input"
import { CheckoutFormValues } from "@/app/types/global"
import { getDictionary } from "@/get-dictionary"
import { FieldValues, useForm } from "react-hook-form"
import { Button } from "@medusajs/ui"

type Props = {
  dict: Awaited<ReturnType<typeof getDictionary>>
}

interface AdressCredentials extends FieldValues {
  name: string
  surname: string
  adress: string
  city: string
  email: string
  phone: string
}

const BillingAddress = ({ dict }: Props) => {

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AdressCredentials>()

  const onSubmit = handleSubmit(async (credentials) => {
    console.log(credentials)
  })

  return (

        <div>
          <form className="grid grid-cols-2 gap-4" onSubmit={onSubmit}>
            <Input
              label={dict['checkout']['firstname']}
              autoComplete="given-name"
              {...register("name", { required: "Email is required" })}
              errors={errors}
            />
            <Input
              label={dict['checkout']['lastname']}
              autoComplete="family-name"
              {...register("surname", { required: "Email is required" })}
              errors={errors}
            />
            <Input
              label={dict['checkout']['address']}
              autoComplete="address-line1"
              {...register("address", { required: "Email is required" })}
              errors={errors}
            />
            <Input
              label={dict['checkout']['city']}
              autoComplete="address-level2"
              {...register("city", { required: "Email is required" })}
              errors={errors}
            />
            <Input
              label={dict['checkout']['phone']}
              autoComplete="tel"
              {...register("phone", { required: "Email is required" })}
              errors={errors}
            />
            <Input
              label={dict['checkout']['email']}
              autoComplete="email"
              {...register("email", { required: "Email is required" })}
              errors={errors}
            />
            <Button
              size="large"
              className="bg-black mt-6 text-white p-2"
            >
              {dict['checkout']['delivery']}
            </Button> 
          </form>
        </div>
  )
}

export default BillingAddress
