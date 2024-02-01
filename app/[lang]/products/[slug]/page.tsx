
import ProductTemplate from "@/app/components/products/templates"
import axios from "axios"
import { Metadata } from "next"
import { notFound } from "next/navigation"

type Props = {
  params: { slug: string }
}

/* export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await axios.get(`${process.env.BACKEND_URL}/api/categories/${lang}/${slug}`)

  const product = data.products[0]

  if (!product) {
    notFound()
  }

  return {
    title: `${product.title} | Nzhinu Store`,
    description: `${product.title}`,
    openGraph: {
      title: `${product.title} | Nzhinu Store`,
      description: `${product.title}`,
      images: product.thumbnail ? [product.thumbnail] : [],
    },
  }
} */

export default async function ProductPage({
	params: { lang, slug },
}: Readonly<{
	params: { lang: Locale, slug: string },
}>) {

  console.log('ooooooo', slug)
  return <p>bineeeeeeeeee</p>
}
