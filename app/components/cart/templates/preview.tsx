import { Table, clx } from "@medusajs/ui"
import Item from "@/app/components/cart/components/item"
import { Cart } from "@/app/types/global"

type ItemsTemplateProps = {
  items: Cart[]
}

const ItemsPreviewTemplate = ({ items }: ItemsTemplateProps) => {
  const hasOverflow = items && items.length > 4

  return (
    <div
      className={clx({
        "pl-[1px] overflow-y-scroll overflow-x-hidden no-scrollbar max-h-[420px]":
          hasOverflow,
      })}
    >
      <Table>
        <Table.Body>
          {
            items
              .map((item) => {
                return (
                  <Item
                    key={item.id}
                    product={item}
                  />
                )
            })
          }
        </Table.Body>
      </Table>
    </div>
  )
}

export default ItemsPreviewTemplate
