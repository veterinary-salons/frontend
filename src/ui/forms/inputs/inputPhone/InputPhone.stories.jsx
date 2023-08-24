import InputPhone from './InputPhone';
import './InputPhone.module.scss';

export default {
  title: 'Forms/Inputs/InputPhone',
  component: InputPhone,
  tags: ['autodocs'],
  argTypes: {
    type: {
      type: 'tel',
      description: 'Вариант инпута',
    },
    infoInput: {
      type: 'func',
      description: 'Callback функция, получает value',
    },
  },
};

const Template = (arg) => <InputPhone {...arg} />;

export const Default = Template.bind({});

Default.args = {
  type: 'text',
  infoInput: () => {},
};
