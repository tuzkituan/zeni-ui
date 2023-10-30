import { useMemo } from "react"
import { RenderProps, ToastId, ToastOptions, ToastPosition, ToastStatus } from "./Toast.types"
// import { useToastOptionContext } from "./Toast.provider"
import { CreateToastFnReturn, createToastFn } from "./Toast"
import { useToastOptionContext } from "./Toast.provider"

export interface UseToastOptions {
  position?: ToastPosition
  duration?: ToastOptions["duration"]
  title?: React.ReactNode
  description?: React.ReactNode
  isClosable?: boolean
  status?: ToastStatus
  icon?: React.ReactNode
  id?: ToastId
  render?(props: RenderProps): React.ReactNode
 }

/**
 * React hook used to create a function that can be used
 * to show toasts in an application.
 */
export function useToast(options?: UseToastOptions): CreateToastFnReturn {
  const defaultOptions = useToastOptionContext()

  return useMemo(
    () =>
      createToastFn({
        ...defaultOptions,
        ...options,
      }),
    [defaultOptions, options]
  )
}

export default useToast