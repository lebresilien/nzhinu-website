import Image from 'next/image'
import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'
import Hero from '@/app/components/home/components/hero'

export default async function Home({
	params: { lang },
}: Readonly<{
	params: { lang: Locale }
}>) {

  const dict = await getDictionary(lang)

  return (
    <>
      <Hero />
    </>
  )
}
