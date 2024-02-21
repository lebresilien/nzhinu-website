import { getPercentageDiff } from "@/app/lib/util/get-precentage-diff"
import { Cart } from "@/app/types/global"

type LineItemPriceProps = {
  product: Cart
}

const LineItemPrice = ({
  product,
}: LineItemPriceProps) => {

  return (
    <div className="flex flex-col gap-x-2 text-ui-fg-subtle items-end">
      <div className="text-left">
        <span>
          {product.price * product.quantity}
        </span>
      </div>
    </div>
  )
}

export default LineItemPrice
