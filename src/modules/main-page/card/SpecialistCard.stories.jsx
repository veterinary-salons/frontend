import SpecialistCard from './SpecialistCard';

// eslint-disable-next-line storybook/story-exports
export default {
  title: 'Modules/Mainpage/Card',
  copmonent: SpecialistCard,
  tags: ['autodocs'],
  argTypes: {
    title: {
      type: 'string',
      description: 'Варианты кнопки',
      defaultValue: 'Грумеры',
      options: ['Грумеры', 'Ветеринары', 'Зооняни', 'Кинологи'],
      control: {
        type: 'radio',
      },
    },
    color: {
      type: 'string',
      description: 'Варианты фона',
      defaultValue: 'blue',
      options: ['blue', 'yellow', 'green', 'violet'],
      control: {
        type: 'radio',
      },
    },
    children: {
      defaultValue: '../../../assets/images/icon/specialists/groomers.svg',
      description: 'Изображение специалиста',
      type: 'string',
    },
  },
};

