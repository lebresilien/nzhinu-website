export type CollectionData = {
  id: string
  title: string
}

export type Product = {
  id: string
  title: string
  handle: string
  thumbnail: string
  slug: string
  price: number
  created_at?: Date,
  category?: Category
}

export type CategoryProduct = {
  name: string
  slug?: string
  products: Product[]
}

export type Category = {
  name: string
  slug: string
}

export type Cart = {
  id: string
  title: string
  thumbnail: string
  price: number,
  quantity: number
  handle?: string
}

export type AddressValues = {
  first_name: string
  last_name: string
  address_1: string
  city: string
  phone: string
}

export type CheckoutFormValues = {
  billing_address: AddressValues
  email: string
}

export type User = {
  firstName: string
  lastName: string
  email: string
}

export type ErrCallbackType = (err: { [key: string]: string }) => void

export type LoginParams = {
  email: string
  password: string
}
