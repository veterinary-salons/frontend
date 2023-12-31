import GoodsCardMainPage from './index';
import toysImg from '../../../assets/images/images/category-good-main-card/toys.png';
import foodImg from '../../../assets/images/images/category-good-main-card/food.png';
import treatsImg from '../../../assets/images/images/category-good-main-card/treats.png';
import pillsImg from '../../../assets/images/images/category-good-main-card/pills.png';

export default {
  title: 'Modules/Mainpage/Card',
  component: GoodsCardMainPage,
  tags: ['autodocs'],
  argTypes: {
    title: {
      type: 'string',
      description: 'Варианты кнопки',
      defaultValue: 'Игрушки',
      options: ['Игрушки', 'Корм', 'Вкусняшки', 'Лекарства'],
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
    img: {
      type: 'string',
      description: 'Изображение услуг',
      defaultValue: toysImg,
      options: [toysImg, foodImg, treatsImg, pillsImg],
      control: {
        type: 'radio',
      },
    },
  },
};

const Template = (args) => <GoodsCardMainPage {...args} />;

export const DefaultToys = () => Template.bind({});
DefaultToys.args = {
  title: 'Игрушки',
  color: 'blue',
  img: toysImg,
};

export const Food = () => Template.bind({});
Food.args = {
  title: 'Корм',
  color: 'violet',
  img: foodImg,
};

export const Treats = () => Template.bind({});
Treats.args = {
  title: 'Вкусняшки',
  color: 'green',
  img: treatsImg,
};

export const Pills = () => Template.bind({});
Pills.args = {
  title: 'Лекарства',
  color: 'yellow',
  img: pillsImg,
};
