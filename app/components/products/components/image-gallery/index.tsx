import { Container } from "@medusajs/ui"
import Image from "next/image"

type ImageGalleryProps = {
  images: string
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  return (
    <div className="flex items-start relative">
      <div className="flex flex-col flex-1 sm:mx-16 gap-y-4">
          <Container
            className="relative aspect-[29/34] w-full overflow-hidden"
          >
            <Image
              src={images}
              priority={true}
              className="absolute inset-0 rounded-rounded"
              alt={`Product image`}
              fill
              sizes="(max-width: 576px) 180px, (max-width: 768px) 260px, (max-width: 992px) 360px, 480px"
              style={{
                objectFit: "cover",
              }}
            />
          </Container>
      </div>
    </div>
  )
}

export default ImageGallery
