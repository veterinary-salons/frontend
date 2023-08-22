import Calendar from './Calendar';

export default {
  title: 'Icons/Calendar',
  component: Calendar,
};

const Template = (arg) => <Calendar {...arg} />;

export const Default = Template.bind({});

Default.args = {};
