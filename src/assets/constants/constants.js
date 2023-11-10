const baseUrl = 'http://purrfect-care.ddns.net/api/v1';

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
const numberRegex = /\d/g;
const windowWidth = window.innerWidth;

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

const specialisation = {
  petSitting: 'Зооняня',
  cynology: 'Кинолог',
  groomer: 'Грумер',
  veterinary: 'Ветеринар',
};

const vaterinars = {
  кинолог: 'cynology',
  зооняня: 'petSitting',
  грумер: 'groomer',
  ветеринар: 'veterinary',
};

const dateServiceCheckboxList = {
  specialisation: [
    {
      text: 'зооняня',
      id: 1,
    },
    {
      text: 'кинолог',
      id: 2,
    },
    {
      text: 'грумер',
      id: 3,
    },
    {
      text: 'ветеринар',
      id: 4,
    },
  ],
  arrAnimalsZoonyanya: [
    {
      name: 'Собаки',
      value: 'Собаки',
    },
    {
      name: 'Кошки',
      value: 'Кошки',
    },
    {
      name: 'Кролики',
      value: 'Кролики',
    },
    {
      name: 'Птицы',
      value: 'Птицы',
    },
    {
      name: 'Хорьки',
      value: 'Хорьки',
    },
    {
      name: 'Грызуны',
      value: 'Грызуны',
    },
    {
      name: 'Рептилии',
      value: 'Рептилии',
    },
  ],
  arrGroomRadio: {
    options: [
      { name: 'category', value: 'groomer', label: 'груминг' },
      { name: 'category', value: 'veterinary', label: 'ветеринария' },
      { name: 'category', value: 'petSitting', label: 'передержка' },
      { name: 'category', value: 'cynology', label: 'кинология' },
    ],
  },
  arrServiceList: [
    {
      name: 'Коррекция проблемного поведения',
      value: 'Коррекция проблемного поведения',
    },
    {
      name: 'Воспитательная дрессировка щенка',
      value: 'Воспитательная дрессировка щенка',
    },
    {
      name: 'Дрессировка служебных собак',
      value: 'Дрессировка служебных собак',
    },
    {
      name: 'Дрессировка охотничьих собак',
      value: 'Дрессировка охотничьих собак',
    },
    {
      name: 'Подготовка к экзамену ОКД',
      value: 'Подготовка к экзамену ОКД',
    },
    {
      name: 'Спортивная дрессировка',
      value: 'Спортивная дрессировка',
    },
    {
      name: 'Адаптация собаки из приюта',
      value: 'Адаптация собаки из приюта',
    },
    {
      name: 'Подготовка к участию на выставке',
      value: 'Подготовка к участию на выставке',
    },
    {
      name: 'Консультация',
      value: 'Консультация',
    },
  ],
  arrServiceFormat: [
    {
      name: 'Индивидуальные занятия',
      value: 'Индивидуальные занятия',
    },
    {
      name: 'Занятия в мини-группе',
      value: 'Занятия в мини-группе',
    },
    {
      name: 'Групповые занятия',
      value: 'Групповые занятия',
    },
    {
      name: 'Дрессировка с передержкой у кинолога',
      value: 'Дрессировка с передержкой у кинолога',
    },
  ],
  arrAnimalsGroomer: [
    { name: 'Собаки', value: 'Собаки' },
    { name: 'Кошки', value: 'Кошки' },
    { name: 'Кролики', value: 'Кролики' },
    { name: 'Морские свинки', value: 'Морские свинки' },
  ],
  arrServiceGroomer: [
    { name: 'Гигиенический', value: 'Гигиенический' },
    { name: 'Выставочный', value: 'Выставочный' },
    { name: 'Декоративный', value: 'Декоративный' },
  ],
  arrAnimalsVeterinarian: [
    {
      name: 'Собаки',
      value: 'Собаки',
    },
    {
      name: 'Кошки',
      value: 'Кошки',
    },
    {
      name: 'Кролики',
      value: 'Кролики',
    },
    {
      name: 'Птицы',
      value: 'Птицы',
    },
    {
      name: 'Хорьки',
      value: 'Хорьки',
    },
    {
      name: 'Грызуны',
      value: 'Грызуны',
    },
    {
      name: 'Рептилии',
      value: 'Рептилии',
    },
  ],
  arrServiceVeterinarian: [
    {
      name: 'Консультации',
      value: 'Консультации',
    },
    {
      name: 'Диагностика заболевания и лечение',
      value: 'Диагностика заболевания и лечение',
    },
    {
      name: 'Введение инъекций',
      value: 'Введение инъекций',
    },
    {
      name: 'Вакцинация',
      value: 'Вакцинация',
    },
    {
      name: 'Стерилизация',
      value: 'Стерилизация',
    },
    {
      name: 'Оформление ветпаспорта',
      value: 'Оформление ветпаспорта',
    },
    {
      name: 'Усыпление',
      value: 'Усыпление',
    },
  ],
};

const dataArticlePage = [
  {
    id: 1,
    img: '',
    title: 'Как подружить питомцев?',
    isActive: false,
  },
  {
    id: 2,
    img: 'https://i.ibb.co/vwgFKzz/photo-2.png',
    title: 'Как приучить котёнка к лотку без скандалов?',
    isActive: true,
  },
  {
    id: 3,
    img: 'https://i.ibb.co/K0SsRXN/photo-3.png',
    title: '25 фактов о попугаях',
    isActive: false,
  },
  {
    id: 4,
    img: 'https://i.ibb.co/X5t6qvh/photo-4.png',
    title: 'Готовимся к путешествию',
    isActive: false,
  },
  {
    id: 5,
    img: 'https://i.ibb.co/Jxxfyfq/photo-5.png',
    title: 'Советы начинающим собаководам',
    isActive: false,
  },
  {
    id: 6,
    img: 'https://i.ibb.co/wgBHjgb/photo-6.png',
    title: 'Морские свинки не так просты как вы думали',
    isActive: false,
  },
];

const dataServicePriceFilter = [
  {
    id: 1,
    title: 'Стерилизация',
    name: 'price-sterilization',
  },
  {
    id: 2,
    title: 'Консультация',
    name: 'price-consultation',
  },
];

const dogHandlerServiceOptions = {
  arrDogHandler: [
    {
      name: 'Коррекция проблемного поведения',
      value: 'Коррекция проблемного поведения',
      id: 1,
    },
    {
      name: 'Воспитательная дрессировка щенка',
      value: 'Воспитательная дрессировка щенка',
      id: 2,
    },
    {
      name: 'Обучение командам',
      value: 'Обучение командам',
      id: 3,
    },
    {
      name: 'Дрессировка служебных собак',
      value: 'Дрессировка служебных собак',
      id: 4,
    },
    {
      name: 'Дрессировка охотничьих собак',
      value: 'Дрессировка охотничьих собак',
      id: 5,
    },
    {
      name: 'Подготовка к экзамену ОКД',
      value: 'Подготовка к экзамену ОКД',
      id: 6,
    },
    {
      name: 'Спортивная дрессировка',
      value: 'Спортивная дрессировка',
      id: 7,
    },
    {
      name: 'Адаптация собаки из приюта',
      value: 'Адаптация собаки из приюта',
      id: 8,
    },
    {
      name: 'Подготовка к участию на выставке',
      value: 'Подготовка к участию на выставке',
      id: 9,
    },
    {
      name: 'Консультация',
      value: 'Консультация',
      id: 10,
    },
  ],
  arrDogHandlerStepTwo: [
    {
      name: 'Индивидуальные занятия',
      value: 'Индивидуальные занятия',
      id: 1,
    },
    {
      name: 'Занятия в мини-группе',
      value: 'Занятия в мини-группе',
      id: 2,
    },
    {
      name: 'Групповые занятия',
      value: 'Групповые занятия',
      id: 3,
    },
    {
      name: 'Дрессировка с передержкой у кинолога',
      value: 'Дрессировка с передержкой у кинолога',
      id: 4,
    },
  ],
};

const groomerServiceOptions = {
  arrGroomerAnimals: [
    {
      name: 'Собаки',
      value: 'Собаки',
      id: 1,
    },
    {
      name: 'Кошки',
      value: 'Кошки',
      id: 2,
    },
    {
      name: 'Кролики',
      value: 'Кролики',
      id: 3,
    },
    {
      name: 'Морские свинки',
      value: 'Морские свинки',
      id: 4,
    },
  ],
  arrGroomerStepTwo: [
    {
      name: 'Гигиенический',
      value: 'Гигиенический',
      id: 1,
    },
    {
      name: 'Выставочный',
      value: 'Выставочный',
      id: 2,
    },
    {
      name: 'Декоративный',
      value: 'Декоративный',
      id: 3,
    },
  ],
};

const vetServiceOptions = {
  arrVetStepTwo: [
    {
      name: 'Консультации',
      value: 'Консультации',
      id: 1,
    },
    {
      name: 'Диагностика заболевания и лечение',
      value: 'Диагностика заболевания и лечение',
      id: 2,
    },
    {
      name: 'Введение инъекций',
      value: 'Введение инъекций',
      id: 3,
    },
    {
      name: 'Вакцинация',
      value: 'Вакцинация',
      id: 3,
    },
    {
      name: 'Стерилизация',
      value: 'Стерилизация',
      id: 3,
    },
    {
      name: 'Оформление ветпаспорта',
      value: 'Оформление ветпаспорта',
      id: 3,
    },
    {
      name: 'Усыпление',
      value: 'Усыпление',
      id: 3,
    },
  ],
};

export {
  baseUrl,
  regexEmail,
  regexText,
  regexCyrillic,
  regexPassword,
  regexPhone,
  maskPhone,
  placeholderPhone,
  numberRegex,
  arrayAnimals,
  arrayFilterList,
  arrayServicesVet,
  arrayServicesDate,
  arrayTimeList,
  arrImgOrderCard,
  dataArticlePage,
  regexTextArea,
  dataServicePriceFilter,
  regexPetName,
  specialisation,
  dateServiceCheckboxList,
  dogHandlerServiceOptions,
  groomerServiceOptions,
  vetServiceOptions,
  vaterinars,
  windowWidth,
};

// /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/

// const adTypeOptions = [
//   {
//     checkboxType: 'radio',
//     options: [
//       {
//         label: 'груминг',
//         value: 'grooming',
//         name: 'serviceType',
//       },

//       {
//         label: 'ветеринария',
//         value: 'pet-health',
//         name: 'serviceType',
//       },

//       {
//         label: 'передержка',
//         value: 'pet-sitting',
//         name: 'serviceType',
//       },

//       {
//         label: 'кинология',
//         value: 'cynology',
//         name: 'serviceType',
//       },
//     ],
//   },
// ];
