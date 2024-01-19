import Link from "next/link"
import { Fragment } from "react"
import { Popover, Transition } from "@headlessui/react"
import { Text, clx, useToggleState } from "@medusajs/ui"
import { Icon } from "../ui/icons"
import { getDictionary } from "@/get-dictionary"

type Props = {
	dic: Awaited<ReturnType<typeof getDictionary>>['home']['sidebar']
}
const SideMenu = ({ dic }: Props) => {

  const SideMenuItems = [
    {
      name: dic['home'],
      href: "/"
    },
    {
      name: dic['store'],
      href: "/store"
    },
    {
      name: dic['account'],
      href: "/account"
    },
    {
      name: dic['cart'],
      href: "/cart"
    }
  ]
  
  const handleSearchClick = (close: () => void) => {
    close()
  }

  const toggleState = useToggleState()

  return (
    <div className="h-full">
      <div className="flex items-center h-full">
        <Popover className="h-full flex">
          {({ open, close }) => (
            <>
              <div className="relative flex h-full">
                <Popover.Button className="relative h-full flex items-center transition-all ease-out duration-200 focus:outline-none hover:text-ui-fg-base">
                  Menu
                </Popover.Button>
              </div>

              <Transition
                show={open}
                as={Fragment}
                enter="transition ease-out duration-150"
                enterFrom="opacity-0"
                enterTo="opacity-100 backdrop-blur-2xl"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 backdrop-blur-2xl"
                leaveTo="opacity-0"
              >
                <Popover.Panel className="flex flex-col absolute w-full md:w-1/3 2xl:w-1/4 h-[calc(100vh-1rem)] z-30 inset-x-0 text-sm text-white md:m-2 backdrop-blur-2xl">
                  <div className="flex flex-col h-full bg-[rgba(3,7,18,0.5)] rounded-rounded justify-between p-6">
                    <div className="flex justify-end" id="xmark">
                      <button onClick={close}>
                        <Icon name="cross-1" />
                      </button>
                    </div>
                    <ul className="flex flex-col gap-6 items-start justify-start">
                      {SideMenuItems.map((item, index) => (
                          <li key={index}>
                            <Link
                              href={item.href}
                              className="text-3xl leading-10 hover:text-ui-fg-disabled"
                              onClick={close}
                            >
                              {item.name}
                            </Link>
                          </li>
                        )
                      )}
                    </ul>
                    <div className="flex flex-col gap-y-6">
                      <div
                        className="flex justify-between"
                        onMouseEnter={toggleState.open}
                        onMouseLeave={toggleState.close}
                      >
                        
                      </div>
                      <Text className="flex justify-between txt-compact-small">
                        © {new Date().getFullYear()} Nzhinu Store. {dic['copyright']}
                      </Text>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </div>
    </div>
  )
}

export default SideMenu
