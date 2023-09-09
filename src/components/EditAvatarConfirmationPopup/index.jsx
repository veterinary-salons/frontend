// import { useState } from 'react';
// import ReactCrop  from 'react-image-crop';
import PropTypes from 'prop-types';
import classes from '../PopupWithForm/style.module.scss';
import PopupWithForm from '../PopupWithForm';
import Button from '../../ui/buttons/originButton/Button';
import UploadProfileAvatar from '../../assets/images/images/avatar-popup/avatarPopup.png';

const EditAvatarConfirmationPopup = ({ isOpen, onClose, src, name }) => (
  // const [crop, setCrop] = useState<Crop>({
  //   unit: '%',
  //   x: 25,
  //   y: 25,
  //   width: 50,
  //   height: 50
  // });

  <PopupWithForm title="Новая фотография" isOpen={isOpen} onClose={onClose}>
    <p className={classes.popup__placeholder}>
      Выбранная область будет показываться на&nbsp;вашей странице
    </p>
    {/* <ReactCrop crop={crop} onChange={c => setCrop(c)}>
        <img className={classes.popup__photo} src={src} alt={name} />
      </ReactCrop> */}
    <div className={classes['popup__photo-wrap']}>
      <img className={classes.popup__photo} src={src} alt={name} />
      <div className={classes['popup__photo-overlay']} />
      <div className={classes['popup__photo-crop']} />
    </div>
    <div className={classes['popup__button-wrap']}>
      <Button variant="outlined" size="medium" type="button">
        Назад
      </Button>
      <Button variant="purple-filled" size="medium" type="submit">
        Сохранить и продолжить
      </Button>
    </div>
  </PopupWithForm>
);

EditAvatarConfirmationPopup.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.bool,
  src: PropTypes.string,
  name: PropTypes.string,
};

EditAvatarConfirmationPopup.defaultProps = {
  isOpen: true,
  onClose: false,
  src: UploadProfileAvatar,
  name: '',
};

export default EditAvatarConfirmationPopup;
