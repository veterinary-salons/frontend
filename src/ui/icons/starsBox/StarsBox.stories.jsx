import StarsBox from './StarsBox';

export default {
  title: 'Icons/StarsBox',
  component: StarsBox,
  tags: ['autodocs'],
  argTypes: {
    rating: {
      defaultValue: 0,
      description:
        'Если rating = 0, то пользователь может поставить оценку, если rating > 0, то пользователь может видеть только рейтинг',
      type: 'number',
    },
  },
};

const Template = (arg) => <StarsBox {...arg} />;

export const EditableRating = Template.bind({});
EditableRating.args = {
  rating: 0,
};

export const ViewOnlyRating = Template.bind({});
ViewOnlyRating.args = {
  rating: 4,
};
