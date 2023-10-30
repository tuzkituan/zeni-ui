import { useMemo } from "react"
import { ToastOptions } from "./Toast.types"
import { CreateToastFnReturn, createToastFn } from "./Toast"
import { useToastOptionContext } from "./Toast.provider"

export function useToast(options?: ToastOptions): CreateToastFnReturn {
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