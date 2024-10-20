/* eslint-disable prettier/prettier */
import { ComponentProps } from 'react'
import { styled } from '../styles'
export const TextArea = styled('textarea', {
    backgroundColor: '$light500',
    padding: '$3 $4',
    borderRadius: '$sm',
    boxSizing: 'border-box',
    border: '2px solid $gray500',
    fontFamily: '$default',
    fontSize: '$sm',
    color: '$black',
    fontWeight: '$regular',
    resize: 'vertical',
    minHeight: 80,
    '&:focus': {
        outline: 0,
        borderColor: '$green300',
    },
    '&:disabled': {
        opacity: 0.5,
        cursor: 'not-allowed',
    },
    '&:placeholder': {
        color: '$gray400',
    },
})
export type TextAreaProps = ComponentProps<typeof TextArea>

TextArea.displayName = 'TextArea'