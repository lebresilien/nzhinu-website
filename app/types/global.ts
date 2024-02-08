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
}
