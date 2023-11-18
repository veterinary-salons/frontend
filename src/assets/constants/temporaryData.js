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
    animal: 'cat'
  },
  {
    id: 2,
    price: '353',
    weightProduct: '600',
    descriptionProduct:
      'Лоток для собак',
    reviews: 46,
    image: 'https://i.ibb.co/3d8qZtD/Photo-with-like.png',
    rating: '4.4',
    counter: 0,
    isLiked: true,
    category: 'toilet',
    animal: 'dog'
  },
  {
    id: 3,
    price: '353',
    weightProduct: '600',
    descriptionProduct:
      'Лосьен для глаз',
    reviews: 46,
    image: 'https://i.ibb.co/3d8qZtD/Photo-with-like.png',
    rating: '5.0',
    counter: 0,
    isLiked: false,
    category: 'hygiene',
    animal: 'cat'
  },
  {
    id: 4,
    price: '353',
    weightProduct: '600',
    descriptionProduct:
      'Миска для хорька',
    reviews: 46,
    image: 'https://i.ibb.co/3d8qZtD/Photo-with-like.png',
    rating: '4.8',
    counter: 0,
    isLiked: false,
    category: 'bowls-beds-houses',
    animal: 'rodent'
  },
  {
    id: 5,
    price: '353',
    weightProduct: '600',
    descriptionProduct:
      'Витамины для собак',
    reviews: 46,
    image: 'https://i.ibb.co/3d8qZtD/Photo-with-like.png',
    rating: '4.7',
    counter: 0,
    isLiked: false,
    category: 'vetpharmacy',
    animal: 'cat'
  },
  {
    id: 6,
    price: '353',
    weightProduct: '600',
    descriptionProduct:
      'Игрушка клубок',
    reviews: 46,
    image: '',
    rating: '4.0',
    counter: 0,
    isLiked: false,
    category: 'toys-ammunition',
    animal: 'cat'
  },
  {
    id: 7,
    price: '353',
    weightProduct: '600',
    descriptionProduct:
      'Корм для рыб',
    reviews: 46,
    image: 'https://i.ibb.co/3d8qZtD/Photo-with-like.png',
    rating: '4.4',
    counter: 0,
    isLiked: true,
    category: 'feed-goodies',
    animal: 'fish'
  },
  {
    id: 8,
    price: '353',
    weightProduct: '600',
    descriptionProduct:
      'Сухой корм для слонов',
    reviews: 46,
    image: 'https://i.ibb.co/3d8qZtD/Photo-with-like.png',
    rating: '4.7',
    counter: 0,
    isLiked: false,
    category: 'feed-goodies',
    animal: 'exotic'
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
    id: 1,
    name: 'Юлия',
    profession: 'Грумер',
    price: '2 000 ₽/усл',
    workedWith: 'лошадьми',
    description:
      'Предоставляю услуги груминга собак с выездом на дом. Кошек не стригу! Шпиц от 2000р, пудель от 3000р. Воскресенье - выходной!',
    numReviews: 2,
    scoreReview: '5.0',
    specialist: 'groomer'
  },
  {
    id: 2,
    name: 'Юлия',
    profession: 'Ветеринар',
    price: '2 000 ₽/усл',
    workedWith: 'лошадьми',
    description:
      'Я ветеринарный врач со стажем 7 лет, имею большой опыт работы с собаками, делал около 137 полосных операций и очень люблю животных. Всегда внимательно изучаю анализы и назначаю лечение, которое всегда помогает питомцам.',
    numReviews: 2,
    scoreReview: '5.0',
    specialist: 'vet'
  },
  {
    id: 3,
    name: 'Юлия',
    profession: 'Передержка',
    price: '2 000 ₽/усл',
    workedWith: 'лошадьми',
    description:
      'Предоставляю услуги передержки собак на дому. Обеспечиваю комфорт и заботу о вашем пушистом друге. Воскресенье - выходной!',
    numReviews: 2,
    scoreReview: '5.0',
    specialist: 'pet-sitter'
  },
  {
    id: 4,
    name: 'Юлия',
    profession: 'Кинолог',
    price: '2 000 ₽/усл',
    workedWith: 'лошадьми',
    description:
      'Я ветеринарный врач со стажем 7 лет, имею большой опыт работы с собаками, делал около 137 полосных операций и очень люблю животных. Всегда внимательно изучаю анализы и назначаю лечение, которое всегда помогает питомцам.',
    numReviews: 2,
    scoreReview: '5.0',
    specialist: 'cynologist'
  },
  {
    id: 5,
    name: 'Юлия',
    profession: 'Кинолог',
    price: '2 000 ₽/усл',
    workedWith: 'лошадьми',
    description:
      'Я ветеринарный врач со стажем 7 лет, имею большой опыт работы с собаками, делал около 137 полосных операций и очень люблю животных. Всегда внимательно изучаю анализы и назначаю лечение, которое всегда помогает питомцам.',
    numReviews: 2,
    scoreReview: '5.0',
    specialist: 'cynologist'
  },
  {
    id: 6,
    name: 'Юлия',
    profession: 'Кинолог',
    price: '2 000 ₽/усл',
    workedWith: 'лошадьми',
    description:
      'Я ветеринарный врач со стажем 7 лет, имею большой опыт работы с собаками, делал около 137 полосных операций и очень люблю животных. Всегда внимательно изучаю анализы и назначаю лечение, которое всегда помогает питомцам.',
    numReviews: 2,
    scoreReview: '5.0',
    specialist: 'cynologist'
  },
  {
    id: 7,
    name: 'Юлия',
    profession: 'Кинолог',
    price: '2 000 ₽/усл',
    workedWith: 'лошадьми',
    description:
      'Я ветеринарный врач со стажем 7 лет, имею большой опыт работы с собаками, делал около 137 полосных операций и очень люблю животных. Всегда внимательно изучаю анализы и назначаю лечение, которое всегда помогает питомцам.',
    numReviews: 2,
    scoreReview: '5.0',
    specialist: 'cynologist'
  },
];

export { professionals, dataSelectedProducts, dataArticle, dataGoodsForCatalog };
