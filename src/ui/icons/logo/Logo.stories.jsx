import Logo from './Logo';

export default {
  title: 'Icons/Logo',
  component: Logo,
};

const Template = (arg) => <Logo {...arg} />;

export const Default = Template.bind({});

Default.args = {};
