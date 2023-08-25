import Favourite from './Favourite';

export default {
  title: 'Buttons/Header/Favourite',
  component: Favourite,
};

const Template = (arg) => <Favourite {...arg} />;

export const Default = Template.bind({});

Default.args = {
  counter: 0,
};
