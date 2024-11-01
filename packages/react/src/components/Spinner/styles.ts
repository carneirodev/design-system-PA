import { styled, keyframes } from '../../styles'

const spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
})

export const SpinnerContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '90%',
})

export const SpinnerElement = styled('div', {
  border: '4px solid $gray300',
  borderTop: '4px solid $green300',
  borderRadius: '50%',
  width: '40px',
  height: '40px',
  animation: `${spin} 1s linear infinite`,
})
