import Button from './Button';
import './Button.module.scss';

export default {
  title: 'Buttons/Original',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: 'Вид кнопки',
      type: 'string',
      defaultValue: 'purple-filled',
      options: ['purple-filled', 'outlined', 'add'],
      control: {
        type: 'radio',
      },
    },
    type: {
      type: 'string',
      description: 'Тип кнопки',
      defaultValue: 'button',
      options: ['button', 'submit', 'reset'],
      control: {
        type: 'radio',
      },
    },
    shape: {
      type: 'string',
      description: 'Форма кнопки',
      defaultValue: 'square',
      options: ['square', 'round'],
      control: {
        type: 'radio',
      },
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
      defaultValue: 'Click here',
    },
    size: {
      type: 'string',
      description: 'Размер кнопки',
      defaultValue: 'medium',
      options: ['small', 'large'],
      control: {
        type: 'radio',
      },
    },
    isFiltered: {
      description: 'Тип кнопки: фильтр (c крестиком)',
      control: { type: 'boolean' },
      defaultValue: false,
    },
  },
};

const Template = (arg) => <Button {...arg} />;

export const SubmitButton = Template.bind({});
SubmitButton.args = {
  children: 'Зарегистрироваться',
  variant: 'purple-filled',
  size: 'large',
  type: 'submit',
  active: true,
  loading: false,
  isFiltered: false,
};

export const NextButton = Template.bind({});
NextButton.args = {
  children: 'Далее',
  variant: 'outlined',
  size: 'small',
  type: 'submit',
  active: true,
  loading: false,
  isFiltered: false,
};

export const SubmitLoadingButton = Template.bind({});
SubmitLoadingButton.args = {
  children: 'Зарегистрироваться',
  variant: 'purple-filled',
  size: 'large',
  type: 'submit',
  active: false,
  loading: true,
  isFiltered: false,
};

export const AddButton = Template.bind({});
AddButton.args = {
  children: '',
  variant: 'add',
  size: 'small',
  type: 'button',
  active: true,
  loading: false,
  shape: 'round',
  isFiltered: false,
};

export const FilterButton = Template.bind({});
FilterButton.args = {
  children: 'Для кошек',
  variant: 'purple-filled',
  size: 'small',
  type: 'button',
  active: true,
  loading: false,
  shape: 'round',
  isFiltered: true,
};
