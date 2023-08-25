import SearchForm from './index';
import './style.module.scss';

export default {
  title: 'Forms/Inputs/SearchForm',
  component: SearchForm,
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      type: 'string',
      description: 'Текст внутри поля',
      defaultValue: 'Чем вам помочь?',
    },
    name: {
      type: 'string',
      description: 'Уникальное имя элемента',
    },
    minLength: {
      type: 'number',
      description: 'Минимальное число символов',
    },
    maxLength: {
      type: 'number',
      description: 'Максимальное число символов',
    },
    disabled: {
      type: 'boolean',
      description: 'Варианты активности',
      defaultValue: false,
      options: [false, true],
      control: {
        type: 'radio',
      },
    },
    infoInput: {
      type: 'func',
      description: 'Callback функция, получает value',
    },
  },
};

const Template = (arg) => <SearchForm {...arg} />;

export const Default = Template.bind({});
Default.args = {
  position: '',
  name: 'search',
  minLength: 2,
  maxLength: 20,
  disabled: false,
  infoInput: () => {},
};
