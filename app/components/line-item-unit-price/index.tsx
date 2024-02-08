import { Cart } from "@/app/types/global"

type LineItemUnitPriceProps = {
  product: Cart
}

const LineItemUnitPrice = ({
  product
}: LineItemUnitPriceProps) => {

  return (
    <div className="flex flex-col text-ui-fg-muted justify-center h-full">
      <span>
        {product.price}
      </span>
    </div>
  )
}

export default LineItemUnitPrice
