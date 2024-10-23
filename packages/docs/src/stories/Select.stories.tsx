import type { Meta, StoryObj } from '@storybook/react';
import { Select, SelectProps } from '@pronto-agendei/react'; // Ajuste o caminho de importação conforme sua estrutura

export default {
    title: 'Form/Select',
    component: Select,
    args: {
        placeholder: 'Selecione uma opção',
        options: [
            { value: 'apple', label: 'Maçã' },
            { value: 'banana', label: 'Banana' },
            { value: 'orange', label: 'Laranja' },
        ],
    },
    argTypes: {
        options: {
            control: { type: 'object' },
        },
        placeholder: {
            control: { type: 'text' },
        },
        disabled: {
            control: { type: 'boolean' },
        },
        onValueChange: { action: 'valueChanged' },
    },
} as Meta<SelectProps>;

export const Default: StoryObj<SelectProps> = {};

export const Disabled: StoryObj<SelectProps> = {
    args: {
        disabled: true,
    },
};

export const WithCustomOptions: StoryObj<SelectProps> = {
    args: {
        options: [
            { value: 'mango', label: 'Manga' },
            { value: 'pineapple', label: 'Abacaxi' },
            { value: 'grape', label: 'Uva' },
        ],
        placeholder: 'Escolha uma fruta',
    },
};
