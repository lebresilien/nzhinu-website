"use client"

import { useAccount } from "@/app/lib/context/account-context"
import Register from "../components/register"
import Login from "../components/login"
import { getDictionary } from "@/get-dictionary"

type Props = {
	dic: Awaited<ReturnType<typeof getDictionary>>['login']
  lang: 'fr' | 'en'
}

const LoginTemplate = ({ dic, lang }: Props) => {
  const { loginView, user } = useAccount()
  const [currentView, _] = loginView
  
  return (
    <div className="w-full flex justify-center px-8 py-12">
      {currentView === "sign-in" ? <Login dic={dic} lang={lang} /> : <Register dic={dic} lang={lang} />}
    </div>
  )
}

export default LoginTemplate
