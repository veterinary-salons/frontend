import InputPhone from './index';

export default {
  title: 'Forms/Inputs/InputPhone',
  component: InputPhone,
  tags: ['autodocs'],
  argTypes: {
    type: {
      type: 'string',
      description: 'Вариант инпута',
      defaultValue: 'tel',
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
  type: 'tel',
  infoInput: () => {},
};
