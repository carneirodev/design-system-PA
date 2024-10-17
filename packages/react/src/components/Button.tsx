/* eslint-disable prettier/prettier */
import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'
export const Button = styled('button', {
    all: 'unset',
    borderRadius: '$sm',
    fontSize: '$sm',
    fontWeight: '$medium',
    fontFamily: '$default',
    textAlign: 'center',
    minWidth: 120,
    boxSizing: 'border-box',
    padding: '0 $4',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '$2',
    cursor: 'pointer',
    svg: {
        width: '$4',
        height: '$4',
    },
    '&:disabled': {
        cursor: 'not-allowed',
    },
    variants: {
        variant: {
            primary: {
                color: '$white',
                background: '$secondary300',
                '&:not(:disabled):hover': {
                    background: '$secondary500',
                },
                '&:disabled': {
                    backgroundColor: '$night100',
                },
            },
            secondary: {
                color: '$white',
                border: '2px solid $primary400',
                backgroundColor: '$primary400',
                '&:not(:disabled):hover': {
                    background: '$primary100',
                    color: '$white',
                },
                '&:disabled': {
                    borderColor: '$night100',
                },
            },
            tertiary: {
                color: '$light200',
                backgroundColor: '$night200',
                '&:not(:disabled):hover': {
                    color: '$white',
                },
                '&:disabled': {
                    borderColor: '$light500',
                },
            },
        },
        size: {
            sm: {
                height: 38,
            },
            md: {
                height: 46,
            },
        },
    },
    defaultVariants: {
        variant: 'primary',
        size: 'md',
    },
})
export interface ButtonProps extends ComponentProps<typeof Button> {
    as?: ElementType
    variant?: 'primary' | 'secondary' | 'tertiary';
    children?: React.ReactNode
    disabled?: boolean
    size?: 'sm' | 'md'
}
