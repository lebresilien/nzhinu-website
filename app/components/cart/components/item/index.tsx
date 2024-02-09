import { Table, Text, clx } from "@medusajs/ui"
import LineItemPrice from "@/app//components/line-item-price"
import LineItemUnitPrice from "@/app/components/line-item-unit-price"
import CartItemSelect from "@/app/components/cart/components/cart-item-select"
import Trash from "@/app/components/icons/trash"
import Thumbnail from "@/app/components/products/components/thumbnail"
import Link from "next/link"
import { Cart } from "@/app/types/global"
import { useProductActions } from "@/app/lib/context/product-context"

type ItemProps = {
  product: Cart
}

const Item = ({ product }: ItemProps) => {

  const { remove, updateQuantity } = useProductActions()

  return (
    <Table.Row className="w-full">
      <Table.Cell className="!pl-0 p-4 w-24">
        <Link
          href={`/products/${product.handle}`}
          className="flex sm:w-24 w-12"
        >
          <Thumbnail thumbnail={product.thumbnail} size="square" />
        </Link>
      </Table.Cell>

      <Table.Cell className="text-left">
        <Text className="text-md">{product.title}</Text>
      </Table.Cell>
        <Table.Cell>
          <div className="flex gap-2">
            <button
              className="flex items-center gap-x-"
              onClick={() => remove(product.id)}
            >
              <Trash size={18} />
            </button>
            <CartItemSelect
              value={product.quantity}
              onChange={(value) =>
                updateQuantity(
                  product.id,
                  parseInt(value.target.value),
                )
              }
              className="w-14 h-10 p-4"
            >
              {Array.from(
                [
                  ...Array(
                    product.quantity > 10
                      ? product.quantity
                      : 10
                  ),
                ].keys()
              )
                .slice(0, 10)
                .map((i) => {
                  const value = i + 1
                  return (
                    <option value={value} key={i}>
                      {value}
                    </option>
                  )
                })}
            </CartItemSelect>
          </div>
        </Table.Cell>

        <Table.Cell className="hidden sm:table-cell">
          <LineItemUnitPrice product={product} />
        </Table.Cell>

      <Table.Cell className="!pr-0">
        <span
          className={clx("!pr-0 flex flex-col items-end h-full justify-center")}
        >
          <LineItemPrice product={product} />
        </span>
      </Table.Cell>
    </Table.Row>
  )
}

export default Item
