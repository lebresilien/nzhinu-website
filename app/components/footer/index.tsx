"use client"

import clsx from "clsx"
import { Text } from "@medusajs/ui"
import Link from "next/link"
import { getDictionary } from "@/get-dictionary"

type Props = {
	dic: Awaited<ReturnType<typeof getDictionary>>
}

const Footer = ({ dic }: Props) => {

  return (
    <footer>
      <div className="border-t w-full px-5">
      <div className="flex flex-col">
        <div className="flex xs:flex-col gap-y-6 md:flex-row items-start justify-between py-20">
          <div>
            <Link
              href="/"
              className="text-sm hover:text-gray-700 uppercase"
            >
              Nzhinu creation
            </Link>
          </div>
          <div className="text-sm grid grid-cols-3 gap-x-10 md:gap-x-16">
            <div className="flex flex-col gap-y-2">
              <span className="text-sm font-medium">
                Categories
              </span>
              <ul className="grid grid-cols-1 gap-2 text-sm">
                <li className="flex flex-col gap-2">
                  <Link
                    className={clsx(
                        "hover:text-ui-fg-base",
                      )}
                      href={"/"}
                    >
                      Pagnes
                  </Link>
                </li>
                <li className="flex flex-col gap-2">
                  <Link
                    className={clsx(
                        "hover:text-ui-fg-base",
                      )}
                      href={"/"}
                    >
                      Sacs
                  </Link>
                </li>
                <li className="flex flex-col gap-2">
                  <Link
                    className={clsx(
                        "hover:text-sm",
                      )}
                      href={"/"}
                    >
                      Coris
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="flex flex-col gap-y-2">
              <span className="text-sm font-medium">{dic['home']['footer']['contact']}</span>
              <ul className="grid grid-cols-1 gap-y-2">
                <li>
                  <a
                    href="https://github.com/medusajs"
                    target="_blank"
                    rel="noreferrer"
                    className=""
                  >
                    Linkedin
                  </a>
                </li>
                <li>
                  <a
                    href="https://docs.medusajs.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-ui-fg-base"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/medusajs/nextjs-starter-medusa"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-ui-fg-base"
                  >
                    Faceboook
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex w-full mb-10 justify-between text-xs">
          <Text className="">
            © {new Date().getFullYear()} Nzhinu Store. {dic['home']['sidebar']['copyright']}
          </Text>
          <Text className="flex gap-x-2 items-center">
            {dic['home']['footer']['powered']}
            <a href="https://www.medusajs.com" target="_blank" rel="noreferrer">
              negro services
            </a>
        </Text>
        </div>
      </div>
    </div>
    </footer>
  )
}

export default Footer
