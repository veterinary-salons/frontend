import Heart from './Heart';

export default {
  title: 'Buttons/Heart',
  component: Heart,
};

const Template = (arg) => <Heart {...arg} />;

export const Default = Template.bind({});

Default.args = {
  conditionHeart: false,
};
