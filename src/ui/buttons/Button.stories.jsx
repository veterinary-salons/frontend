import {Button} from './Button';

export default {
    title: 'UI/Elements/Button',
    component: Button,
    argTypes: {
        variant: {
            description: 'Вид кнопки',
            type: 'string',
            defaultValue: 'purple-filled',
            options: ['purple-filled', 'outlined', 'circle'],
            control: {
                type: 'radio'
            }
        },
        type : {
            type: 'string',
            description: 'Тип кнопки',
            defaultValue: 'button',
            options: ['button', 'submit'],
            control: {
                type: 'radio'
            }
        },
        shape: {
            type: 'string',
            description: 'Форма кнопки',
            defaultValue: 'square',
            options: [ 'square', 'round'],
            control: {
                type: 'radio'
            }
        },
        active: {
            description: 'Состояние активности кнопки',
            control: { type: 'boolean' },
            defaultValue: true,
          },
        loading: {
            description: 'Состояние загрузки кнопки',
            control: { type: 'boolean' },
            defaultValue: true,
          },
        children: {
            description: 'Текст кнопки',
            type: 'string',
            name: 'label',
            defaultValue: 'Click here'
        },
        size: {
            type: 'string',
            description: 'Размер кнопки',
            defaultValue: 'medium',
            options: ['small', 'large'],
            control: {
                type: 'radio'
            }
        }
    }
}

const Template = (arg) => <Button {...arg} />

export const SubmitButton = Template.bind({});
SubmitButton.args={
    children: 'Зарегистрироваться',
    variant: 'purple-filled',
    size: 'large',
    type: 'submit',
    active: true,
    loading: false,
}

export const NextButton = Template.bind({});
NextButton.args={
    children: 'Далее',
    variant: 'outlined',
    size: 'small',
    type: 'submit',
    active: true,
    loading: false,
}

export const SubmitLoadingButton = Template.bind({});
SubmitLoadingButton.args={
    children: 'Зарегистрироваться',
    variant: 'purple-filled',
    size: 'large',
    type: 'submit',
    active: false,
    loading: true,
}

export const AddButton = Template.bind({});
AddButton.args={
    children: '',
    variant: 'circle',
    type: 'button',
    active: false,
    loading: false,
}