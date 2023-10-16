import classes from './style.module.scss';

import AdForm from '../AdForm';

const AdImage = () => {
  const local = JSON.parse(localStorage.getItem('veterinarian'));

  localStorage.setItem('veterinarian', JSON.stringify({ ...local, image: '' }));

  return (
    <AdForm title="Загрузите фото объявления" step={local.category}>
      <h2 className={classes}>Клиенты чаще выбирают объявления с фото</h2>
    </AdForm>
  );
};

export default AdImage;
