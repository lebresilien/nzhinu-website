import ProductPreview from "../product-preview"
import { Product } from "@/app/types/global"
import { getDictionary } from "@/get-dictionary"

type RelatedProductsProps = {
  p: Product,
  dict: Awaited<ReturnType<typeof getDictionary>>['products']
}

const RelatedProducts = ({ p, dict }: RelatedProductsProps) => {
  
  return (
    <div className="product-page-constraint">
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-gray-600 mb-6">
          {dict['related']}
        </span>
        <p className="text-2xl text-gray-900 max-w-lg">
         {dict['same']}
        </p>
      </div>

      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-8">
       {/*  {previews.map((p) => ( */}
          <li>
            <ProductPreview {...p} />
          </li>
       {/*  ))} */}
      </ul>
      
    </div>
  )
}

export default RelatedProducts
