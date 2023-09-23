import PropTypes from 'prop-types';
import classes from '../PopupWithForm/style.module.scss';
import PopupWithForm from '../PopupWithForm';
import Button from '../../ui/buttons/originButton/Button';

const QuitConfirmationPopup = ({ isOpen, onClose, onExit }) => (
  <PopupWithForm
    title="Вы уверены что хотите выйти из аккаунта?"
    isOpen={isOpen}
    onClose={onClose}
  >
    <div className={classes['popup__button-wrap']}>
      <Button onClick={onExit} variant="outlined" size="medium" type="button">
        Да
      </Button>
      <Button
        onClick={onClose}
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
  onClose: PropTypes.func,
  onExit: PropTypes.func,
};

QuitConfirmationPopup.defaultProps = {
  isOpen: true,
  onClose: null,
  onExit: null,
};

export default QuitConfirmationPopup;
