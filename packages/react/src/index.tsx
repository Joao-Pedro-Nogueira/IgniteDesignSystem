import { ComponentProps } from 'react'

import { styled } from './styles'

export const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$ignite300',
  borderRadius: '$md',
  border: 0,
  fontWeight: '$bold',
  color: '$white',
  cursor: 'pointer',
  transition: '0.15s',

  '&:hover': {
    backgroundColor: '$ignite500',
  },

  variants: {
    size: {
      small: {
        fontSize: 14,
        padding: '$2 $4',
      },
      large: {
        fontSize: 16,
        padding: '$3 $6',
      },
    },
  },

  defaultVariants: {
    size: 'small',
  },
})

export type ButtonProps = ComponentProps<typeof Button>
