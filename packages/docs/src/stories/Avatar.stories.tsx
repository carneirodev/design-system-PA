import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@pronto-agendei/react'
export default {
    title: 'Data display/Avatar',
    component: Avatar,
    args: {
        src: 'https://github.com/diego3g.png',
        alt: 'Diego Fernandes',
    },
} as Meta<AvatarProps>
export const BlueDark: StoryObj<AvatarProps> = {}
export const WithFallback: StoryObj<AvatarProps> = {
    args: {
        src: undefined,
    },
}