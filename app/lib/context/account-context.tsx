"use client"

import { useRouter } from "next/navigation"
import React, { createContext, useCallback, useContext, useState, useEffect } from "react"
import { User } from "@/app/types/global"
import { LoginParams } from "@/app/types/global"
import api from "../util/axios"

export enum LOGIN_VIEW {
  SIGN_IN = "sign-in",
  REGISTER = "register",
}

interface AccountContext {
  loginView: [LOGIN_VIEW, React.Dispatch<React.SetStateAction<LOGIN_VIEW>>]
  checkSession: () => void
  handleLogout: () => void
  handleLogin: (params: LoginParams) => void
  user: User | null,
  loading: boolean,
  setLoading: (state: boolean) => void
  setUser: (user: User | null) => void
  error: string
  setError: (text: string) => void
}

const AccountContext = createContext<AccountContext | null>(null)

interface AccountProviderProps {
  children?: React.ReactNode
}

export const AccountProvider = ({ children }: AccountProviderProps) => {
  
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const loginView = useState<LOGIN_VIEW>(LOGIN_VIEW.SIGN_IN)

  const router = useRouter()

 /*  const checkSession = useCallback(() => {
   if (!customer && !retrievingCustomer) {
      router.push("/account/login")
    } 
  }, []) */

  const checkSession = useCallback(() => {
    if (!user) {
       router.push("/account/login")
     } 
  }, [router, user])


  const handleLogin = (params: LoginParams) => {
    setLoading(true)
    setError('')
    api
      .post('/api/login', params)
      .then(async response => {
        setLoading(false)
        window.localStorage.setItem('userToken', response.data.userToken)
        
        setUser(response.data.userData)
        window.localStorage.setItem('userData', JSON.stringify(response.data.userData))

        const redirectURL = '/'
        router.replace(redirectURL as string)
      })
      .catch(err => {
        setLoading(false)
        setError(err.response.data.message)
      })
  }
  

  const handleLogout = () => {
   /*  useDeleteSession.mutate(undefined, {
      onSuccess: () => {
        loginView[1](LOGIN_VIEW.SIGN_IN)
        router.push("/")
      },
    }) */
  }

  useEffect(() => {
    const initAuth = async (): Promise<void> => {
      const storedToken = window.localStorage.getItem('userToken')!
      if (storedToken) {
        setLoading(true)
        await api
          .get('/api/me')
          .then(async response => {
            setLoading(false)
            setUser(response.data)
          })
          .catch(() => {
            localStorage.removeItem('userData')
            localStorage.removeItem('userToken')
            setUser(null)
            setLoading(false)
            /* if (authConfig.onTokenExpiration === 'logout' && !router.pathname.includes('login')) {
              router.replace('/login')
            } */
          })
      } else {
        setLoading(false)
      }
    }

    initAuth()
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, [user, router])

  return (
    <AccountContext.Provider
      value={{
        loginView,
        checkSession,
        handleLogout,
        user,
        setUser,
        loading,
        setLoading,
        handleLogin,
        error,
        setError
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
