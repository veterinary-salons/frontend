import CartProductQuantityBox from '.';

export default {
  title: 'Buttons/CartProductQuantityBox',
  component: CartProductQuantityBox,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: 'Направление стрелы',
      type: 'string',
      defaultValue: 'primary',
      options: ['primary', 'alternative'],
      control: {
        type: 'radio',
      },
    },
    getCounterNum: {
      description: 'Получение количества товара',
      type: 'function',
    },
  },
};

const Template = (args) => <CartProductQuantityBox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  getCounterNum: () => {},
};

export const Alternative = Template.bind({});
Alternative.args = {
  variant: 'alternative',
  getCounterNum: () => {},
};
