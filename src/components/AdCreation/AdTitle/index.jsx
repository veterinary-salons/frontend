import { useState } from 'react';
import classes from '../AdForm/style.module.scss';
import InputText from '../../../ui/forms/inputs/inputText/InputText';
import AdForm from '../AdForm';

const AdTitle = () => {
  const [info, setInfo] = useState('');
  const [validate, setValidate] = useState({});

  const local = JSON.parse(localStorage.getItem('veterinarian'));
  localStorage.setItem(
    'veterinarian',
    JSON.stringify({ ...local, adTitle: info['ad-title'] }),
  );

  return (
    <AdForm
      title="Как назвать ваше объявление?"
      step={local.category}
      activBtn={validate['ad-title']}
    >
      <div className={classes['af__input-container']}>
        <InputText
          type="text"
          placeholder="Ветеринар-хирург"
          name="ad-title"
          maxLength={20}
          minLength={2}
          required
          autoComplete="off"
          getInput={setInfo}
          getValid={setValidate}
        />
      </div>
    </AdForm>
  );
};
export default AdTitle;
