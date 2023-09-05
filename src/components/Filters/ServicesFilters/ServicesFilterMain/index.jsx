import { useState } from 'react';
import CheckboxFilter from '../../CheckboxFilter';
import classes from './style.module.scss';
import Dropdown from '../../../../ui/forms/dropdowns/Dropdown';
import Button from '../../../../ui/buttons/originButton/Button';
import { arrayServicesVet, arrayServicesDate } from '../../../../assets/constants/constants';
import InputPrice from '../../../../ui/forms/inputs/inputPrice';

function ServicesFilterMain() {
  const [values, setValues] = useState({});

  const handleFormChange = (evt, value) => {
    setValues({
      ...values,
      ...value,
    });
    console.log(values, evt)
  };

  return (
    <form className={classes.filter} id='services-filter'>
      <CheckboxFilter type="specialists" getCheckbox={(evt) => handleFormChange(evt)}/>
      <fieldset className={classes.filter__fieldset}>
        <legend className={classes.filter__legend}>Какой у вас питомец</legend>
        <Dropdown width='100%'/>
      </fieldset>
      <CheckboxFilter type="servicePlace" getCheckbox={(evt) => handleFormChange(evt)}/>
      <fieldset className={classes.filter__fieldset}>
        <legend className={classes.filter__legend}>Какая услуга вам нужна</legend>
        <Dropdown array={arrayServicesVet} width='100%'/>
      </fieldset>
      <fieldset className={classes.filter__fieldset}>
        <legend className={classes.filter__legend}>Когда вам нужна услуга</legend>
        {/* TODO: сделать дропдаун для даты */}
        <Dropdown array={arrayServicesDate} width='100%'/>
      </fieldset>
      <fieldset className={classes.filter__fieldset}>
        <legend className={classes.filter__legend}>Цена</legend>
        <div className={classes.filter__inputs}>
          <InputPrice/>
          <InputPrice prefix='до'/>
        </div>
        <Button
          onClick={() => {}}
          variant="purple-filled"
          size="medium"
          type="submit"
          isMaxWidth
          // active={isValid}
        >
          Показать специалистов
        </Button>
      </fieldset>
    </form>
  );
}

export default ServicesFilterMain;
