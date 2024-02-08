import { Button, Heading, Text } from "@medusajs/ui"
import Link from "next/link"

const SignInPrompt = () => {
  return (
    <div className="bg-white flex items-center justify-between">
      <div>
        <Heading level="h2" className="text-lg">
          Already have an account?
        </Heading>
        <Text className="text-md mt-2">
          Sign in for a better experience.
        </Text>
      </div>
      <div>
        <Link href="/account/login">
          <Button variant="secondary" className="bg-zinc-50 h-10 p-3">
            Sign in
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default SignInPrompt
