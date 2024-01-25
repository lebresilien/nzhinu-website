import ProductRail from "./product-rail"
import { CategoryProduct } from "@/app/types/global"

const FeaturedProducts = ({
  categories,
}: {
  categories: CategoryProduct[]
}) => {
  return (
    <div className="py-12">
      <div className="py-12">
        <ul className="flex flex-col gap-x-6 gap-y-8">
          {categories.map((category) => (
            <li key={category.slug}>
              <ProductRail category={category} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default FeaturedProducts
