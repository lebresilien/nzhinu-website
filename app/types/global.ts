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
  created_at?: Date
}

export type CategoryProduct = {
  name: string
  slug?: string
  products: Product[]
}

