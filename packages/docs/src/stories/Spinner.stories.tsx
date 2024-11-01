import type { Meta, StoryObj } from '@storybook/react'
import { Spinner, SpinnerProps, Button } from '@pronto-agendei/react'

export default {
    title: 'Form/Spinner',
    component: Spinner,
    args: {},
    argTypes: {},
} as Meta<SpinnerProps>

export const Default: StoryObj<SpinnerProps> = {}

// Add Loading Button story
export const LoadingButton: StoryObj<SpinnerProps> = {
    render: () => (
        <Button disabled>
            <Spinner />
            Loading
        </Button>
    ),
}