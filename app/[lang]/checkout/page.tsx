import CheckoutTemplate from "@/app/components/checkout/templates"
import { getDictionary } from "@/get-dictionary"
import { Metadata } from "next"
import { Locale } from "@/i18n-config";

export const metadata: Metadata = {
  title: "Checkout",
}

export default async function Checkout({
	params: { lang },
}: Readonly<{
	params: { lang: Locale},
}>) {
    
    const dict = await getDictionary(lang)
    
    return <CheckoutTemplate dict={dict} lang={lang} />
}
