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
    maxLength: {
      type: 'number',
      description: 'Максимальное число символов',
    },
    minLength: {
      type: 'number',
      description: 'Минимальное число символов',
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
  },
};

const Template = (arg) => <SearchForm {...arg} />;

export const Default = Template.bind({});
Default.args = {
  position: '',
};
