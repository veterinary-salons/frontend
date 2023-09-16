import classes from '../AdForm/style.module.scss';
import AdForm from '../AdForm';
import Checkbox from '../../../ui/forms/checkboxes/checkbox/checkbox';

const AdType = () => (
  <AdForm title='Какую услугу вы хотите оказать?'>
    <div className={classes['af__checkbox-container']}>
      <Checkbox type="radio">груминг</Checkbox>
      <Checkbox type="radio">ветеринария</Checkbox>
      <Checkbox type="radio">передержка</Checkbox>
      <Checkbox type="radio">кинология</Checkbox>
    </div>
  </AdForm>
);

export default AdType;
