/* eslint-disable prettier/prettier */
import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'
export const Box = styled('div', {
    padding: '$6',
    borderRadius: '$md',
    backgroundColor: '$light600',
    border: '1px solid $green300',
})

export interface BoxProps extends ComponentProps<typeof Box> {
    as?: ElementType
}

Box.displayName = 'Box'