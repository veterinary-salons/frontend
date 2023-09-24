const dataListPrices = [
  {
    id: 1,
    text: '1 день передержки',
    form: '1000',
    befor: '10 000',
  },
  // {
  // id: 2,
  //   text: 'Дрессировка с передержкой у кинолога',
  //   form: '1000',
  //   befor: '10 000',
  // },
  // {
  // id: 3,
  //   text: 'Обучение командам',
  //   form: '1000',
  //   befor: '10 000',
  // },
];

const dataFinalSchedule = [
  {
    work: true,
    id: 1,
    day: 'Пн',
    begin: '9:00',
    end: '14:00',
    aroundClock: false,
  },
  {
    work: true,
    id: 2,
    day: 'Вт',
    begin: '9:00',
    end: '14:00',
    aroundClock: true,
  },
  {
    work: true,
    id: 3,
    day: 'Ср',
    begin: '9:00',
    end: '14:00',
    aroundClock: false,
  },
  {
    work: false,
    id: 4,
    day: 'Чт',
    begin: '9:00',
    end: '14:00',
    aroundClock: false,
  },
  {
    work: true,
    id: 5,
    day: 'Пт',
    begin: '9:00',
    end: '14:00',
    aroundClock: false,
  },
  {
    work: true,
    id: 6,
    day: 'Сб',
    begin: '9:00',
    end: '14:00',
    aroundClock: false,
  },
  {
    work: true,
    id: 7,
    day: 'Вс',
    begin: '9:00',
    end: '14:00',
    aroundClock: true,
  },
];

export { dataListPrices, dataFinalSchedule };
