import { Heading, Text, clx } from "@medusajs/ui"

const Review = () => {
  
  return (
    <div className="bg-white px-4 sm:px-8">
      <div className="flex flex-row items-center justify-between mb-6">
        <Heading
          level="h2"
          className={clx(
            "flex flex-row text-3xl gap-x-2 items-baseline"
          )}
        >
          Review
        </Heading>
      </div>
        <>
          <div className="flex items-start gap-x-1 w-full mb-6">
            <div className="w-full">
              <Text className="text-med mb-1">
                By clicking the Place Order button, you confirm that you have
                read, understand and accept our Terms of Use, Terms of Sale and
                Returns Policy and acknowledge that you have read Medusa
                Store&apos;s Privacy Policy.
              </Text>
            </div>
          </div>
        </>
    </div>
  )
}

export default Review
