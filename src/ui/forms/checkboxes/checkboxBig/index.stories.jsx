import CheckboxBig from './index';
import '../../../../assets/styles/common.css';

export default {
  title: 'Forms/Checkboxes/CheckboxBig',
  component: CheckboxBig,
  tags: ['autodocs'],
  argTypes: {
    onChange: {
      description: 'Optional click handler',
    },
    type: {
      defaultValue: 'checkbox',
      description: 'Внешний вид кнопки',
      options: ['checkbox', 'switch', 'radio'],
      control: { type: 'radio' },
    },
    checked: {
      type: 'boolean',
    },
    label: {
      description: 'Текст рядом с кнопкой',
      type: 'string',
    },
    htmlType: {
      defaultValue: 'checkbox',
      description: 'Тип кнопки',
      options: ['checkbox', 'radio'],
      control: { type: 'radio' },
    },
    value: {
      type: 'string',
    },
    reverse: {
      type: 'boolean',
      description: 'Меняет направление контента',
    },
    width: {
      type: 'string',
      description: 'Ширина компонента',
    },
  },
};

const Template = (args) => <CheckboxBig {...args} />;

export const PrimaryStyleCheckbox = Template.bind({});
PrimaryStyleCheckbox.args = {
  type: 'checkbox',
};

export const SecondaryStyleCheckbox = Template.bind({});
SecondaryStyleCheckbox.args = {
  type: 'switch',
};

export const RadioButton = Template.bind({});
RadioButton.args = {
  type: 'radio',
  htmlType: 'radio',
};
