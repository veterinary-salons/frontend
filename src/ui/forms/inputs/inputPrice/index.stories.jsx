import InputPrice from '.';

export default {
  title: 'Forms/Inputs/InputPrice',
  component: InputPrice,
  tags: ['autodocs'],
  argTypes: {
    prefix: {
      type: 'string',
      description: 'Варианты инпутов',
      defaultValue: 'от',
      options: ['от', 'до'],
      control: {
        type: 'radio',
      },
    },
    name: { type: 'string', description: 'Уникальное имя элемента' },
    initialValue: {
      type: 'object',
      description: 'Получение value',
    },
    disabled: {
      type: 'boolean',
      description: 'Активность input',
    },
  },
};

const Template = (arg) => <InputPrice {...arg} />;

export const Default = Template.bind({});
Default.args = {
  prefix: 'от',
  disabled: false,
};
export const CostUp = Template.bind({});
CostUp.args = {
  prefix: 'до',
  disabled: false,
};
export const Disabled = Template.bind({});
Disabled.args = {
  prefix: 'до',
  disabled: true,
};
