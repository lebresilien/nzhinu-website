import { LOGIN_VIEW, useAccount } from "@/app/lib/context/account-context"
import { Button } from "@medusajs/ui"
import Input from "@/app/components/input"
import { Spinner } from "@medusajs/icons"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { FieldValues, useForm } from "react-hook-form"
import { getDictionary } from "@/get-dictionary"
import ErrorMessage from "@/app/components/error-message"

type Props = {
	dic: Awaited<ReturnType<typeof getDictionary>>['login']
}

interface SignInCredentials extends FieldValues {
  email: string
  password: string
}

const Login = ({ dic }: Props) => {
  const { loginView, handleLogin, loading, setLoading, error, setError } = useAccount()
  const [_, setCurrentView] = loginView
  const [authError, setAuthError] = useState<string | undefined>(undefined)
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInCredentials>()

  const onSubmit = handleSubmit(async (credentials) => {
    handleLogin(credentials)
  })

  return (
    <div className="max-w-sm w-full flex flex-col items-center">
      {loading && (
        <div className="z-10 fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center">
          <Spinner />
        </div>
      )}
      <h1 className="text-large-semi uppercase mb-6">{dic['title']}</h1>
      <p className="text-center text-base-regular text-gray-700 mb-8">
        {dic['subtitle']}
      </p>
      <form className="w-full" onSubmit={onSubmit}>
        <div className="flex flex-col w-full gap-y-2">
          <Input
            label={dic['email']}
            {...register("email", { required: "Email is required" })}
            autoComplete="email"
            errors={errors}
          />
          <Input
            label={dic['password']}
            {...register("password", { required: "Password is required" })}
            type="password"
            autoComplete="current-password"
            errors={errors}
          />
        </div>
        {error && (
          <div className="mt-5 flex items-center justify-center">
            <ErrorMessage message={error} />
          </div>
        )}
        <Button className="mt-6 w-full bg-gray-900 text-white p-2 hover:bg-gray-800" size="large">
          {dic['enter']}
        </Button>
      </form>
      <span className="text-center text-gray-700 text-sm mt-6">
        {dic['member']}{" "}
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.REGISTER)}
          className="underline"
        >
          {dic['join']}
        </button>
        .
      </span>
    </div>
  )
}

export default Login
