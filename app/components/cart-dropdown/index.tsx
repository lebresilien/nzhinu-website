import { Popover, Transition } from "@headlessui/react"
import { useCartDropdown } from "@/app/lib/context/cart-dropdown-context"
import { Button } from "@medusajs/ui"
import Trash from "@/app/components/icons/trash"
import Thumbnail from "@/app/components/products/components/thumbnail"
import Link from "next/link"
import { Fragment } from "react"
import { useProductActions } from "@/app/lib/context/product-context"

const CartDropdown = () => {
  const { cart, remove } = useProductActions()
  const { state, open, close } = useCartDropdown()

  return (
    <div className="h-full z-50" onMouseEnter={open} onMouseLeave={close}>
      <Popover className="relative h-full">
        <Popover.Button className="h-full">
          <Link
            className="hover:text-ui-fg-base"
            href="/cart"
          >{`Cart (${cart.length})`}</Link>
        </Popover.Button>
        <Transition
          show={state}
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel
            static
            className="hidden sm:block absolute top-[calc(100%+1px)] right-0 bg-white border-x border-b border-gray-200 w-[382px] text-gray-900"
          >
            <div className="p-4 flex items-center justify-center">
              <h3 className="text-large-semi">Cart</h3>
            </div>
            {cart && cart?.length ? (
              <>
                <div className="overflow-y-scroll max-h-[402px] px-4 grid grid-cols-1 gap-y-8 no-scrollbar p-px">
                  {cart
                    .map((item) => (
                      <div
                        className="grid grid-cols-[122px_1fr] gap-x-4"
                        key={item.id}
                      >
                        <Link
                          href={`/products/${item.title}`}
                          className="w-24"
                        >
                          <Thumbnail thumbnail={item.thumbnail} size="square" />
                        </Link>
                        <div className="flex flex-col justify-between flex-1">
                          <div className="flex flex-col flex-1">
                            <div className="flex items-start justify-between">
                              <div>
                                <h3 className="text-base-regular overflow-ellipsis overflow-hidden whitespace-nowrap mr-4 w-[130px]">
                                  <Link
                                    href={`/products/${item.title}`}
                                  >
                                    {item.title}
                                  </Link>
                                </h3>
                                <></>
                                <span>Quantity: {item.quantity}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-end justify-between text-sm-regular flex-1">
                            <div>
                              <button
                                className="flex items-center gap-x-1 text-gray-500"
                                onClick={() => remove(item.id)}
                              >
                                <Trash size={14} />
                                <span>Remove</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
                <div className="p-4 flex flex-col gap-y-4 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 font-semibold">
                      Subtotal{" "}
                      <span className="font-normal">(excl. taxes)</span>
                    </span>
                  </div>
                  <Link href="/cart" passHref>
                    <Button className="w-full" size="large">
                      Go to cart
                    </Button>
                  </Link>
                </div>
              </>
            ) : (
              <div>
                <div className="flex py-16 flex-col gap-y-4 items-center justify-center">
                  <div className="bg-gray-900 text-sm flex items-center justify-center w-6 h-6 rounded-full text-white">
                    <span>0</span>
                  </div>
                  <span>Your shopping bag is empty.</span>
                  <div>
                    <Link href="/store">
                      <>
                        <span className="sr-only">Go to all products page</span>
                        <Button onClick={close}>Explore products</Button>
                      </>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  )
}

export default CartDropdown
