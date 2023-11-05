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
    isLiked: true,
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
    isLiked: true,
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
    isLiked: true,
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
    isLiked: true,
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
    isLiked: true,
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
    isLiked: true,
  },
];

const dataGoodsForCatalog = [
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
    isLiked: false,
    category: 'feed-goodies',
    animal: 'cat',
  },
  {
    id: 2,
    price: '353',
    weightProduct: '600',
    descriptionProduct: 'Лоток для собак',
    reviews: 46,
    image: 'https://i.ibb.co/3d8qZtD/Photo-with-like.png',
    rating: '4.4',
    counter: 0,
    isLiked: true,
    category: 'toilet',
    animal: 'dog',
  },
  {
    id: 3,
    price: '353',
    weightProduct: '600',
    descriptionProduct: 'Лосьен для глаз',
    reviews: 46,
    image: 'https://i.ibb.co/3d8qZtD/Photo-with-like.png',
    rating: '5.0',
    counter: 0,
    isLiked: false,
    category: 'hygiene',
    animal: 'cat',
  },
  {
    id: 4,
    price: '353',
    weightProduct: '600',
    descriptionProduct: 'Миска для хорька',
    reviews: 46,
    image: 'https://i.ibb.co/3d8qZtD/Photo-with-like.png',
    rating: '4.8',
    counter: 0,
    isLiked: false,
    category: 'bowls-beds-houses',
    animal: 'rodent',
  },
  {
    id: 5,
    price: '353',
    weightProduct: '600',
    descriptionProduct: 'Витамины для собак',
    reviews: 46,
    image: 'https://i.ibb.co/3d8qZtD/Photo-with-like.png',
    rating: '4.7',
    counter: 0,
    isLiked: false,
    category: 'vetpharmacy',
    animal: 'cat',
  },
  {
    id: 6,
    price: '353',
    weightProduct: '600',
    descriptionProduct: 'Игрушка клубок',
    reviews: 46,
    image: '',
    rating: '4.0',
    counter: 0,
    isLiked: false,
    category: 'toys-ammunition',
    animal: 'cat',
  },
  {
    id: 7,
    price: '353',
    weightProduct: '600',
    descriptionProduct: 'Корм для рыб',
    reviews: 46,
    image: 'https://i.ibb.co/3d8qZtD/Photo-with-like.png',
    rating: '4.4',
    counter: 0,
    isLiked: true,
    category: 'feed-goodies',
    animal: 'fish',
  },
  {
    id: 8,
    price: '353',
    weightProduct: '600',
    descriptionProduct: 'Сухой корм для слонов',
    reviews: 46,
    image: 'https://i.ibb.co/3d8qZtD/Photo-with-like.png',
    rating: '4.7',
    counter: 0,
    isLiked: false,
    category: 'feed-goodies',
    animal: 'exotic',
  },
];

const dataArticle = [
  {
    id: 1,
    img: '',
    title: 'Как подружить питомцев?',
    isActive: true,
  },
  {
    id: 2,
    img: 'https://i.ibb.co/VMF37w6/photo-1.png',
    title: 'Как правильно стричь когти?',
    isActive: true,
  },
];

const professionals = [
  {
    id: '1',
    name: 'Юлия',
    profession: 'Грумер на дом, стрижка, вычес',
    price: '2 000 ₽/усл',
    workedWith: 'лошадьми',
    description:
      'Предоставляю услуги груминга собак с выездом на дом. Кошек не стригу! Шпиц от 2000р, пудель от 3000р. Воскресенье - выходной!',
    numReviews: 2,
    scoreReview: '5.0',
    specialist: 'groomer',
    img: '',
    isHomeVisit: true,
    services: [
      {
        title: 'Выставочный груминг',
        price: [1000, 10000],
      },
      {
        title: 'Гигиеничный груминг',
        price: [1000, 10000],
      },
    ],
    schedule: [
      {
        day: 'Пн',
        time: {
          start: '9:00',
          end: '14:00',
        },
      },
      {
        day: 'Вт',
        time: {
          start: 'круглосуточно',
          end: 'круглосуточно',
        },
      },
      {
        day: 'Ср',
        time: {
          start: '9:00',
          end: '14:00',
        },
      },
      {
        day: 'Чт',
        time: {
          start: 'выходной',
          end: 'выходной',
        },
      },
      {
        day: 'Пт',
        time: {
          start: '9:00',
          end: '14:00',
        },
      },
      {
        day: 'Сб',
        time: {
          start: 'круглосуточно',
          end: 'круглосуточно',
        },
      },
      {
        day: 'Вс',
        time: {
          start: '9:00',
          end: '14:00',
        },
      },
    ],
  },
  {
    id: '2',
    name: 'Ирина',
    profession: 'Грумер на дом, стрижка, вычес',
    price: '2 500 ₽/усл',
    workedWith: 'собаками и кошками',
    description:
      'Предоставляю услуги груминга с выездом на дом. Шерсть вашего питомца всегда будет в отличном состоянии.',
    numReviews: 5,
    isHomeVisit: true,
    scoreReview: '4.9',
    specialist: 'groomer',
    services: [
      {
        title: 'Выставочный груминг',
        price: [1500, 5000],
      },
      {
        title: 'Гигиеничный груминг',
        price: [1000, 3000],
      },
    ],
    schedule: [
      {
        day: 'Пн',
        time: {
          start: '9:00',
          end: '14:00',
        },
      },
      {
        day: 'Вт',
        time: {
          start: 'круглосуточно',
          end: 'круглосуточно',
        },
      },
      {
        day: 'Ср',
        time: {
          start: '9:00',
          end: '14:00',
        },
      },
      {
        day: 'Чт',
        time: {
          start: 'выходной',
          end: 'выходной',
        },
      },
      {
        day: 'Пт',
        time: {
          start: '9:00',
          end: '14:00',
        },
      },
      {
        day: 'Сб',
        time: {
          start: 'круглосуточно',
          end: 'круглосуточно',
        },
      },
      {
        day: 'Вс',
        time: {
          start: '9:00',
          end: '14:00',
        },
      },
    ],
  },
  {
    id: '3',
    name: 'Алексей',
    profession: 'Ветеринар',
    price: 'По договоренности',
    workedWith: 'всеми видами животных',
    description:
      'Ветеринарный врач с опытом более 10 лет. Обращайтесь с любыми здоровенными питомцами.',
    numReviews: 8,
    services: [
      {
        title: 'Удаление кисты',
        price: [1000, 10000],
      },
      {
        title: 'Наложение швов',
        price: [1000, 10000],
      },
    ],
    scoreReview: '4.8',
    specialist: 'vet',
    isHomeVisit: true,
    schedule: [
      {
        day: 'Пн',
        time: {
          start: '9:00',
          end: '14:00',
        },
      },
      {
        day: 'Вт',
        time: {
          start: 'круглосуточно',
          end: 'круглосуточно',
        },
      },
      {
        day: 'Ср',
        time: {
          start: '9:00',
          end: '14:00',
        },
      },
      {
        day: 'Чт',
        time: {
          start: 'выходной',
          end: 'выходной',
        },
      },
      {
        day: 'Пт',
        time: {
          start: '9:00',
          end: '14:00',
        },
      },
      {
        day: 'Сб',
        time: {
          start: 'круглосуточно',
          end: 'круглосуточно',
        },
      },
      {
        day: 'Вс',
        time: {
          start: '9:00',
          end: '14:00',
        },
      },
    ],
  },
  {
    id: '4',
    name: 'Наталья',
    profession: 'Зооняня',
    price: '1 500 ₽/час',
    workedWith: 'собаками, кошками и грызунами',
    description:
      'Обеспечу вашего пушистого друга заботой и играми в ваше отсутствие.',
    numReviews: 4,
    scoreReview: '4.9',
    specialist: 'pet-sitter',
    isHomeVisit: true,
    services: [
      {
        title: 'Передержка сутки',
        price: [1000, 10000],
      },
      {
        title: 'Передержка неделя',
        price: [1000, 10000],
      },
    ],
    schedule: [
      {
        day: 'Пн',
        time: {
          start: '9:00',
          end: '14:00',
        },
      },
      {
        day: 'Вт',
        time: {
          start: 'круглосуточно',
          end: 'круглосуточно',
        },
      },
      {
        day: 'Ср',
        time: {
          start: '9:00',
          end: '14:00',
        },
      },
      {
        day: 'Чт',
        time: {
          start: 'выходной',
          end: 'выходной',
        },
      },
      {
        day: 'Пт',
        time: {
          start: '9:00',
          end: '14:00',
        },
      },
      {
        day: 'Сб',
        time: {
          start: 'круглосуточно',
          end: 'круглосуточно',
        },
      },
      {
        day: 'Вс',
        time: {
          start: '9:00',
          end: '14:00',
        },
      },
    ],
  },
  {
    id: '5',
    name: 'Михаил',
    profession: 'Кинолог',
    price: '2 500 ₽/усл',
    isHomeVisit: true,
    workedWith: 'собаками всех пород',
    description:
      'Помогу воспитать и дрессировать вашего пса, чтобы он стал послушным и умным спутником.',
    numReviews: 6,
    scoreReview: '4.7',
    specialist: 'cynologist',
    services: [
      {
        title: 'Дрессировка взрослой собаки',
        price: [1000, 10000],
      },
      {
        title: 'Дрессировка щенка',
        price: [1000, 10000],
      },
    ],
    schedule: [
      {
        day: 'Пн',
        time: {
          start: '9:00',
          end: '14:00',
        },
      },
      {
        day: 'Вт',
        time: {
          start: 'круглосуточно',
          end: 'круглосуточно',
        },
      },
      {
        day: 'Ср',
        time: {
          start: '9:00',
          end: '14:00',
        },
      },
      {
        day: 'Чт',
        time: {
          start: 'выходной',
          end: 'выходной',
        },
      },
      {
        day: 'Пт',
        time: {
          start: '9:00',
          end: '14:00',
        },
      },
      {
        day: 'Сб',
        time: {
          start: 'круглосуточно',
          end: 'круглосуточно',
        },
      },
      {
        day: 'Вс',
        time: {
          start: '9:00',
          end: '14:00',
        },
      },
    ],
  },
  {
    id: '6',
    name: 'Елена',
    profession: 'Грумер на дом, стрижка, вычес',
    price: '2 200 ₽/усл',
    isHomeVisit: true,
    workedWith: 'собаками и кошками',
    description:
      'Окажу качественные услуги груминга для вашего любимца. У меня большой опыт работы.',
    numReviews: 3,
    scoreReview: '4.9',
    specialist: 'groomer',
    services: [
      {
        title: 'Выставочный груминг',
        price: [1500, 5000],
      },
      {
        title: 'Гигиеничный груминг',
        price: [1000, 3000],
      },
    ],
    schedule: [
      {
        day: 'Пн',
        time: {
          start: '9:00',
          end: '14:00',
        },
      },
      {
        day: 'Вт',
        time: {
          start: 'круглосуточно',
          end: 'круглосуточно',
        },
      },
      {
        day: 'Ср',
        time: {
          start: '9:00',
          end: '14:00',
        },
      },
      {
        day: 'Чт',
        time: {
          start: 'выходной',
          end: 'выходной',
        },
      },
      {
        day: 'Пт',
        time: {
          start: '9:00',
          end: '14:00',
        },
      },
      {
        day: 'Сб',
        time: {
          start: 'круглосуточно',
          end: 'круглосуточно',
        },
      },
      {
        day: 'Вс',
        time: {
          start: '9:00',
          end: '14:00',
        },
      },
    ],
  },
];

export {
  professionals,
  dataSelectedProducts,
  dataArticle,
  dataGoodsForCatalog,
};
