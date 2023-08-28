import StarsBox from './StarsBox';
import './StarsBox.module.scss';

export default {
  title: 'Icons/StarsBox',
  component: StarsBox,
  tags: ['autodocs'],
  argTypes: {
    rating: {
      defaultValue: '',
      description: 'Рейтинг',
      type: 'string',
      options: ['0', '3.5'],
      control: {
        type: 'radio',
      },
    },
    color: {
      defaultValue: '#9384B7',
      description: 'Цвет звезд',
      type: 'string',
    },
    size: {
      defaultValue: '',
      description: 'Размер звезд',
      type: 'string',
    },
  },
};

const Template = (arg) => <StarsBox {...arg} />;

export const EditableRating = Template.bind({});
EditableRating.args = {
  rating: '',
  color: '',
  size: '',
};

export const ViewOnlyRating = Template.bind({});
ViewOnlyRating.args = {
  rating: '4.2',
  color: '#F9D279',
  size: '20px',
};
