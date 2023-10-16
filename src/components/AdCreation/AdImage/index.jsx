import { useState } from 'react';
import classes from './style.module.scss';
import AdForm from '../AdForm';
import Button from '../../../ui/buttons/originButton/Button';
import ImageUploadPopup from '../../ImageUploadPopup';
import CrossIcon from '../../../ui/icons/cross/CrossIcon';

const AdImage = () => {
  const [isAction, setIsAction] = useState(false);
  const [image, setIMage] = useState('');

  const handleButton = () => {
    setIsAction((state) => !state);
  };

  const local = JSON.parse(localStorage.getItem('veterinarian'));
  localStorage.setItem('veterinarian', JSON.stringify({ ...local, image: '' }));

  return (
    <section className={classes.form}>
      <AdForm title="Загрузите фото объявления" step={local.category}>
        <h2 className={classes.form__title}>
          Клиенты чаще выбирают объявления с фото
        </h2>

        {image.src !== undefined ? (
          <div className={classes.form__container}>
            <img src={image.src} alt="фото" className={classes.form__img} />
            <div className={classes.form__container_position}>
              <CrossIcon />
            </div>
          </div>
        ) : (
          <div className={classes['form__add-image']}>
            <Button
              type="button"
              variant="add"
              shape="round"
              onClick={handleButton}
            />
          </div>
        )}
      </AdForm>
      <ImageUploadPopup
        isOpen={isAction}
        getImage={setIMage}
        onClose={handleButton}
      />
    </section>
  );
};

export default AdImage;
