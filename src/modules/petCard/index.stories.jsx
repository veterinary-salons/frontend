import PetCard from '.';
import photo from '../../assets/images/images/pet-card-background/dog.jpg';

export default {
  title: 'Card/PetCard',
  component: PetCard,
  tags: ['autodocs'],
  argTypes: {
    src: {
      description: 'Путь к изображению',
      type: 'string',
    },
    title: {
      description: 'Имя питомца',
      type: 'string',
    },
    age: {
      description: 'Кол-во лет',
      type: 'number',
    },
    months: {
      description: 'Кол-во месяцев',
      type: 'number',
    },
    add: {
      description:
        'Наличие этого атрибута делает карточку для добавления питомца',
      type: 'boolean',
    },
    onClick: {
      description: 'Футкция нажатия на кнопку "изменить" или "добавить"',
      type: 'function',
    },
  },
};

const Template = (args) => <PetCard {...args} />;

export const Default = Template.bind({});

export const Add = Template.bind({});
Add.args = {
  add: true,
};

export const WithPhoto = Template.bind({});
WithPhoto.args = {
  src: photo,
};

export const WithPhotoError = Template.bind({});
WithPhotoError.args = {
  src: '/asdf',
};
