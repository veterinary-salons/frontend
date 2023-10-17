import { useState } from 'react';
import { useDispatch } from 'react-redux';
import classes from './style.module.scss';
import AdForm from '../AdForm';
import Button from '../../../ui/buttons/originButton/Button';
import ImageUploadPopup from '../../ImageUploadPopup';
import btnDeleteImg from '../../../assets/images/icon/btn-delete-img/btn-deleete-img.svg';
import { setImgService } from '../../../app/store/saveImgService/addImage';

const AdImage = () => {
  const dispathc = useDispatch();
  const [isAction, setIsAction] = useState(false);
  const [image, setIMage] = useState('');

  const handleButton = () => {
    setIsAction((state) => !state);
  };

  const handleDeleteimg = () => {
    setIMage('');
  };

  const local = JSON.parse(localStorage.getItem('veterinarian'));

  const handleBtn = () => {
    dispathc(setImgService(image.src ? image.src : ''));
  };

  return (
    <section className={classes.form}>
      <AdForm
        title="Загрузите фото объявления"
        step={local.category}
        onClick={handleBtn}
      >
        <h2 className={classes.form__title}>
          Клиенты чаще выбирают объявления с фото
        </h2>

        {image.src !== undefined ? (
          <div className={classes.form__container}>
            <img src={image.src} alt="фото" className={classes.form__img} />
            <button className={classes.form__btn} onClick={handleDeleteimg}>
              <img src={btnDeleteImg} alt="удалить фото" />
            </button>
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
