import Like from './Like';

export default {
  title: 'icon 40px/Like',
  component: Like,
};

const Template = (arg) => <Like {...arg} />;

export const Default = Template.bind({});

Default.args = {
  conditionLike: false,
};
