import { styled } from '../../styles'
export const TextInputContainer = styled('div', {
  backgroundColor: '$light600',
  padding: '$3 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $black300',
  display: 'flex',
  alignItems: 'center',
  variants: {
    size: {
      sm: {
        padding: '$2 $3',
      },
      md: {
        padding: '$3 $4',
      },
    },
  },
  '&:has(input:focus)': {
    borderColor: '$green100',
  },
  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
  defaultVariants: {
    size: 'md',
  },
})
export const Prefix = styled('span', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$blueDark100',
  fontWeight: 'bold',
})
export const Input = styled('input', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$black',
  fontWeight: 'regular',
  background: 'transparent',
  border: 0,
  width: '100%',
  '&:focus': {
    outline: 0,
  },
  '&:disabled': {
    cursor: 'not-allowed',
  },
  '&::placeholder': {
    color: '$gray400',
  },
})
