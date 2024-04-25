import { getPalette } from '../../../color-generator'

export const applyColor = (color: string): void => {
  const palette = getPalette(color)

  const root = document.documentElement
  if (palette?.length === 10) {
    root.style.setProperty('--color-primary-50', palette[0])
    root.style.setProperty('--color-primary-100', palette[1])
    root.style.setProperty('--color-primary-200', palette[2])
    root.style.setProperty('--color-primary-300', palette[3])
    root.style.setProperty('--color-primary-400', palette[4])
    root.style.setProperty('--color-primary-500', palette[5])
    root.style.setProperty('--color-primary-600', palette[6])
    root.style.setProperty('--color-primary-700', palette[7])
    root.style.setProperty('--color-primary-800', palette[8])
    root.style.setProperty('--color-primary-900', palette[9])
  }
  saveAccentColor(color)
}

export const saveAccentColor = (color: string): void => {
  localStorage.setItem('accent-color', color)
}

export const getAccentColor = (): string => {
  const savedColor = localStorage.getItem('accent-color')
  return savedColor || ''
}
