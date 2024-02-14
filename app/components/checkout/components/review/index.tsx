import { Heading, Text, clx } from "@medusajs/ui"
import { getDictionary } from "@/get-dictionary"

type Props = {
  dict: Awaited<ReturnType<typeof getDictionary>>
}

const Review = ({ dict }: Props) => {
  
  return (
    <div className="bg-white px-4 sm:px-8">
      <div className="flex flex-row items-center justify-between mb-6">
        <Heading
          level="h2"
          className={clx(
            "flex flex-row text-3xl gap-x-2 items-baseline"
          )}
        >
          {dict['checkout']['review']}
        </Heading>
      </div>
        <>
          <div className="flex items-start gap-x-1 w-full mb-6">
            <div className="w-full">
              <Text className="text-md mb-1">
                {dict['checkout']['review_text']}
              </Text>
            </div>
          </div>
        </>
    </div>
  )
}

export default Review
