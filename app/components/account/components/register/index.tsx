import { LOGIN_VIEW, useAccount } from "@/app/lib/context/account-context"
import { Button } from "@medusajs/ui"
import Input from "@/app/components/input"
import { Spinner } from "@medusajs/icons"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { FieldValues, useForm } from "react-hook-form"
import { getDictionary } from "@/get-dictionary"

type Props = {
	dic: Awaited<ReturnType<typeof getDictionary>>['login']
}

interface RegisterCredentials extends FieldValues {
  first_name: string
  last_name: string
  email: string
  password: string
  phone?: string
}

const Register = ({ dic }: Props) => {
  const { loginView } = useAccount()
  const [_, setCurrentView] = loginView
  const [authError, setAuthError] = useState<string | undefined>(undefined)
  const router = useRouter()

  const handleError = (e: Error) => {
    setAuthError("An error occured. Please try again.")
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterCredentials>()

  const onSubmit = handleSubmit(async (credentials) => {
   
  })

  return (
    <div className="max-w-sm flex flex-col items-center mt-12">
      {isSubmitting && (
        <div className="z-10 fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center">
          <Spinner />
        </div>
      )}
      <h1 className="text-xl uppercase mb-6">
        {dic['nzhinu_member']}
      </h1>
      <p className="text-center text-xs text-gray-700 mb-4">
        {dic['create_account']}
      </p>
      <form className="w-full flex flex-col" onSubmit={onSubmit}>
        <div className="flex flex-col w-full gap-y-2">
          <Input
            label="First name"
            {...register("first_name", { required: "First name is required" })}
            autoComplete="given-name"
            errors={errors}
          />
          <Input
            label="Last name"
            {...register("last_name", { required: "Last name is required" })}
            autoComplete="family-name"
            errors={errors}
          />
          <Input
            label="Email"
            {...register("email", { required: "Email is required" })}
            autoComplete="email"
            errors={errors}
          />
          <Input
            label="Phone"
            {...register("phone")}
            autoComplete="tel"
            errors={errors}
          />
          <Input
            label="Password"
            {...register("password", {
              required: "Password is required",
            })}
            type="password"
            autoComplete="new-password"
            errors={errors}
          />
        </div>
        {authError && (
          <div>
            <span className="text-rose-500 w-full text-sm">
              {dic['error_login']}
            </span>
          </div>
        )}
        <span className="text-center text-gray-700 text-sm mt-6">
          {dic['agree']}&apos;s{" "}
          <Link href="#" className="underline">
            {dic['policy']}
          </Link>{" "}
          {dic['and']}{" "}
          <Link href="#" className="underline">
            {dic['terms']}
          </Link>
          .
        </span>
        <Button className="mt-6 w-full p-2 bg-gray-900 text-white hover:bg-gray-800" size="xlarge">
          {dic['join']}
        </Button>
      </form>
      <span className="text-center text-gray-700 text-sm mt-6">
        {dic['already']}?{" "}
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.SIGN_IN)}
          className="underline"
        >
          {dic['sign']}
        </button>
        .
      </span>
    </div>
  )
}

export default Register
