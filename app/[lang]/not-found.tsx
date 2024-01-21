import { Metadata } from "next"
import Link from "next/link"
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { getDictionary } from "@/get-dictionary"

export const metadata: Metadata = {
  title: "404"
}

export default async function NotFound() {

  let headers = { 'accept-language': 'fr,en;q=0.5' }
  let languages = new Negotiator({ headers }).languages()
  let locales = ['en', 'fr']
  let defaultLocale = 'fr'
  let lang = match(languages, locales, defaultLocale) 
  // @ts-ignore
  const dict = await getDictionary(lang)

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)]">
      <h1 className="text-2xl text-gray-900">{dict['not_found']['name']}</h1>
      <p className="text-sm text-gray-700">
        {dict['not_found']['exists']}
      </p>
      <Link href="/" className="mt-4 underline text-gray-900">
        {dict['not_found']['back']}
      </Link>
    </div>
  )
}
