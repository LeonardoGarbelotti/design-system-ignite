import * as ToastPrimitive from '@radix-ui/react-toast'
import { ComponentProps } from '@stitches/react'
import { X } from 'phosphor-react'
import {
  ToastRoot,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastViewport,
} from './styles'

export type ToastProps = ComponentProps<typeof ToastPrimitive.Root> & {
  title: string
  description?: string
}

export function Toast({ title, description, ...props }: ToastProps) {
  return (
    <ToastPrimitive.Provider swipeDirection="right">
      <ToastRoot {...props}>
        {description && <ToastTitle>{title}</ToastTitle>}
        <ToastDescription>{description}</ToastDescription>
        <ToastClose>
          <X weight="light" size={20} />
        </ToastClose>
      </ToastRoot>

      <ToastViewport />
    </ToastPrimitive.Provider>
  )
}

Toast.displayName = 'Toast'
