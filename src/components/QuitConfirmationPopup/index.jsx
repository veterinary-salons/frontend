import PropTypes from 'prop-types';
import classes from '../PopupWithForm/style.module.scss';
import PopupWithForm from '../PopupWithForm';
import Button from '../../ui/buttons/originButton/Button';

const QuitConfirmationPopup = ({ isOpen, onClose }) => (
  <PopupWithForm
    title="Вы уверены что хотите выйти из аккаунта?"
    isOpen={isOpen}
    onClose={onClose}
  >
    <div className={classes['popup__button-wrap']}>
      <Button variant="outlined" size="medium" type="button">
        Да
      </Button>
      <Button
        variant="purple-filled"
        size="medium"
        type="submit"
      >
        Нет
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
