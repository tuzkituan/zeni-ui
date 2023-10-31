import { useMemo } from "react"
import { ToastOptions } from "./toast.types"
import { CreateToastFnReturn, createToastFn } from "./toast"
import { useToastOptionContext } from "./toast.provider"

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