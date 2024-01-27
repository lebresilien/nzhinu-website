import { Container } from "@medusajs/ui"

const SkeletonProductPreview = () => {
  return (
    <div className="animate-pulse">
      <Container className="aspect-[9/16] w-full"/>
      <div className="flex justify-between text-base-regular mt-2">
        <div className="w-2/5 h-10 bg-gray-200"></div>
        <div className="w-1/5 h-10 bg-gray-200"></div>
      </div>
    </div>
  )
}

export default SkeletonProductPreview
