const adTypeOptions = [
  {
    checkboxType: 'radio',
    options: [
      {
        label: 'груминг',
        value: 'grooming',
        name: 'serviceType',
      }, 

      {
        label: 'ветеринария',
        value: 'pet-health',
        name: 'serviceType',
      },

      {
        label: 'передержка',
        value: 'pet-sitting',
        name: 'serviceType',
      },

      {
        label: 'кинология',
        value: 'cynology',
        name: 'serviceType',
      },
    ]
  }
]

const groomerServiceOptions = [
  {
    checkboxType: 'checkbox',
    options: [
      {
      label: 'Коррекция проблемного поведения',
    }, 
      {
        label: 'Воспитательная дрессировка щенка',
      }, 
      {
        label: 'Обучение командам',
      },
      {
        label: 'Дрессировка служебных собак',
      },
      {
        label: 'Дрессировка охотничьих собак',
      },
      {
        label: 'Подготовка к экзамену ОКД',
      },
      {
        label: 'Спортивная дрессировка',
      },
      {
        label: 'Адаптация собаки из приюта',
      },
      {
        label: 'Подготовка к участию на выставке',
      },
      {
       label: 'Консультация',
      }
      
    ]
  }
]

export { adTypeOptions, groomerServiceOptions };