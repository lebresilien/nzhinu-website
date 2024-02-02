import { Product } from "@/app/types/global"
import Back from "@/app/components/icons/back"
import FastDelivery from "@/app/components/icons/fast-delivery"
import Refresh from "@/app/components/icons/refresh"
import { useMemo } from "react"
import Accordion from "./accordion"
import { getDictionary } from "@/get-dictionary"

type ProductTabsProps = {
  product?: Product,
  dict: Awaited<ReturnType<typeof getDictionary>>['products']
}

const ProductTabs = ({ product, dict }: ProductTabsProps) => {
  const tabs = useMemo(() => {
    return [
      {
        label: dict['infos'],
        component: <ProductInfoTab product={product} dict={dict} />,
      },
      {
        label: dict['shipping'],
        component: <ShippingInfoTab dict={dict}/>,
      },
    ]
  }, [product, dict])

  return (
    <div className="w-full">
      <Accordion type="multiple">
        {tabs.map((tab, i) => (
          <Accordion.Item
            key={i}
            title={tab.label}
            headingSize="medium"
            value={tab.label}
          >
            {tab.component}
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  )
}

const ProductInfoTab = ({ product, dict }: ProductTabsProps) => {
  return (
    <div className="text-sm py-8">
      <div className="grid grid-cols-2 gap-x-8">
        <div className="flex flex-col gap-y-4">
          <div>
            <span className="font-semibold">Material</span>
            <p>{product && product.title}</p>
          </div>
          <div>
            <span className="font-semibold">Country of origin</span>
            <p>cameroun</p>
          </div>
          <div>
            <span className="font-semibold">Type</span>
            <p>tyoe</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <div>
            <span className="font-semibold">Weight</span>
            <p>50</p>
          </div>
          <div>
            <span className="font-semibold">Dimensions</span>
            <p>
             200*150
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const ShippingInfoTab = ({ dict }: ProductTabsProps) => {
  return (
    <div className="text-sm py-8">
      <div className="grid grid-cols-1 gap-y-8">
        <div className="flex items-start gap-x-2">
          <FastDelivery />
          <div>
            <span className="font-semibold">{dict['delivery']}</span>
            <p className="max-w-sm">
              {dict['fast']}
            </p>
          </div>
        </div>
        <div className="flex items-start gap-x-2">
          <Refresh />
          <div>
            <span className="font-semibold">{dict['simple']}</span>
            <p className="max-w-sm">
              {dict['exchange']}
            </p>
          </div>
        </div>
        <div className="flex items-start gap-x-2">
          <Back />
          <div>
            <span className="font-semibold">{dict['easy']}</span>
            <p className="max-w-sm">
              {dict['back']}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductTabs
