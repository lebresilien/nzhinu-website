import LoginTemplate from "@/app/components/account/templates/login-template"
import { Metadata } from "next"
import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'

export const metadata: Metadata = {
  title: "Sign in",
}

export default async function Login({
	params: { lang },
}: Readonly<{
	params: { lang: Locale }
}>) {
  const dict = await getDictionary(lang)
  return <LoginTemplate dic={dict['login']} lang={lang} />
}
