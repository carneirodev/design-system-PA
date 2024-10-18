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
                color: '$blueDark500',
                background: '$green300',
                '&:not(:disabled):hover': {
                    background: '$green500',
                },
                '&:disabled': {
                    backgroundColor: '$gray100',
                },
            },
            secondary: {
                color: '$white',
                border: '2px solid $blueDark400',
                backgroundColor: '$blueDark400',
                '&:not(:disabled):hover': {
                    background: '$blueDark100',
                    color: '$white',
                },
                '&:disabled': {
                    borderColor: '$gray100',
                },
            },
            tertiary: {
                color: '$light200',
                backgroundColor: '$gray200',
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

Button.displayName = 'Button'