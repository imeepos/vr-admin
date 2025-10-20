import { Fragment, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  XCircleIcon,
  InformationCircleIcon,
  XMarkIcon
} from '@heroicons/react/24/outline'

export type ToastType = 'success' | 'error' | 'warning' | 'info'

interface ToastProps {
  message: string
  type?: ToastType
  duration?: number
  onClose: () => void
}

const TOAST_STYLES = {
  success: {
    container: 'bg-green-50 border-green-200 text-green-800',
    icon: CheckCircleIcon,
    iconColor: 'text-green-400'
  },
  error: {
    container: 'bg-red-50 border-red-200 text-red-800',
    icon: XCircleIcon,
    iconColor: 'text-red-400'
  },
  warning: {
    container: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    icon: ExclamationTriangleIcon,
    iconColor: 'text-yellow-400'
  },
  info: {
    container: 'bg-blue-50 border-blue-200 text-blue-800',
    icon: InformationCircleIcon,
    iconColor: 'text-blue-400'
  }
} as const

export function Toast({
  message,
  type = 'info',
  duration = 5000,
  onClose
}: ToastProps) {
  const { container, icon: Icon, iconColor } = TOAST_STYLES[type]

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(onClose, duration)
      return () => clearTimeout(timer)
    }
  }, [duration, onClose])

  return (
    <Transition
      show={true}
      as={Fragment}
      enter="transform ease-out duration-300 transition"
      enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
      enterTo="translate-y-0 opacity-100 sm:translate-x-0"
      leave="transition ease-in duration-100"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className={`max-w-sm w-full border rounded-lg shadow-lg pointer-events-auto ring-1 ring-black ring-opacity-5 ${container}`}>
        <div className="p-4">
          <div className="flex items-start gap-3">
            <Icon className={`h-6 w-6 flex-shrink-0 ${iconColor}`} aria-hidden="true" />
            <p className="flex-1 text-sm font-medium pt-0.5">
              {message}
            </p>
            <button
              className="flex-shrink-0 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-colors"
              onClick={onClose}
              aria-label="关闭"
            >
              <XMarkIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </Transition>
  )
}