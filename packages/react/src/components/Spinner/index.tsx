/* eslint-disable prettier/prettier */
import { ComponentProps } from 'react'
import { SpinnerContainer, SpinnerElement } from './styles'

export type SpinnerProps = ComponentProps<typeof SpinnerContainer>

export function Spinner(props: SpinnerProps) {
    return (
        <SpinnerContainer {...props}>
            <SpinnerElement />
        </SpinnerContainer>
    )
}

Spinner.displayName = 'Spinner'

export default Spinner
