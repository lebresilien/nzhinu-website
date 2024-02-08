import { Heading, Table } from "@medusajs/ui"
import Item from "@/app/components/cart/components/item"
import { Cart } from "@/app/types/global"
import SkeletonLineItem from "../../skeletons/components/skeleton-line-item"
import { getDictionary } from "@/get-dictionary"

type ItemsTemplateProps = {
  products?: Cart[]
  dict: Awaited<ReturnType<typeof getDictionary>>
}

const ItemsTemplate = ({ products, dict }: ItemsTemplateProps) => {
  return (
    <div>
      <div className="pb-3 flex items-center">
        <Heading className="text-[2rem] leading-[2.75rem]">{ dict['cart']['title'] }</Heading>
      </div>
      <Table>
        <Table.Header className="border-t-0">
          <Table.Row className="text-md">
            <Table.HeaderCell className="!pl-0">{ dict['cart']['item'] }</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
            <Table.HeaderCell>{ dict['cart']['quantity'] }</Table.HeaderCell>
            <Table.HeaderCell className="sm:table-cell">
              { dict['cart']['price'] }
            </Table.HeaderCell>
            <Table.HeaderCell className="!pr-0 text-right">
              Total
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
        {products
            ? products
                .map((product) => {
                  return <Item key={product.id} product={product} />
                })
            : Array.from(Array(5).keys()).map((i) => {
                return <SkeletonLineItem key={i} />
              })}
        </Table.Body>
      </Table>
    </div>
  )
}

export default ItemsTemplate
