import LoginTemplate from "@/app/components/account/templates/login-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sign in",
}

export default function Login() {
  return <LoginTemplate />
}
