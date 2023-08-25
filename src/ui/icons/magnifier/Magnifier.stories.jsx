import Magnifier from './Magnifier';

export default {
  title: 'Icons/Magnifier',
  component: Magnifier,
  tags: ['autodocs'],
  argTypes: {
    position: {
      type: 'string',
      description: 'Варианты позиционирования',
      defaultValue: 'text',
      options: ['', 'search'],
      control: {
        type: 'radio',
      },
    },
    disabled: {
      type: 'boolean',
      description: 'Варианты активности',
      defaultValue: false,
      options: [false, true],
      control: {
        type: 'radio',
      },
    },
  },
};

const Template = (arg) => <Magnifier {...arg} />;

export const Default = Template.bind({});
Default.args = {
  position: '',
};
