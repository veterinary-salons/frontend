// TODO: уточнить функциональный ли это элемент

import ButtonPlus from './ButtonPlus';

export default {
  title: 'Icons/ButtonPlus',
  component: ButtonPlus,
};

const Template = (arg) => <ButtonPlus {...arg} />;

export const Default = Template.bind({});

Default.args = {
  width: '40px',
  height: '40px',
};
