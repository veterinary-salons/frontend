import BtnEye from './BtnEye';

export default {
  title: 'icon 24px/BtnEye',
  component: BtnEye,
};

const Template = (arg) => <BtnEye {...arg} />;

export const Default = Template.bind({});

Default.args = {
  clikeBtnEye: false,
};
