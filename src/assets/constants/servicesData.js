const groomerServiceData = {
  petType: {
    legend: 'С какими животными вы работаете',
    checkboxType: 'checkbox',
    options: [
      {
        label: 'Собаки',
        value: 'dogs',
      },
      {
        label: 'Кошки',
        value: 'cats',
      },
      {
        label: 'Кролики',
        value: 'rabbits',
      },
      {
        label: 'Морские свинки',
        value: 'guinea-pigs',
      },
    ],
  },
  serviceType: {
    legend: 'Какой груминг вы можете сделать',
    checkboxType: 'checkbox',
    options: [
      {
        label: 'Гигиенический',
        value: 'hygienic',
      },
      {
        label: 'Выставочный',
        value: 'exhibitional',
      },
      {
        label: 'Декоративный',
        value: 'decorative',
      },
    ],
  }
}

const dogHandlerServiceData = {
  services: {
    legend: 'С какими задачами вы работаете',
    checkboxType: 'checkbox',
    options: [
      {
        label: 'Коррекция проблемного поведения',
        value: 'problem-behavior-correction',
      },
      {
        label: 'Воспитательная дрессировка щенка',
        value: 'puppy-educational-training',
      },
      {
        label: 'Обучение командам',
        value: 'command-training',
      },
      {
        label: 'Дрессировка служебных собак',
        value: 'service-dog-training',
      },
      {
        label: 'Дрессировка охотничьих собак',
        value: 'hunting-dog-training',
      },
      {
        label: 'Подготовка к экзамену ОКД',
        value: 'gtc-exam-preparation',
      },
      {
        label: 'Спортивная дрессировка',
        value: 'sports-training',
      },
      {
        label: 'Адаптация собаки из приюта',
        value: 'shelter-dog-adaptation',
      },
      {
        label: 'Подготовка к участию на выставке',
        value: 'exhibition-preparation-training',
      },
      {
        label: 'Консультация',
        value: 'consultation',
      },
    ],
  },
  serviceType: {
    legend: 'Какие форматы работы вы используете',
    checkboxType: 'checkbox',
    options: [
      {
        label: 'Индивидуальные занятия',
        value: 'individual',
      },
      {
        label: 'Занятия в мини-группе',
        value: 'mini-group',
      },
      {
        label: 'Групповые занятия',
        value: 'group',
      },
      {
        label: 'Дрессировка с передержкой у кинолога',
        value: 'training-and-pet-sitting',
      },
    ],
  }
}

const vetServiceData = {
  petType: {
    legend: 'С какими животными вы работаете',
    checkboxType: 'checkbox',
    options: [
      {
        label: 'Собаки',
        value: 'dogs',
      },
      {
        label: 'Кошки',
        value: 'cats',
      },
      {
        label: 'Кролики',
        value: 'rabbits',
      },
      {
        label: 'Птицы',
        value: 'birds',
      },
      {
        label: 'Хорьки',
        value: 'ferrets',
      },
      {
        label: 'Грызуны',
        value: 'rodents',
      },
      {
        label: 'Рептилии',
        value: 'reptiles',
      },
    ],
  },
  serviceType: {
    legend: 'Какие именно услуги оказываете',
    checkboxType: 'checkbox',
    options: [
      {
        label: 'Консультации',
        value: 'consultation',
      },
      {
        label: 'Диагностика заболевания и лечение',
        value: 'diagnostics',
      },
      {
        label: 'Введение инъекций',
        value: 'injections',
      },
      {
        label: 'Вакцинация',
        value: 'vaccination',
      },
      {
        label: 'Стерилизация',
        value: 'sterilization',
      },
      {
        label: 'Оформление ветпаспорта',
        value: 'vetpassport',
      },
      {
        label: 'Усыпление',
        value: 'euthanasia',
      },
    ],
  }
}

const petSitterServiceData = {
  petType: {
    legend: 'С какими животными вы работаете',
    checkboxType: 'checkbox',
    options: [
      {
        label: 'Собаки',
        value: 'dogs',
      },
      {
        label: 'Кошки',
        value: 'cats',
      },
      {
        label: 'Кролики',
        value: 'rabbits',
      },
      {
        label: 'Птицы',
        value: 'birds',
      },
      {
        label: 'Хорьки',
        value: 'ferrets',
      },
      {
        label: 'Грызуны',
        value: 'rodents',
      },
      {
        label: 'Рептилии',
        value: 'reptiles',
      },
    ],
  },
}

export { groomerServiceData, dogHandlerServiceData, vetServiceData, petSitterServiceData };