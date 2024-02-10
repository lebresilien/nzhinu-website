"use client"

import { Dialog, Transition } from "@headlessui/react"
import noop from "@/app/lib/util/noop"
import Spinner from "@/app/components/icons/spinner"

const CheckoutLoader = () => {

  return (
    <Transition show={false}>
      <Dialog onClose={noop} className="relative z-[100]">
        <Transition.Child
          enter="ease-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center">
            <Spinner size={24} />
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  )
}

export default CheckoutLoader
