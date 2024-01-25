import Link from "next/link"
import { Product} from "@/app/types/global"
import Thumbnail from "../thumbnail"
import { Text } from "@medusajs/ui"

const ProductPreview = ({
  id,
  title,
  handle,
  thumbnail,
  price,
  slug,
}: Product) => (
  <Link href={`/products/${slug}`} className="group">
    <div>
      <Thumbnail thumbnail={thumbnail} size="full" />
      <div className="flex font-medium mt-4 justify-between">
        <Text className="text-xs">{title}</Text>
        <div className="flex items-center gap-x-2">
          <Text className="line-through text-muted">
            {price}
          </Text>
        </div>
      </div>
    </div>
  </Link>
)

export default ProductPreview
