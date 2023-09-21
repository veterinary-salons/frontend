import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useRef, useState, useEffect } from 'react';
import { Cropper } from 'react-cropper';
import classes from '../PopupWithForm/style.module.scss';
import PopupWithForm from '../PopupWithForm';
import Button from '../../ui/buttons/originButton/Button';
import UploadProfileAvatar from '../../assets/images/images/avatar-popup/avatarPopup.png';
import 'cropperjs/dist/cropper.css';
import './style.scss';

const EditAvatarConfirmationPopup = ({
  isOpen,
  onClose,
  imgSrc,
  onBack,
  onSave,
  round,
}) => {
  const cropperRef = useRef(null);
  const [croppedImage, setCroppedImage] = useState('');

  const onCrop = () => {
    const cropper = cropperRef.current?.cropper;
    setCroppedImage(cropper.getCroppedCanvas().toDataURL());
  };

  useEffect(() => {
    if (croppedImage) {
      onSave(croppedImage);
      onClose();
    }
  }, [croppedImage]);

  return (
    <PopupWithForm title="Новая фотография" isOpen={isOpen} onClose={onClose}>
      <p className={classes.popup__placeholder}>
        Выбранная область будет показываться на&nbsp;вашей странице
      </p>
      <div
        className={classNames(
          classes['popup__photo-wrap'],
          round ? 'round' : 'rect',
          round
            ? classes['popup__photo-wrap_round']
            : classes['popup__photo-wrap_rect'],
        )}
      >
        <Cropper
          src={imgSrc}
          style={{ height: '100%', width: '100%' }}
          viewMode={1}
          initialAspectRatio={round ? 1 : 295 / 350}
          aspectRatio={1}
          autoCropArea={round ? 0.63 : 0.8}
          cropBoxMovable={false}
          cropBoxResizable={false}
          guides={false}
          toggleDragModeOnDblclick={false}
          center={false}
          highlight={false}
          minCropBoxWidth={190}
          ref={cropperRef}
          dragMode="move"
        />
      </div>
      <div className={classes['popup__button-wrap']}>
        <Button variant="outlined" size="medium" type="button" onClick={onBack}>
          Назад
        </Button>
        <Button
          variant="purple-filled"
          size="medium"
          type="button"
          onClick={onCrop}
        >
          Сохранить и продолжить
        </Button>
      </div>
    </PopupWithForm>
  );
};
EditAvatarConfirmationPopup.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  imgSrc: PropTypes.string,
  onBack: PropTypes.func,
  onSave: PropTypes.func,
  round: PropTypes.bool,
};

EditAvatarConfirmationPopup.defaultProps = {
  isOpen: false,
  onClose: null,
  imgSrc: UploadProfileAvatar,
  onBack: () => {},
  onSave: () => {},
  round: true,
};

export default EditAvatarConfirmationPopup;
