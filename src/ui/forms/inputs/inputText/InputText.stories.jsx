import InputText from './InputText';

export default {
  title: 'Forms/Inputs/InputText',
  component: InputText,
  tags: ['autodocs'],
  argTypes: {
    type: {
      type: 'string',
      description: 'Варианты инпутов',
      defaultValue: 'text',
      options: ['text', 'email', 'password'],
      control: {
        type: 'radio',
      },
    },
    placeholder: {
      type: 'string',
      description: 'Текст внутри поля',
      defaultValue: 'Text',
    },
    name: {
      type: 'string',
      description: 'Уникальное имя элемента',
    },
    maxLength: {
      type: 'number',
      description: 'Максимальное число символов',
    },
    minLength: {
      type: 'number',
      description: 'Минимальное число символов',
    },
    required: {
      type: 'boolean',
      description: 'Обязательное поле',
    },
    setInput: {
      type: 'func',
      description: 'Callback функция, получает value',
    },
    id: {
      type: 'string',
      description: 'Задает стилевой идентификатор',
    },
  },
};

const Template = (arg) => <InputText {...arg} />;

export const Text = Template.bind({});
export const Email = Template.bind({});
export const Password = Template.bind({});
export const Disabled = Template.bind({});

Text.args = {
  type: 'text',
  placeholder: 'Text',
  name: 'text',
  maxLength: 30,
  minLength: 2,
  required: true,
  id: 'text',
};

Email.args = {
  type: 'email',
  placeholder: 'email',
  name: 'email',
  maxLength: 20,
  minLength: 2,
  required: true,
  setInput: () => {},
  id: 'email',
};

Password.args = {
  type: 'password',
  placeholder: 'password',
  name: 'password',
  maxLength: 20,
  minLength: 2,
  required: true,
  setInput: () => {},
  id: 'password',
  position: 'button-eye_position',
};

Disabled.args = {
  type: 'text',
  placeholder: 'disabled',
  name: 'input',
  disabled: true,
  id: 'disabled',
};
