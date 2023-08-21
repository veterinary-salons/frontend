import StarsBox from './StarsBox';

export default {
  title: 'icon 40px/StarsBox',
  component: StarsBox,
};

const Template = (arg) => <StarsBox {...arg} />;

export const Default = Template.bind({});

export const NotReadonly = Template.bind({});

Default.args = {
  rating: 0,
};

NotReadonly.args = {
  rating: 4,
};
