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

export function Toast({
  message,
  type = 'info',
  duration = 5000,
  onClose
}: ToastProps) {
  const getToastStyles = () => {
    switch (type) {
      case 'success':
        return {
          bgColor: 'bg-green-50',
          borderColor: 'border-green-200',
          textColor: 'text-green-800',
          icon: CheckCircleIcon,
          iconColor: 'text-green-400'
        }
      case 'error':
        return {
          bgColor: 'bg-red-50',
          borderColor: 'border-red-200',
          textColor: 'text-red-800',
          icon: XCircleIcon,
          iconColor: 'text-red-400'
        }
      case 'warning':
        return {
          bgColor: 'bg-yellow-50',
          borderColor: 'border-yellow-200',
          textColor: 'text-yellow-800',
          icon: ExclamationTriangleIcon,
          iconColor: 'text-yellow-400'
        }
      case 'info':
      default:
        return {
          bgColor: 'bg-blue-50',
          borderColor: 'border-blue-200',
          textColor: 'text-blue-800',
          icon: InformationCircleIcon,
          iconColor: 'text-blue-400'
        }
    }
  }

  const { bgColor, borderColor, textColor, icon: Icon, iconColor } = getToastStyles()

  // 自动关闭定时器
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
      <div className={`max-w-sm w-full ${bgColor} ${borderColor} border rounded-lg shadow-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden`}>
        <div className="p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <Icon className={`h-6 w-6 ${iconColor}`} aria-hidden="true" />
            </div>
            <div className="ml-3 w-0 flex-1 pt-0.5">
              <p className={`text-sm font-medium ${textColor}`}>
                {message}
              </p>
            </div>
            <div className="ml-4 flex-shrink-0 flex">
              <button
                className={`inline-flex ${textColor} rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600 focus:ring-offset-yellow-50 focus:ring-yellow-600 focus:ring-offset-blue-50 focus:ring-blue-600 focus:ring-offset-red-50 focus:ring-red-600 hover:bg-gray-50 transition-colors`}
                onClick={onClose}
              >
                <span className="sr-only">关闭</span>
                <XMarkIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  )
}