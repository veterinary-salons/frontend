import Basket from './Basket';

export default {
  title: 'icon 40px/Basket',
  component: Basket,
};

const Template = (arg) => <Basket {...arg} />;

export const Default = Template.bind({});

Default.args = {
  counter: 0,
};
