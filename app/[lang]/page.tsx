import Image from 'next/image'
import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'
import Hero from '@/app/components/home/components/hero'
import { Suspense } from "react"
import SkeletonHomepageProducts from '../components/skeletons/components/skeleton-homepage-products'
import FeaturedProducts from '../components/home/components/featured-products'
import axios from 'axios'

async function getCate(lang: string) {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products/${lang}`);
    return response.data;
  } catch (error) {
    console.error('rerererereer', error);
  }
}

export default async function Home({
	params: { lang },
}: Readonly<{
	params: { lang: Locale }
}>) {

  const dict = await getDictionary(lang)
  const categories = await getCate(lang)

  return (
    <>
      <Hero />
      <Suspense fallback={<SkeletonHomepageProducts count={5} />}>
        <FeaturedProducts categories={categories} dict={dict['home']} />
      </Suspense> 
    </>
  )
}
