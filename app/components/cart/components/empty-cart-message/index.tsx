import { Heading, Text } from "@medusajs/ui"
import UnderlineLink from "@/app/components/interactive-link"
import { getDictionary } from "@/get-dictionary"

type Props = {
  dict: Awaited<ReturnType<typeof getDictionary>>
}

const EmptyCartMessage = ({ dict }: Props) => {
  return (
    <div className="py-48 flex flex-col justify-center items-start">
      <Heading
        level="h1"
        className="flex flex-row text-3xl-regular gap-x-2 items-baseline"
      >
        { dict['cart']['title'] }
      </Heading>
      <Text className="text-base-regular mt-4 mb-6 max-w-[32rem]">
        { dict['cart']['browse'] }
      </Text>
      <div>
        <UnderlineLink href="/">{ dict['cart']['explore'] }</UnderlineLink>
      </div>
    </div>
  )
}

export default EmptyCartMessage
