"use client"

import { useRouter } from "next/navigation"
import React, { createContext, useCallback, useContext, useState } from "react"

export enum LOGIN_VIEW {
  SIGN_IN = "sign-in",
  REGISTER = "register",
}

interface AccountContext {
  loginView: [LOGIN_VIEW, React.Dispatch<React.SetStateAction<LOGIN_VIEW>>]
}

const AccountContext = createContext<AccountContext | null>(null)

interface AccountProviderProps {
  children?: React.ReactNode
}


export const AccountProvider = ({ children }: AccountProviderProps) => {
  

  const loginView = useState<LOGIN_VIEW>(LOGIN_VIEW.SIGN_IN)

  const router = useRouter()

  const checkSession = useCallback(() => {
   /*  if (!customer && !retrievingCustomer) {
      router.push("/account/login")
    } */
  }, [])

  

  

  return (
    <AccountContext.Provider
      value={{
        loginView,
      }}
    >
      {children}
    </AccountContext.Provider>
  )
}

export const useAccount = () => {
  const context = useContext(AccountContext)

  if (context === null) {
    throw new Error("useAccount must be used within a AccountProvider")
  }
  return context
}
