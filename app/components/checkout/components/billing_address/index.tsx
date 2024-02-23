import Input from "@/app/components/input"
import { getDictionary } from "@/get-dictionary"
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

const BillingAddress = ({ dict, lang }: Props) => {

  const { cart, sum } = useProductActions()
  const { user } = useAccount()
  
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [contact, setContact] = useState({
    name: user ? user.name : "",
    surname: user ? user.surname : "",
    city: user ? user.city : "",
    email: user ? user.email : "",
    phone: user ? user.phone : "",
    address: user ? user.address : "",
    lang: "",
    price: 0,
    products: [0]
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    
    event.preventDefault();

    let products = []
    setLoading(true)
    setError('')

    for(const i in cart) {
      products.push(parseInt(cart[i]['id']))
    }

    contact['lang'] = lang
    contact['products'] = products
    contact['price'] = sum() + 1000

    api.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/orders`, contact)
    .then(resp => {
      setLoading(false)
      console.log("response", resp.data)
    })
    .catch(err => {
      setLoading(false)
      setError(err.response.data.message)
    })
    
  }

  return (

        <div>
            {loading && (
              <div className="z-10 fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center">
                <Spinner />
              </div>
            )}
          <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit}>
            <Input
              label={dict['checkout']['firstname']}
              autoComplete="given-name"
              name="name"
              value={contact.name}
              onChange={handleChange}
            />
            <Input
              label={dict['checkout']['lastname']}
              autoComplete="family-name"
              name="surname"
              value={contact.surname}
              onChange={handleChange}
            />
            <Input
              label={dict['checkout']['address']}
              autoComplete="address-line1"
              name="address"
              value={contact.address}
              onChange={handleChange}
            />
            <Input
              label={dict['checkout']['city']}
              autoComplete="address-level2"
              name="city"
              value={contact.city}
              onChange={handleChange}
            />
            <Input
              label={dict['checkout']['phone']}
              autoComplete="tel"
              name="phone"
              value={contact.phone}
              onChange={handleChange}
            />
            <Input
              label={dict['checkout']['email']}
              autoComplete="email"
              name="email"
              value={contact.email}
              onChange={handleChange}
            />
            <Button
              type="submit"
              disabled={loading}
              size="large"
              className="bg-black mt-6 text-white p-2 hover:bg-gray-800"
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
