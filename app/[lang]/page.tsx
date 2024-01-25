import Image from 'next/image'
import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'
import Hero from '@/app/components/home/components/hero'
import { Suspense } from "react"
import SkeletonHomepageProducts from '../components/skeletons/components/skeleton-homepage-products'
import FeaturedProducts from '../components/home/components/featured-products'
import axios from 'axios'

/* async function get() {
  const res = await fetch('http://127.0.0.1:8000/api/products/fr')
  return res.json()
} */

async function getCate() {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/products/fr');
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
  const categories = await getCate()

  return (
    <>
      <Hero />
      <Suspense fallback={<SkeletonHomepageProducts count={3} />}>
        <FeaturedProducts categories={categories} />
      </Suspense> 
    </>
  )
}
