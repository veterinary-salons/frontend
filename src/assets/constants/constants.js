const regexEmail = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,10})+$/;
const regexText = /^[a-zA-Zа-яА-Я\sё-]+$/;
const regexUserName = /^[а-яА-Я\sё-]+$/;
const regexPassword = /^[A-Za-z\d-.]+$/;
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

export {
  regexEmail,
  regexText,
  regexUserName,
  regexPassword,
  regexPhone,
  maskPhone,
  placeholderPhone,
  arrayAnimals,
  arrayFilterList,
  arrayTimeList,
};

// /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/