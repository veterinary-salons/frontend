import PropTypes from 'prop-types';
import classes from '../PopupWithForm/style.module.scss';
import PopupWithForm from '../PopupWithForm';
import Button from '../../ui/buttons/originButton/Button';

const BookingRevokePopup = ({ isOpen, onClose, onSubmit }) => (
  <PopupWithForm
    title="Вы уверены, что хотите отменить бронирование?"
    isOpen={isOpen}
    onClose={onClose}
  >
    <div className={classes['popup__button-wrap']}>
      <Button onClick={onClose} variant="outlined" size="medium" type="button">
        Назад
      </Button>
      <Button
        onClick={onSubmit}
        variant="purple-filled"
        size="medium"
        type="submit"
      >
        Отменить бронирование
      </Button>
    </div>
  </PopupWithForm>
);

BookingRevokePopup.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onSubmit: PropTypes.func,
};

BookingRevokePopup.defaultProps = {
  isOpen: true,
  onClose: () => {},
  onSubmit: () => {},
};

export default BookingRevokePopup;
