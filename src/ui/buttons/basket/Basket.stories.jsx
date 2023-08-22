import Basket from './Basket';

export default {
  title: 'Buttons/Header/Basket',
  component: Basket,
};

const Template = (arg) => <Basket {...arg} />;

export const Default = Template.bind({});

Default.args = {
  counter: 0,
};
