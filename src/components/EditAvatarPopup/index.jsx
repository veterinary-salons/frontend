import PropTypes from 'prop-types';
import classes from '../PopupWithForm/style.module.scss';
import PopupWithForm from '../PopupWithForm';
import Button from '../../ui/buttons/originButton/Button';

const QuitConfirmationPopup = ({ isOpen, onClose }) => (
  <PopupWithForm
    title="Загрузка новой фотографии"
    isOpen={isOpen}
    onClose={onClose}
  >
    <p className={classes.popup__placeholder}>
      Вы&nbsp;можете загрузить изображение в&nbsp;формате JPG, GIF, PNG
    </p>
    <div className={classes['popup__button-wrap']}>
      <Button variant="purple-filled" size="medium" type="submit">
        Выбрать файл
      </Button>
    </div>
  </PopupWithForm>
);

QuitConfirmationPopup.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.bool,
};

QuitConfirmationPopup.defaultProps = {
  isOpen: true,
  onClose: false,
};

export default QuitConfirmationPopup;
