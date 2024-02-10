import { Button, Heading } from "@medusajs/ui"
import CartTotals from "@/app/components/cart-totals"
import Divider from "@/app/components/divider"
import Link from "next/link"
import { Cart } from "@/app/types/global"
import { getDictionary } from "@/get-dictionary"

type SummaryProps = {
  dict: Awaited<ReturnType<typeof getDictionary>>
}

const Summary = ({ dict }: SummaryProps) => {
  return (
    <div className="flex flex-col gap-y-4">
      <Heading level="h2" className="text-[2rem] leading-[2.75rem]">
        { dict['cart']['summary'] }
      </Heading>
      <Divider />
      <CartTotals dict={dict} />
      <Link href="/checkout">
        <Button className="w-full h-10 bg-black text-white">{ dict['cart']['checkout'] }</Button>
      </Link>
    </div>
  )
}

export default Summary
