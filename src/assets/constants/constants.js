const regexEmail = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,10})+$/;
const regexText = /^[a-zA-Zа-яА-Я\sё-]+$/;
const regexCyrillic = /^[а-яА-Я\sё-]+$/;
const regexPetName = /^[a-zA-Zа-яА-Я\sё-]+$/;
const regexPassword = /^[A-Za-z\d-.]+$/;
const regexTextArea = /^[а-яА-Яa-zA-Z0-9\s.,]+$/;
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

const arrayServicesVet = [
  {
    id: 1,
    text: 'консультация',
  },
  {
    id: 2,
    text: 'диагностика заболевания и лечение',
  },
  {
    id: 3,
    text: 'введение инъекции',
  },
  {
    id: 4,
    text: 'вакцинация',
  },
  {
    id: 5,
    text: 'стерилизация',
  },
  {
    id: 6,
    text: 'оформление ветпаспорта',
  },
  {
    id: 7,
    text: 'усыпление',
  },
  {
    id: 8,
    text: 'другая',
  },
];

const arrayServicesDate = [
  {
    id: 1,
    text: 'выбрать дату',
  },
  {
    id: 2,
    text: 'выбрать дату',
  },
  {
    id: 3,
    text: 'выбрать дату',
  },
  {
    id: 4,
    text: 'выбрать дату',
  },
  {
    id: 5,
    text: 'выбрать дату',
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

const variantVeterinarians = {
  zoonyanya: 'Зооняня',
  cynologist: 'Кинолог',
  groomer: 'Грумер',
  veterinarian: 'Ветеринар',
};

export {
  regexEmail,
  regexText,
  regexCyrillic,
  regexPassword,
  regexPhone,
  maskPhone,
  placeholderPhone,
  arrayAnimals,
  arrayFilterList,
  arrayServicesVet,
  arrayServicesDate,
  arrayTimeList,
  arrImgOrderCard,
  regexTextArea,
  regexPetName,
  variantVeterinarians,
};

// /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/
