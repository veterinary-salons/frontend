import classes from '../AdForm/style.module.scss';
import AdForm from '../AdForm';
import Checkbox from '../../../ui/forms/checkboxes/checkbox/checkbox';

const AdDogHandler = () => (
  <AdForm title='С какими задачами вы работаете'>
    <div className={classes['af__checkbox-container']}>
      <Checkbox type="checkbox">Коррекция проблемного поведения</Checkbox>
      <Checkbox type="checkbox">Воспитательная дрессировка щенка</Checkbox>
      <Checkbox type="checkbox">Обучение командам</Checkbox>
      <Checkbox type="checkbox">Дрессировка служебных собак</Checkbox>
      <Checkbox type="checkbox">Дрессировка охотничьих собак</Checkbox>
      <Checkbox type="checkbox">Подготовка к экзамену ОКД</Checkbox>
      <Checkbox type="checkbox">Спортивная дрессировка</Checkbox>
      <Checkbox type="checkbox">Адаптация собаки из приюта</Checkbox>
      <Checkbox type="checkbox">Подготовка к участию на выставке</Checkbox>
      <Checkbox type="checkbox">Консультация</Checkbox>
      <Checkbox type="checkbox">
        <input className={classes.af__input} placeholder='Другие'/>
      </Checkbox>
    </div>
  </AdForm>
);

export default AdDogHandler;
