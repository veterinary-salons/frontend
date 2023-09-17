import classes from '../../AdForm/style.module.scss';
import AdForm from '../../AdForm';
import Checkbox from '../../../../ui/forms/checkboxes/checkbox/checkbox';

const AdDogHandlerStepTwo = () => (
  <AdForm title='Какие форматы работы вы используете'>
    <div className={classes['af__checkbox-container']}>
      <Checkbox type="checkbox">Индивидуальные занятия</Checkbox>
      <Checkbox type="checkbox">Занятия в мини-группе</Checkbox>
      <Checkbox type="checkbox">Групповые занятия</Checkbox>
      <Checkbox type="checkbox">
        <input className={classes.af__input} placeholder='Другое'/>
      </Checkbox>
    </div>
  </AdForm>
);

export default AdDogHandlerStepTwo;
