import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextInput, TextInputProps } from '@pronto-agendei/react'
export default {
    title: 'Form/Text Input',
    component: TextInput,
    args: {},
    decorators: [
        (Story) => {
            return (
                <Box
                    as="label"
                    css={{ display: 'flex', flexDirection: 'column', gap: '$1', maxWidth: '500px' }}
                >
                    <Text size="sm" >Email address</Text>
                    {Story()}
                </Box>
            )
        },
    ],
} as Meta<TextInputProps>
export const BlueDark: StoryObj<TextInputProps> = {
    args: {
        placeholder: 'Type your name',
    },
}
export const Disabled: StoryObj<TextInputProps> = {
    args: {
        disabled: true,
    },
}
export const WithPrefix: StoryObj<TextInputProps> = {
    args: {
        prefix: 'prontoagendei.app/',
        placeholder: 'Nome do seu centro esportivo',
    },
}
