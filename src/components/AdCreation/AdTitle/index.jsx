import { useState } from 'react';
import classes from '../AdForm/style.module.scss';
import InputText from '../../../ui/forms/inputs/inputText/InputText';
import AdForm from '../AdForm';

const AdTitle = () => {
  const [info, setInfo] = useState('');
  console.log(info);
  const path = JSON.parse(localStorage.getItem('veterinarian'));

  return (
    <AdForm title="Как назвать ваше объявление?" step={path.category}>
      <div className={classes['af__input-container']}>
        <InputText
          type="text"
          placeholder="Ветеринар-хирург"
          name="text"
          maxLength={20}
          minLength={2}
          required
          autoComplete="off"
          getInput={setInfo}
        />
      </div>
    </AdForm>
  );
};
export default AdTitle;
