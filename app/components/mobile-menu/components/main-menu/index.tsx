import { useMobileMenu } from "@/app/lib/context/mobile-menu-context"
import ChevronDown from "@/app/components/icons/chevron-down"
import Link from "next/link"
import { Heading } from "@medusajs/ui"

const MainMenu = () => {

  const {
    close,
    screen: [_, setScreen],
  } = useMobileMenu()

  const setScreenCountry = () => setScreen("country")

  return (
    <div className="flex flex-col flex-1">
      <div className="flex items-center justify-between w-full border-b border-gray-200 p-6">
        <div className="flex-1 basis-0">
          <button
            className="flex items-center gap-x-2"
            onClick={setScreenCountry}
          >
            ref flagdd
            <ChevronDown />
          </button>
        </div>

        <Heading className="txt-compact-xlarge-plus text-ui-fg-subtle uppercase">
          Medusa Storepoo
        </Heading>

        <div className="flex-1 basis-0 flex justify-end">
          <button onClick={close}>
            close
          </button>
        </div>
      </div>

      <div className="space-y-6 flex-1 flex flex-col justify-between p-6">
       
        <div className="flex flex-col flex-1 text-large-regular text-gray-900">
          <ul className="flex flex-col gap-y-2">
            <li className="bg-gray-50 p-4 rounded-rounded">
              <Link href="/store">
                <button
                  className="flex items-center justify-between w-full"
                  onClick={close}
                >
                  <span className="sr-only">Go to Store</span>
                  <span>Store</span>
                  <ChevronDown className="-rotate-90" />
                </button>
              </Link>
            </li>
            
          </ul>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col gap-y-8 text-small-regular">
            
              <div className="flex flex-col gap-y-4 ">
                <span className="text-gray-700 uppercase">Account</span>
                <Link href={`/account/login`} passHref>
                  <button
                    className="flex items-center justify-between border-b border-gray-200 py-2 w-full"
                    onClick={close}
                  >
                    <span className="sr-only">Go to sign in page</span>
                    <span className="normal-case">Sign in</span>
                    <ChevronDown className="-rotate-90" />
                  </button>
                </Link>
              </div>
              {/*  if your are connect use the block below*/ }
              {/* <div className="flex flex-col gap-y-4">
                <span className="text-gray-700 uppercase">Signed in as</span>
                <Link href={`/account`} passHref>
                  <button
                    className="flex items-center justify-between border-b border-gray-200 py-2 w-full"
                    onClick={close}
                  >
                    <span className="sr-only">Go to account page</span>
                    <span className="normal-case">email</span>
                    <ChevronDown className="-rotate-90" />
                  </button>
                </Link>
              </div> */}
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainMenu
