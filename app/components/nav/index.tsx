"use client"

import SideMenu from "../side-menu"
import MobileMenu from "../mobile-menu/templates"
import Link from "next/link"
import { getDictionary } from "@/get-dictionary"
import { useProductActions } from "@/app/lib/context/product-context"

type Props = {
	dic: Awaited<ReturnType<typeof getDictionary>>['home']
}

const Nav = ({ dic }: Props) => {
    
  const { cart } = useProductActions()
  console.log('manager', cart)

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-16 px-8 mx-auto border-b duration-200 bg-white">
        <nav className="text-xs flex items-center justify-between w-full h-full">
          <div className="flex-1 basis-0 h-full flex items-center">
            <div className="xs:block md:hidden">
                <SideMenu dic={dic['sidebar']}/>
            </div>
            <div className="hidden md:block h-full">
              <SideMenu dic={dic['sidebar']}/>
            </div>
          </div>

          <div className="flex items-center h-full">
            <Link
              href="/"
              className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
            >
              {dic['nav']['name']}
            </Link>
          </div>

          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            <div className="flex items-center gap-x-6 h-full">
              <Link className="hover:text-ui-fg-base" href="/login">
                {dic['nav']['account']}
              </Link>
              <Link className="hover:text-ui-fg-base" href="/login">
                {dic['nav']['cart']} {`(${cart.length})`}
              </Link>
            </div>
          </div>
        </nav>
        <MobileMenu />
      </header>
    </div>
  )
}

export default Nav
