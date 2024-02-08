import { Button, Heading } from "@medusajs/ui"
import CartTotals from "@/app/components/cart-totals"
import Divider from "@/app/components/divider"
import Link from "next/link"
import { Cart } from "@/app/types/global"

type SummaryProps = {
  cart: Cart[]
}

const Summary = ({ cart }: SummaryProps) => {
  return (
    <div className="flex flex-col gap-y-4">
      <Heading level="h2" className="text-[2rem] leading-[2.75rem]">
        Summary
      </Heading>
      <Divider />
      <CartTotals data={cart} />
      <Link href="/checkout">
        <Button className="w-full h-10">Go to checkout</Button>
      </Link>
    </div>
  )
}

export default Summary
