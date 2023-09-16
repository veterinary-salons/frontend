import PropTypes from 'prop-types';
import classes from '../PopupWithForm/style.module.scss';
import PopupWithForm from '../PopupWithForm';
import Button from '../../ui/buttons/originButton/Button';
import UploadProfileAvatar from '../../assets/images/images/avatar-popup/avatarPopup.png';

const EditAvatarConfirmationPopup = ({ isOpen, onClose, imgSrc, name }) => (
  <PopupWithForm title="Новая фотография" isOpen={isOpen} onClose={onClose}>
    <p className={classes.popup__placeholder}>
      Выбранная область будет показываться на&nbsp;вашей странице
    </p>
    <div className={classes['popup__photo-wrap']}>
      <img className={classes.popup__photo} src={imgSrc} alt={name} />
      <div className={classes['popup__photo-boundary']}>
        <img className={classes['popup__photo-crop']} src={imgSrc} alt={name} />
        <div className={classes['popup__photo-viewport']} />
        <div className={classes['popup__photo-overlay']} />
      </div>
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
  imgSrc: PropTypes.string,
  name: PropTypes.string,
};

EditAvatarConfirmationPopup.defaultProps = {
  isOpen: false,
  onClose: true,
  imgSrc: UploadProfileAvatar,
  name: '',
};

export default EditAvatarConfirmationPopup;