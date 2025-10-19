import { useState } from 'react'

interface ConfirmDialogOptions {
  title?: string
  message?: string
  confirmText?: string
  cancelText?: string
  type?: 'danger' | 'warning' | 'info'
}

export function useConfirmDialog() {
  const [isOpen, setIsOpen] = useState(false)
  const [options, setOptions] = useState<ConfirmDialogOptions>({})
  const [resolve, setResolve] = useState<((value: boolean) => void) | null>(null)

  const confirm = (newOptions: ConfirmDialogOptions = {}): Promise<boolean> => {
    return new Promise((res) => {
      setOptions(newOptions)
      setResolve(() => res)
      setIsOpen(true)
    })
  }

  const handleClose = () => {
    setIsOpen(false)
    resolve?.(false)
  }

  const handleConfirm = () => {
    setIsOpen(false)
    resolve?.(true)
  }

  return {
    isOpen,
    options,
    confirm,
    handleClose,
    handleConfirm
  }
}