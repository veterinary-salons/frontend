import Logo from './Logo';

export default {
  title: 'icon 100px/Logo',
  component: Logo,
};

const Template = (arg) => <Logo {...arg} />;

export const Default = Template.bind({});

Default.args = {};
