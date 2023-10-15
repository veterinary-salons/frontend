import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from '../AdForm/style.module.scss';
import InputText from '../../../ui/forms/inputs/inputText/InputText';
import AdForm from '../AdForm';
import { addService } from '../../../app/store/addService/service-action';

const AdTitle = () => {
  const [info, setInfo] = useState('');
  const dispatch = useDispatch();
  const veterinarInfo = JSON.parse(localStorage.getItem('veterinarian'));
  localStorage.setItem(
    'serviseName',
    JSON.stringify({ text: info['ad-title'] }),
  );
  const [validate, setValidate] = useState({});
  veterinarInfo.text = info;

  const handleSubmit = () => {
    dispatch(addService(info['ad-title'], 'specialistInformation'));
  };

  const title = useSelector((state) => state.addService.specialistInformation);

  return (
    <AdForm
      title="Как назвать ваше объявление?"
      step={veterinarInfo.category}
      activBtn={validate['ad-title']}
      onClick={handleSubmit}
    >
      <div className={classes['af__input-container']}>
        <InputText
          type="text"
          placeholder={title || 'Ветеринар-хирург'}
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
