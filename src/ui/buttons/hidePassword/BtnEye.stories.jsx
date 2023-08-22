import BtnEye from './BtnEye';

export default {
  title: 'Buttons/HidePassword',
  component: BtnEye,
};

const Template = (arg) => <BtnEye {...arg} />;

export const Default = Template.bind({});

Default.args = {
  btnStatus: false,
  position: '',
};
