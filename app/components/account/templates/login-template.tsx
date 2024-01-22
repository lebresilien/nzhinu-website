"use client"

import { useAccount } from "@/app/lib/context/account-context"
import Register from "../components/register"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import Login from "../components/login"
import { getDictionary } from "@/get-dictionary"

type Props = {
	dic: Awaited<ReturnType<typeof getDictionary>>['login']
}

const LoginTemplate = ({ dic }: Props) => {
  const { loginView } = useAccount()
  const [currentView, _] = loginView

  const router = useRouter()

  /* useEffect(() => {
    if (!retrievingCustomer && customer) {
      router.push("/account")
    }
  }, [customer, retrievingCustomer, router])
 */
  return (
    <div className="w-full flex justify-center px-8 py-12">
      {currentView === "sign-in" ? <Login dic={dic} /> : <Register dic={dic} />}
    </div>
  )
}

export default LoginTemplate
