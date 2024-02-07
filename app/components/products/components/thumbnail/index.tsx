import { Container } from "@medusajs/ui"
import PlaceholderImage from "@/app/components/icons/placeholder-image"
import clsx from "clsx"
import Image from "next/image"
import React from "react"

type ThumbnailProps = {
  thumbnail: string
  size?: "small" | "medium" | "large" | "full" | "square"
  isFeatured?: boolean
  className?: string
}

const Thumbnail: React.FC<ThumbnailProps> = ({
  thumbnail,
  size = "small",
  isFeatured,
  className,
}) => {
  const initialImage = thumbnail

  return (
    <Container
      className={clsx(
        "flex relative w-full overflow-hidden p-4 shadow-md items-center justify-center bg-secondary rounded-large group-hover:shadow-xl transition-shadow ease-in-out duration-150",
        className,
        {
          "aspect-[11/14]": isFeatured,
          "aspect-[11/15]": !isFeatured && size !== "small",
          "aspect-[1/1]": size === "small",
          "w-full": size === "full",
        }
      )}
    >
      <Image quality={50} className="absolute z-30 object-none object-center" fill alt="Thumbnail" src={initialImage} sizes="(max-width: 576px) 180px, (max-width: 768px) 260px, (max-width: 992px) 300px, 350px" />
    </Container>
  )
}

const ImageOrPlaceholder = ({
  image,
  size,
}: Pick<ThumbnailProps, "size"> & { image?: string }) => {
  return image ? (
    <Image
      src={image}
      alt="Thumbnail"
      className="absolute inset-0 object-cover object-center"
      draggable={false}
      quality={50}
      sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
      fill
    />
  ) : (
    <div className="w-full h-full absolute inset-0 flex items-center justify-center">
      <PlaceholderImage size={size === "small" ? 16 : 24} />
    </div>
  )
}

export default Thumbnail
