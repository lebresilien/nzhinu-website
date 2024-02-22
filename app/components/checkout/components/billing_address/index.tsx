import Input from "@/app/components/input"
import { getDictionary } from "@/get-dictionary"
import { FieldValues, useForm } from "react-hook-form"
import { Button } from "@medusajs/ui"
import { useProductActions } from "@/app/lib/context/product-context"
import api from "@/app/lib/util/axios"
import ErrorMessage from "@/app/components/error-message"
import { useState } from "react"
import Spinner from "@/app/components/icons/spinner"
import { useAccount } from "@/app/lib/context/account-context"

type Props = {
  dict: Awaited<ReturnType<typeof getDictionary>>
  lang: 'fr' | 'en'
}

interface AdressCredentials extends FieldValues {
  name: string
  surname: string
  adress: string
  city: string
  email: string
  phone: string
}

const BillingAddress = ({ dict, lang }: Props) => {

  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AdressCredentials>()

  const { cart, sum } = useProductActions()
  const { user } = useAccount()
  console.log('current user', user)

  const onSubmit = handleSubmit(async (data) => {
    let products = []
    setLoading(true)
    setError('')

    for(const i in cart) {
      products.push(parseInt(cart[i]['id']))
    }

    data['lang'] = lang
    data['products'] = products
    data['price'] = sum() + 1000
    
    api.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/orders`, data)
    .then(resp => {
      setLoading(false)
      console.log("response", resp.data)
    })
    .catch(err => {
      setLoading(false)
      setError(err.response.data.message)
    })
    
  })

  return (

        <div>
            {loading && (
              <div className="z-10 fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center">
                <Spinner />
              </div>
            )}
          <form className="grid grid-cols-2 gap-4" onSubmit={onSubmit}>
            <Input
              label={dict['checkout']['firstname']}
              autoComplete="given-name"
              {...register("name", { required: "Email is required" })}
              errors={errors}
              value={user ? user.name : ""}
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
              disabled={loading}
              size="large"
              className="bg-black mt-6 text-white p-2"
            >
              {dict['checkout']['delivery']}
            </Button> 
          </form>
          {error && (
            <div className="my-5 flex">
              <ErrorMessage message={error} />
            </div>
          )}
        </div>
  )
}

export default BillingAddress
