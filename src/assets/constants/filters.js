import feedImg from '../images/images/goods-cathegories-catalog/feed-goodies.svg';
import toysImg from '../images/images/goods-cathegories-catalog/toys-ammunition.svg';
import toiletImg from '../images/images/goods-cathegories-catalog/toilet.svg';
import hygieneImg from '../images/images/goods-cathegories-catalog/hygiene.svg';
import bowlsImg from '../images/images/goods-cathegories-catalog/bowls-beds-houses.svg';
import vetImg from '../images/images/goods-cathegories-catalog/vetpharmacy.svg';

import imgGroomer from '../images/images/category-specialist-card/groomers.svg';
import imgVets from '../images/images/category-specialist-card/vets.svg';
import imgPetSitters from '../images/images/category-specialist-card/pet-sitters.svg';
import imgDogHandlers from '../images/images/category-specialist-card/dog-handlers.svg';

const animals = [
  {
    label: 'Для собак',
    value: 'dog',
  },
  {
    label: 'Для кошек',
    value: 'cat',
  },
  {
    label: 'Для рыб и рептилий',
    value: 'fish',
  },
  {
    label: 'Для грызунов и хорьков',
    value: 'rodent',
  },
  {
    label: 'Для птиц',
    value: 'bird',
  },
  {
    label: 'Для экзотических',
    value: 'exotic',
  },
];

// фильтр для товаров
const filterGoodsData = {
  deliveryTime: {
    legend: 'Сроки доставки',
    checkboxType: 'radio',
    options: [
      { name: 'delivery', value: 'today', label: 'Сегодня' },
      { name: 'delivery', value: 'tomorrow', label: 'Завтра' },
      { name: 'delivery', value: '3days', label: 'До 3 дней' },
      { name: 'delivery', value: '7days', label: 'До 7 дней' },
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
  TypeForAll: {
    legend: 'Тип',
    checkboxType: 'checkbox',
    options: [
      { value: 'feed-goodies', label: 'Корм и лакомства', img: feedImg },
      { value: 'toys-ammunition', label: 'Игрушки и амуниция', img: toysImg },
      { value: 'toilet', label: 'Для туалета', img: toiletImg },
      { value: 'hygiene', label: 'Гигиена и уход', img: hygieneImg },
      {
        value: 'bowls-beds-houses',
        label: 'Миски, лежанки, домики',
        img: bowlsImg,
      },
      { value: 'vetpharmacy', label: 'Ветаптека', img: vetImg },
    ],
  },
  TypeForFood: {
    legend: 'Тип',
    checkboxType: 'checkbox',
    options: [
      { value: 'dry', label: 'Сухой' },
      { value: 'wet', label: 'Влажный' },
      { value: 'goodies', label: 'Лакомства' },
    ],
  },
  TypeForCare: {
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
      { value: 'view-all', label: 'Посмотреть все' },
    ],
  },
  TypeForToilet: {
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
  TypeForToysAndClothes: {
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
        value: 'sterilized',
      },
      {
        label: 'Для чувствительного пищеварения',
        value: 'sensitive-digestion',
      },
      {
        label: 'Для котят',
        value: 'kittens',
      },
      {
        label: 'С избыточным весом',
        value: 'overweight',
      },
      {
        label: 'Для взрослых и пожилых',
        value: 'Adult',
      },
    ],
  },
  feedTypes: {
    legend: 'Тип корма',
    checkboxType: 'checkbox',
    options: [
      {
        label: 'Сухой',
        value: 'dry',
      },
      {
        label: 'Влажный',
        value: 'wet',
      },
      {
        label: 'Лакомства',
        value: 'goodies',
      },
    ],
  },
  petSize: {
    legend: 'Размер питомца',
    checkboxType: 'checkbox',
    options: [
      {
        label: 'До 5 кг',
        value: 'under5',
      },
      {
        label: 'От 5 до 10 кг',
        value: '5-10',
      },
      {
        label: '10 -15 кг',
        value: '10-15',
      },
      {
        label: '15 -20 кг',
        value: '15-20',
      },
      {
        label: 'От 20 кг',
        value: 'over20',
      },
    ],
  },
  // Добавьте другие типы фильтров по аналогии
};

// фильтр для услуг
const filterServicesData = {
  specialists: {
    legend: 'Выберите специалиста',
    checkboxType: 'radio',
    options: [
      {
        label: 'Грумер',
        value: 'groomer',
        color: 'blue',
        img: imgGroomer,
        name: 'specialist',
      },
      {
        label: 'Ветеринар',
        value: 'vet',
        color: 'yellow',
        img: imgVets,
        name: 'specialist',
      },
      {
        label: 'Зоо-няня',
        value: 'pet-sitter',
        color: 'green',
        img: imgPetSitters,
        name: 'specialist',
      },
      {
        label: 'Кинолог',
        value: 'cynologist',
        color: 'violet',
        img: imgDogHandlers,
        name: 'specialist',
      },
    ],
  },
  servicePlace: {
    legend: 'Где хотите получить услугу',
    checkboxType: 'checkbox',
    options: [
      {
        label: 'Я приеду к специалисту',
        value: 'specialists-place',
      },
      {
        label: 'Специалист приедет ко мне',
        value: 'my-place',
      },
    ],
  },
  petType: {
    legend: 'Какой у вас питомец',
    checkboxType: 'checkbox',
    options: [
      'собака',
      'грызуны',
      'птицы',
      'рептилии',
      'куньи',
      'рыбки',
      'другое',
    ],
  },
  serviceType: {
    legend: 'Какая услуга вам нужна',
    checkboxType: 'checkbox',
    options: [
      'консультация',
      'Дрессировка с передержкой',
      'Гигиенический',
      'Выставочный',
      'Коррекция проблемного поведения',
      'Занятия в мини-группе',
      'Групповые занятия',
    ],
  },
  date: {
    legend: 'Когда вам нужна услуга',
    checkboxType: 'checkbox',
    options: ['выбрать дату'],
  },
  price: {
    legend: 'Цена',
    checkboxType: 'checkbox',
    options: ['от 0 ₽', 'до 0 ₽'],
  },
};

export { animals, filterGoodsData, filterServicesData };
