import SpecialistCard from './SpecialistCard';
import imgGroomer from '../../../assets/images/icon/specialists/groomers.svg';
import imgVets from '../../../assets/images/icon/specialists/vets.svg';
import imgPetSitters from '../../../assets/images/icon/specialists/pet-sitters.svg';
import imgDogHandlers from '../../../assets/images/icon/specialists/dog-handlers.svg';

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
      type: 'string',
      description: 'Изображение специалиста',
      defaultValue: imgGroomer,
      options: [imgGroomer, imgVets, imgPetSitters, imgDogHandlers],
      control: {
        type: 'radio',
      },
    },
  },
};

const Template = (args) => <SpecialistCard {...args} />

export const DefaultGroomers = () => Template.bind({});
DefaultGroomers.args = {
  title: 'Грумеры',
  color: 'blue',
  children: imgGroomer
}

export const Vets = () => Template.bind({});
Vets.args = {
  title: 'Ветеринары',
  color: 'yellow',
  children: imgVets
}

export const PetSitters = () => Template.bind({});
PetSitters.args = {
  title: 'Зооняни',
  color: 'green',
  children: imgPetSitters
}

export const DogHandlers = () => Template.bind({});
DogHandlers.args = {
  title: 'Кинологи',
  color: 'violet',
  children: imgDogHandlers
}