import { cva } from 'class-variance-authority'

const base = cva(
  [
    'zn-block',
    'zn-flex',
    'zn-relative',
    'zn-items-start',
    'zn-justify-start',
    'zn-gap-3',
    'zn-py-3',
    'zn-px-3',
  ],
  {
    variants: {
      variant: {
        subtle: ['before:zn-hidden'],
        solid: [],
        'left-accent': [
          'before:zn-h-full',
          'before:zn-w-1',
          'before:zn-top-0',
          'before:zn-absolute',
          'before:zn-left-0',
        ],
        'top-accent': [
          'before:zn-h-1',
          'before:zn-w-full',
          'before:zn-top-0',
          'before:zn-absolute',
          'before:zn-left-0',
          'before:zn-right-0',
        ],
      },
      status: {
        info: [],
        success: [],
        warning: [],
        error: [],
      },
    },
    compoundVariants: [
      {
        variant: ['subtle', 'left-accent', 'top-accent'],
        status: 'info',
        class: ['zn-bg-white', 'before:zn-bg-info-500'],
      },
      {
        variant: ['subtle', 'left-accent', 'top-accent'],
        status: 'success',
        class: ['zn-bg-white', 'before:zn-bg-success-500'],
      },
      {
        variant: ['subtle', 'left-accent', 'top-accent'],
        status: 'warning',
        class: ['zn-bg-white', 'before:zn-bg-warning-500'],
      },
      {
        variant: ['subtle', 'left-accent', 'top-accent'],
        status: 'error',
        class: ['zn-bg-white', 'before:zn-bg-error-500'],
      },
      {
        variant: 'solid',
        status: 'info',
        class: 'zn-bg-info-500',
      },
      {
        variant: 'solid',
        status: 'success',
        class: 'zn-bg-success-500',
      },
      {
        variant: 'solid',
        status: 'warning',
        class: 'zn-bg-warning-500',
      },
      {
        variant: 'solid',
        status: 'error',
        class: 'zn-bg-error-500',
      },
    ],
    defaultVariants: {
      variant: 'subtle',
      status: 'info',
    },
  }
)

const icon = cva(['zn-text-2xl', 'zn-border', 'zn-rounded-full', 'zn-p-2'], {
  variants: {
    status: {
      info: ['zn-text-info-500'],
      success: ['zn-text-success-500'],
      warning: ['zn-text-warning-500'],
      error: ['zn-text-error-500'],
    },
    variant: {
      subtle: [],
      solid: [],
      'left-accent': [],
      'top-accent': [],
    },
  },
  compoundVariants: [
    {
      variant: ['subtle', 'left-accent', 'top-accent'],
      status: 'info',
      class: ['zn-text-info-500', 'zn-bg-info-50'],
    },
    {
      variant: ['subtle', 'left-accent', 'top-accent'],
      status: 'success',
      class: ['zn-text-success-500', 'zn-bg-success-50'],
    },
    {
      variant: ['subtle', 'left-accent', 'top-accent'],
      status: 'warning',
      class: ['zn-text-warning-500', 'zn-bg-warning-50'],
    },
    {
      variant: ['subtle', 'left-accent', 'top-accent'],
      status: 'error',
      class: ['zn-text-error-500', 'zn-bg-error-50'],
    },
    {
      variant: 'solid',
      status: ['info', 'success', 'warning', 'error'],
      class: ['zn-border-none', 'zn-bg-white'],
    },
  ],
})

const text = cva(['zn-text-base'], {
  variants: {
    status: {
      info: ['zn-text-info-500'],
      success: ['zn-text-success-500'],
      warning: ['zn-text-warning-500'],
      error: ['zn-text-error-500'],
    },
    variant: {
      subtle: [],
      solid: [],
      'left-accent': [],
      'top-accent': [],
    },
  },
  compoundVariants: [
    {
      variant: ['subtle', 'left-accent', 'top-accent'],
      status: ['info', 'success', 'warning', 'error'],
      class: 'zn-text-gray-900',
    },
    {
      variant: 'solid',
      status: ['info', 'success', 'warning', 'error'],
      class: '!zn-text-white',
    },
  ],
})
const close = cva(['zn-font-medium', 'zn-absolute', 'zn-top-3', 'zn-right-3'], {
  variants: {
    variant: {
      subtle: ['!zn-text-gray-400'],
      solid: ['!zn-text-white'],
      'left-accent': ['!zn-text-gray-400'],
      'top-accent': ['!zn-text-gray-400'],
    },
  },
})
const titleText = cva(['zn-font-medium', 'zn-m-0', 'zn-text-sm'])
const descriptionText = cva(['zn-m-0', 'zn-text-sm', 'zn-font-normal'])

const alertStyles = {
  base,
  icon,
  text,
  close,
  titleText,
  descriptionText,
}

export { alertStyles }
