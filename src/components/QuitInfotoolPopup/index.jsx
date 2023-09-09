import PropTypes from 'prop-types';
import classes from '../PopupWithForm/style.module.scss';
import PopupWithForm from '../PopupWithForm';
import Button from '../../ui/buttons/originButton/Button';

const QuitConfirmationPopup = ({ isOpen, onClose }) => (
  <PopupWithForm title="Вы вышли из аккаунта" isOpen={isOpen} onClose={onClose}>
    <div className={classes['popup__button-wrap']}>
      <Button variant="purple-filled" size="medium" type="submit">
        Понятно
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
