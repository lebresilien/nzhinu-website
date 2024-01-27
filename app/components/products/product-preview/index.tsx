import Link from "next/link"
import { Product} from "@/app/types/global"
import Thumbnail from "../thumbnail"
import { Text } from "@medusajs/ui"
import Image from "next/image"

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
        <Text className="text-sm text-primary">{title}</Text>
        <div className="flex items-center gap-x-2">
          <Text className="text-sm text-gray-900 text-muted-foreground">
            {price} FCFA
          </Text>
        </div>
      </div>
    </div>
  </Link>
)

export default ProductPreview
