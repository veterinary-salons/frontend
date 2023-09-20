const adTypeOptions = [
  {
    checkboxType: 'radio',
    options: [
      {
        label: 'груминг',
        value: 'grooming'
      }, 

      {
        label: 'ветеринария',
        value: 'pet-health'
      },

      {
        label: 'передержка',
        value: 'pet-sitting'
      },

      {
        label: 'кинология',
        value: 'cynology'
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