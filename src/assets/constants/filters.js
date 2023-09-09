import feedImg from '../images/images/goods-cathegories-catalog/feed-goodies.svg';
import toysImg from '../images/images/goods-cathegories-catalog/toys-ammunition.svg';
import toiletImg from '../images/images/goods-cathegories-catalog/toilet.svg';
import hygieneImg from '../images/images/goods-cathegories-catalog/hygiene.svg';
import bowlsImg from '../images/images/goods-cathegories-catalog/bowls-beds-houses.svg';
import vetImg from '../images/images/goods-cathegories-catalog/vetpharmacy.svg';

const animals = [
  {
    label: 'Для собак',
    value: 'dog'
  },
  {
    label: 'Для кошек',
    value: 'cat'
  },
  {
    label: 'Для рыб и рептилий',
    value: 'fish'
  },
  {
    label: 'Для грызунов и хорьков',
    value: 'rodent'
  },
  {
    label: 'Для птиц',
    value: 'bird'
  },
  {
    label: 'Для экзотических',
    value: 'exotic'
  }
];

const filterData = {
  deliveryTime: {
    legend: 'Сроки доставки',
    checkboxType: 'radio',
    options: [
      {name: 'delivery', value: 'today', label: 'Сегодня' },
      {name: 'delivery', value: 'tomorrow', label: 'Завтра' },
      {name: 'delivery', value: '3days', label: 'До 3 дней' },
      {name: 'delivery', value: '7days', label: 'До 7 дней' },
    ],
  },
  age: {
    legend: 'Возрастной диапазон',
    checkboxType: 'checkbox',
    options: [
      { value: 'young', label: 'Для маленьких' },
      { value: 'adult', label: 'Для взрослых' },
      { value: 'elderly', label: 'Для пожилых' },
    ],
  },
  Categories: {
    legend: 'Категория',
    checkboxType: 'radio',
    options: [
      { name: 'category', value: 'feed-goodies', label: 'Корм и лакомства', img: feedImg },
      { name: 'category', value: 'toys-ammunition', label: 'Игрушки и амуниция', img: toysImg },
      { name: 'category', value: 'toilet', label: 'Для туалета', img: toiletImg },
      { name: 'category', value: 'hygiene', label: 'Гигиена и уход', img: hygieneImg },
      { name: 'category', value: 'bowls-beds-houses', label: 'Миски, лежанки, домики', img: bowlsImg },
      { name: 'category', value: 'vetpharmacy', label: 'Ветаптека', img: vetImg },
    ],
  },
  'Type-feed-goodies': {
    legend: 'Тип',
    checkboxType: 'checkbox',
    options: [
      { value: 'dry', label: 'Сухой' },
      { value: 'wet', label: 'Влажный' },
      { value: 'goodies', label: 'Лакомства' },
    ],
  },
  'Type-toys-ammunition': {
    legend: 'Тип',
    checkboxType: 'checkbox',
    options: [
      { value: 'teasers', label: 'Дразнилки' },
      { value: 'food-dispensing-toys', label: 'Игры с едой' },
      { value: 'clothes', label: 'Одежда' },
      { value: 'leashes-collars', label: 'Поводки и ошейники' },
      { value: 'accessories', label: 'Аксессуары' },
    ],
  },
  'Type-toilet': {
    legend: 'Тип',
    checkboxType: 'checkbox',
    options: [
      { value: 'litter-boxes', label: 'Лотки, туалеты' },
      { value: 'litter', label: 'Наполнители' },
      { value: 'scoops-mats', label: 'Совки, коврики' },
      { value: 'pads-diapers', label: 'Пелёнки и подгузники' },
      { value: 'cleaning-supplies', label: 'Средства для уборки' },
      { value: 'potty-training', label: 'Средства приучения' },
    ],
  },
  'Type-hygiene': {
    legend: 'Тип',
    checkboxType: 'checkbox',
    options: [
      { value: 'shampoos-conditioners', label: 'Шампуни и бальзамы' },
      { value: 'lotions-sprays', label: 'Лосьоны и спреи' },
      { value: 'brushes-combs', label: 'Расчески и дешеддеры' },
      { value: 'clippers', label: 'Машинки для стрижки' },
      { value: 'grooming-kits', label: 'Наборы для груминга' },
      { value: 'toothbrushes', label: 'Зубные щётки' },
      { value: 'nail-clippers', label: 'Ножницы для стрижки когтей' },
    ],
  },
  'Type-bowls-beds-houses': {
    legend: 'Тип',
    checkboxType: 'checkbox',
    options: [
      { value: 'bowls', label: 'Миски, поилки' },
      { value: 'beds', label: 'Лежанки' },
      { value: 'scratching-posts', label: 'Когтеточки' },
      { value: 'play-complexes', label: 'Игровые комплексы' },
    ],
  },
  'Type-vetpharmacy': {
    legend: 'Тип',
    checkboxType: 'checkbox',
    options: [
      { value: 'from-fleas-ticks', label: 'От блох и клещей' },
      { value: 'from-helminths', label: 'От гельминтов' },
      { value: 'vitamins', label: 'Витамины' },
      { value: 'antibiotics', label: 'Антибиотики' },
      { value: 'for-eyes', label: 'Для глаз' },
      { value: 'for-skin', label: 'Для кожи' },
    ],
  },
  brands: {
    legend: 'Бренды',
    checkboxType: 'checkbox',
    options: [
      { value: 'Royal Conin', label: 'Royal Conin' },
      { value: 'Pro Plan', label: 'Pro Plan' },
      { value: 'Purina One', label: 'Purina One' },
      { value: 'Farmina', label: 'Farmina' },
      { value: 'Alpha Pet', label: 'Alpha Pet' },
    ],
  },
  needs: {
    legend: 'Потребности',
    checkboxType: 'checkbox',
    options: [
        {
          label: 'Для стерилизованных',
          value: 'sterilized'
        },
        {
          label: 'Для чувствительного пищеварения',
          value: 'sensitive-digestion'
        },
        {
          label: 'Для котят',
          value: 'kittens'
        },
        {
          label: 'С избыточным весом',
          value: 'overweight'
        },
        {
          label: 'Для взрослых и пожилых',
          value: 'Adult'
        }
      ],
  },
  petSize: {
    legend: 'Размер питомца',
    checkboxType: 'checkbox',
    options: [
        {
          label: 'До 5 кг',
          value: 'under5'
        },
        {
          label: 'От 5 до 10 кг',
          value: '5-10'
        },
        {
          label: '10 -15 кг',
          value: '10-15'
        },
        {
          label: '15 -20 кг',
          value: '15-20'
        },
        {
          label: 'От 20 кг',
          value: 'over20'
        }
      ],
  },
  specialists: {
    legend: 'Выберите специалиста',
    checkboxType: 'radio',
    options: [
      {
          name: 'test',
          label: 'Ветеринар',
          value: 'vet'
        },
      {
          name: 'test',
          label: 'Грумер',
          value: 'groomer'
        },
      {
          name: 'test',
          label: 'Кинолог',
          value: 'cynologist'
        },
      {
          name: 'test',
          label: 'Зоо-няня',
          value: 'pet-sitter'
        }
      ],
  },
  servicePlace: {
    legend: 'Где хотите получить услугу',
    checkboxType: 'checkbox',
    options: [
        {
          label: 'Я приеду к специалисту',
          value: 'specialists-place'
        },
        {
          label: 'Специалист приедет ко мне',
          value: 'my-place'
        }
      ],
  },
  // Добавьте другие типы фильтров по аналогии
};


export {
  animals,
  filterData
}

