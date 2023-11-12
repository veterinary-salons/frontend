import StarsBox from './StarsBox';
import './StarsBox.module.scss';

export default {
  title: 'Icons/StarsBox',
  component: StarsBox,
  tags: ['autodocs'],
  argTypes: {
    action: {
      defaultValue: '',
      description: 'Активность элемента',
      type: 'string',
      options: ['filled', 'outline'],
      control: {
        type: 'radio',
      },
    },
    rating: {
      defaultValue: '4.5',
      description: 'Рейтинг',
      type: 'string',
    },
    color: {
      defaultValue: 'var(--primary-purple-color)',
      description: 'Цвет звезд',
      type: 'string',
    },
    size: {
      defaultValue: '',
      description: 'Размер звезд',
      type: 'string',
    },
    iconsCount: {
      defaultValue: 5,
      description: 'Количество звезд',
      type: 'number',
    },
  },
};

const Template = (arg) => <StarsBox {...arg} />;

export const EditableRating = Template.bind({});
EditableRating.args = {
  action: 'filled',
  rating: '2.4',
  color: '',
  size: '',
};

export const ViewOnlyRating = Template.bind({});
ViewOnlyRating.args = {
  action: 'outline',
  rating: '0',
  color: 'var(--yellow-color)',
  size: '20px',
};
