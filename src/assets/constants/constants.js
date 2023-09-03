const regexEmail = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,10})+$/;
const regexText = /^[a-zA-Zа-яА-Я\sё-]+$/;
const regexPossword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
const regexPhone =
  /^(\+7|7|8)?[\s-]?\(?[489][0-9]{2}\)?[\s-]?[0-9]{3}[\s-]?[0-9]{2}[\s-]?[0-9]{2}$/;
const maskPhone = [
  '8',
  '(',
  /[1-9]/,
  /\d/,
  /\d/,
  ')',
  ' ',
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
];
const placeholderPhone = '8(___)___-__-__';
const arrayAnimals = [
  {
    id: 1,
    text: 'кот',
  },
  {
    id: 2,
    text: 'собака',
  },
  {
    id: 3,
    text: 'кролик',
  },
  {
    id: 4,
    text: 'птица',
  },
  {
    id: 5,
    text: 'хорек',
  },

  {
    id: 6,
    text: 'грызун',
  },
  {
    id: 7,
    text: 'рептилия',
  },
  {
    id: 8,
    text: 'рыбки',
  },
  {
    id: 9,
    text: 'другое',
  },
];

const arrayFilterList = [
  {
    id: 1,
    text: 'Популярное',
  },
  {
    id: 2,
    text: 'Сначала дешёвые',
  },
  {
    id: 3,
    text: 'Сначала дорогие',
  },
  {
    id: 4,
    text: 'Высокий рейтинг',
  },
  {
    id: 5,
    text: 'По размеру скидки',
  },

  {
    id: 6,
    text: 'Новинки',
  },
];

const arrayTimeList = [
  {
    id: 1,
    text: '10:00',
  },
  {
    id: 2,
    text: '11:00',
  },
  {
    id: 3,
    text: '12:00',
  },
  {
    id: 4,
    text: '13:00',
  },
  {
    id: 5,
    text: '14:00',
  },

  {
    id: 6,
    text: '15:00',
  },
];

const arrImgOrderCard = [
  { img: 'https://i.ibb.co/3vFLLJq/Rectangle-7.png', id: 1 },
  { img: 'https://i.ibb.co/yYDpgb2/Rectangle-8.png', id: 2 },
  { img: 'https://i.ibb.co/YL804BL/Rectangle-9.png', id: 3 },
];

const dataSelectedProducts = [
  {
    id: 1,
    price: '353',
    weightProduct: '600',
    descriptionProduct:
      'Сухой корм для кошек Royal Conin для Стерилизованных Индейка для взрослых',
    reviews: 12,
    image: 'https://i.ibb.co/3d8qZtD/Photo-with-like.png',
    rating: '3.2',
    counter: 0,
    likes: true,
  },
  {
    id: 2,
    price: '353',
    weightProduct: '600',
    descriptionProduct:
      'Сухой корм для кошек Pro Plan для Стерилизованных Индейка для взрослых',
    reviews: 46,
    image: 'https://i.ibb.co/3d8qZtD/Photo-with-like.png',
    rating: '4.4',
    counter: 0,
    likes: true,
  },
  {
    id: 3,
    price: '353',
    weightProduct: '600',
    descriptionProduct:
      'Сухой корм для кошек Purina One для Стерилизованных Индейка для взрослых',
    reviews: 46,
    image: '',
    rating: '5.0',
    counter: 0,
    likes: true,
  },
  {
    id: 4,
    price: '353',
    weightProduct: '600',
    descriptionProduct:
      'Сухой корм для кошек Farmina для Стерилизованных Индейка для взрослых',
    reviews: 46,
    image: 'https://i.ibb.co/3d8qZtD/Photo-with-like.png',
    rating: '4.8',
    counter: 0,
    likes: true,
  },
  {
    id: 5,
    price: '353',
    weightProduct: '600',
    descriptionProduct:
      'Сухой корм для кошек Royal Conin для Стерилизованных Индейка для взрослых',
    reviews: 46,
    image: 'https://i.ibb.co/3d8qZtD/Photo-with-like.png',
    rating: '4.7',
    counter: 0,
    likes: true,
  },
  {
    id: 6,
    price: '353',
    weightProduct: '600',
    descriptionProduct:
      'Сухой корм для кошек Alpha Pet для Стерилизованных Индейка для взрослых',
    reviews: 46,
    image: '',
    rating: '4.0',
    counter: 0,
    likes: true,
  },
];

export {
  regexEmail,
  regexText,
  regexPossword,
  regexPhone,
  maskPhone,
  placeholderPhone,
  arrayAnimals,
  arrayFilterList,
  arrayTimeList,
  arrImgOrderCard,
  dataSelectedProducts,
};
