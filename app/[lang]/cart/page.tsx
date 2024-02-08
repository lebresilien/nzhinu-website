import CartTemplate from "@/app/components/cart/templates"
import { Metadata } from "next"
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";

export const metadata: Metadata = {
  title: "Cart",
  description: "View your cart",
}

export default async function Cart({
	params: { lang },
}: Readonly<{
	params: { lang: Locale },
}>) {

    const dict = await getDictionary(lang)

  return <CartTemplate dict={dict} />
}
