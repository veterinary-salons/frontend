import Calendar from './Calendar';

export default {
  title: 'icon 24px/Calendar',
  component: Calendar,
};

const Template = (arg) => <Calendar {...arg} />;

export const Default = Template.bind({});

Default.args = {};
