import Loading from './Loading';

export default {
  title: 'icon 40px/Loading',
  component: Loading,
};

const Template = (arg) => <Loading {...arg} />;

export const Default = Template.bind({});

Default.args = {
  classStyle: { width: '2.5rem', height: '2.5rem' },
};
