import { useEffect, useState } from 'react'
import { applyColor, getAccentColor } from './utils'

export function useChangeColor() {
  const [color, setColor] = useState<string | undefined>(() => {
    const savedColor = getAccentColor()
    return savedColor || undefined
  })

  useEffect(() => {
    if (color) {
      applyColor(color)
    }
  }, [color])

  return { color, setColor }
}
