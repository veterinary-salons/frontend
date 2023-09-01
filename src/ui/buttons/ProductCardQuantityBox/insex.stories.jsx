import ProductCardQuantityBox from '.';

export default {
  title: 'Buttons/ProductCardQuantityBox',
  component: ProductCardQuantityBox,
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

const Template = (args) => <ProductCardQuantityBox {...args} />;

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
