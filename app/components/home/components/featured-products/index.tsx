import { getDictionary } from "@/get-dictionary"
import ProductRail from "./product-rail"
import { CategoryProduct } from "@/app/types/global"

type Props = {
  categories: CategoryProduct[] 
	dict: Awaited<ReturnType<typeof getDictionary>>['home']
}

const FeaturedProducts = ({categories, dict}: Props) => {
  return (
    <div className="px-10">
      <div className="py-12">
        <ul className="flex flex-col gap-x-6 gap-y-8">
          {categories && categories.map((category) => (
            <li key={category.slug}>
              <ProductRail category={category} dict={dict} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default FeaturedProducts
