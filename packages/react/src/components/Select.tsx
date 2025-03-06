/* eslint-disable prettier/prettier */
// Select.tsx

import React from 'react'
import * as RadixSelect from '@radix-ui/react-select'
import { styled } from '../styles' // Import ajustado para usar o mesmo styled do Button
import {
    CheckIcon,
    ChevronDownIcon,
    ChevronUpIcon,
} from '@radix-ui/react-icons' // Ícones do Radix UI

// Base de estilos para reutilização
const baseStyles = {
    all: 'unset',
    borderRadius: '$sm',
    fontSize: '$sm',
    fontWeight: '$medium',
    fontFamily: '$default',
    textAlign: 'left',
    minWidth: 120,
    boxSizing: 'border-box',
    padding: '0 $4',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '$2',
    cursor: 'pointer',
    svg: {
        width: '$4',
        height: '$4',
    },
    '&:disabled': {
        cursor: 'not-allowed',
    },
}

// Componentes estilizados
const StyledTrigger = styled(RadixSelect.Trigger, {
    ...baseStyles,
    '&:focus': {
        boxShadow: '0 0 0 2px $colors$gray100',
    },
    variants: {
        variant: {
            primary: {
                color: '$blueDark500',
                backgroundColor: '$green300',
                '&:not(:disabled):hover': {
                    backgroundColor: '$green500',
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
                    backgroundColor: '$blueDark100',
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

const StyledIcon = styled(RadixSelect.Icon, {
    color: 'inherit',
})

const StyledContent = styled(RadixSelect.Content, {
    overflow: 'hidden',
    backgroundColor: '$white',
    borderRadius: '$sm',
    border: '1px solid $gray100',
    boxShadow: '0 2px 10px $colors$gray200',
})

const StyledViewport = styled(RadixSelect.Viewport, {
    padding: '$1',
})

const StyledItem = styled(RadixSelect.Item, {
    all: 'unset',
    fontSize: '$sm',
    lineHeight: 1,
    color: '$black',
    borderRadius: '$sm',
    display: 'flex',
    alignItems: 'center',
    height: 30,
    padding: '0 35px 0 25px',
    position: 'relative',
    userSelect: 'none',

    '&[data-highlighted]': {
        backgroundColor: '$green200',
        color: '$black',
    },
})

const StyledItemIndicator = styled(RadixSelect.ItemIndicator, {
    position: 'absolute',
    left: 0,
    width: 25,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
})

const StyledScrollUpButton = styled(RadixSelect.ScrollUpButton, {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 25,
    backgroundColor: '$white',
    color: '$black',
    cursor: 'default',
})

const StyledScrollDownButton = styled(RadixSelect.ScrollDownButton, {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 25,
    backgroundColor: '$white',
    color: '$black',
    cursor: 'default',
})

// O componente Select
interface SelectOption {
    value: string
    label: string
}

export interface SelectProps {
    options: SelectOption[]
    placeholder: string
    onValueChange: (value: string) => void
    disabled?: boolean
    variant?: 'primary' | 'secondary' | 'tertiary'
    size?: 'sm' | 'md'
    value?: string
    defaultValue?: string
}

export const Select: React.FC<SelectProps> = ({
    options,
    placeholder,
    onValueChange,
    disabled,
    variant = 'primary',
    size = 'md',
    value,
    defaultValue,
}) => {
    return (
        <RadixSelect.Root onValueChange={onValueChange} disabled={disabled} value={value} defaultValue={defaultValue}>
            <StyledTrigger variant={variant} size={size} aria-label={placeholder}>
                <RadixSelect.Value placeholder={placeholder} />
                <StyledIcon>
                    <ChevronDownIcon />
                </StyledIcon>
            </StyledTrigger>
            <RadixSelect.Portal>
                <StyledContent>
                    <StyledScrollUpButton>
                        <ChevronUpIcon />
                    </StyledScrollUpButton>
                    <StyledViewport>
                        {options.map((option) => (
                            <StyledItem key={option.value} value={option.value}>
                                <RadixSelect.ItemText>{option.label}</RadixSelect.ItemText>
                                <StyledItemIndicator>
                                    <CheckIcon />
                                </StyledItemIndicator>
                            </StyledItem>
                        ))}
                    </StyledViewport>
                    <StyledScrollDownButton>
                        <ChevronDownIcon />
                    </StyledScrollDownButton>
                </StyledContent>
            </RadixSelect.Portal>
        </RadixSelect.Root>
    )
}

Select.displayName = 'Select'
