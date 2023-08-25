import Heart from './Heart';

export default {
  title: 'Buttons/Heart',
  component: Heart,
};

const Template = (arg) => (
  <div style={{ backgroundColor: '#D4D4D4', width: '40px' }}>
    <Heart {...arg} />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  conditionHeart: false,
};
