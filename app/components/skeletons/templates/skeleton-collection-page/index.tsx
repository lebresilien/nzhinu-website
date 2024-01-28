import repeat from "@/app/lib/util/repeat"
import SkeletonProductPreview from "@/app/components/skeletons/components/skeleton-product-preview"
import { Key } from "react"

const SkeletonCollectionPage = () => {
  return (
    <div className="content-container py-6">
      <div className="animate-pulse mb-8">
        <div className="w-96 h-20 bg-gray-100"></div>
      </div>
      <ul className="grid grid-cols-2 small:grid-cols-3 medium:grid-cols-4 gap-x-6 gap-y-8 flex-1">
        {repeat(8).map((index: Key | null | undefined) => (
          <li key={index}>
            <SkeletonProductPreview />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SkeletonCollectionPage
