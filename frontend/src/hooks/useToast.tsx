import React, { useState, useCallback, createContext, useContext, ReactNode } from 'react'
import { Toast, ToastType } from '@/components/Toast'

interface ToastMessage {
  id: string
  message: string
  type: ToastType
  duration?: number
}

interface ToastContextType {
  showToast: (message: string, type?: ToastType, duration?: number) => void
  showSuccess: (message: string, duration?: number) => void
  showError: (message: string, duration?: number) => void
  showWarning: (message: string, duration?: number) => void
  showInfo: (message: string, duration?: number) => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastMessage[]>([])

  const removeToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id))
  }, [])

  const addToast = useCallback((message: string, type: ToastType = 'info', duration?: number) => {
    const id = Math.random().toString(36).substr(2, 9)
    const newToast: ToastMessage = { id, message, type, duration }

    setToasts(prev => [...prev, newToast])

    if (duration !== 0) {
      setTimeout(() => {
        removeToast(id)
      }, duration || 5000)
    }
  }, [removeToast])

  const showToast = useCallback((message: string, type?: ToastType, duration?: number) => {
    addToast(message, type || 'info', duration)
  }, [addToast])

  const showSuccess = useCallback((message: string, duration?: number) => {
    addToast(message, 'success', duration)
  }, [addToast])

  const showError = useCallback((message: string, duration?: number) => {
    addToast(message, 'error', duration)
  }, [addToast])

  const showWarning = useCallback((message: string, duration?: number) => {
    addToast(message, 'warning', duration)
  }, [addToast])

  const showInfo = useCallback((message: string, duration?: number) => {
    addToast(message, 'info', duration)
  }, [addToast])

  const value: ToastContextType = {
    showToast,
    showSuccess,
    showError,
    showWarning,
    showInfo
  }

  return React.createElement(
    ToastContext.Provider,
    { value },
    children,
    React.createElement(
      'div',
      { className: 'fixed top-4 right-4 z-50 space-y-2' },
      toasts.map(toast =>
        React.createElement(Toast, {
          key: toast.id,
          message: toast.message,
          type: toast.type,
          duration: toast.duration,
          onClose: () => removeToast(toast.id)
        })
      )
    )
  )
}

export function useToast() {
  const context = useContext(ToastContext)
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return context
}

export function useAlert() {
  const { showToast } = useToast()

  return {
    alert: (message: string) => {
      showToast(message, 'info')
    }
  }
}