const dataListPrices = [
  {
    id: 1,
    text: '1 день передержки',
    from: '1000',
    before: '10 000',
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
    monday: {
      work: true,
      id: 1,
      day: 'Пн',
      begin: '9:00',
      end: '14:00',
      aroundClock: false,
    },
    tuesday: {
      work: false,
      id: 2,
      day: 'Вт',
      begin: '9:00',
      end: '14:00',
      aroundClock: true,
    },
    wednesday: {
      work: true,
      id: 3,
      day: 'Ср',
      begin: '9:00',
      end: '14:00',
      aroundClock: false,
    },
    thursday: {
      work: false,
      id: 4,
      day: 'Чт',
      begin: '9:00',
      end: '14:00',
      aroundClock: false,
    },
    friday: {
      work: true,
      id: 5,
      day: 'Пт',
      begin: '9:00',
      end: '14:00',
      aroundClock: false,
    },
    saturday: {
      work: true,
      id: 6,
      day: 'Сб',
      begin: '9:00',
      end: '14:00',
      aroundClock: false,
    },
    sunday: {
      work: true,
      id: 7,
      day: 'Вс',
      begin: '9:00',
      end: '14:00',
      aroundClock: true,
    },
  },
];

export { dataListPrices, dataFinalSchedule };
