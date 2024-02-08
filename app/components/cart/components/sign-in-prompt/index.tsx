import { getDictionary } from "@/get-dictionary"
import { Button, Heading, Text } from "@medusajs/ui"
import Link from "next/link"

type Props = {
  dict: Awaited<ReturnType<typeof getDictionary>>
}

const SignInPrompt = ({ dict }: Props) => {
  return (
    <div className="bg-white flex items-center justify-between">
      <div>
        <Heading level="h2" className="text-lg">
          { dict['cart']['already'] }
        </Heading>
        <Text className="text-md mt-2">
          { dict['cart']['sign'] }
        </Text>
      </div>
      <div>
        <Link href="/account/login">
          <Button variant="secondary" className="bg-zinc-50 h-10 p-3">
            { dict['login']['sign'] }
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default SignInPrompt
