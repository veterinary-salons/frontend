import PropTypes from 'prop-types';
import classes from '../PopupWithForm/style.module.scss';
import PopupWithForm from '../PopupWithForm';
import Button from '../../ui/buttons/originButton/Button';

const BookingRevokePopup = ({ isOpen, onClose }) => (
  <PopupWithForm
    title="Вы уверены, что хотите отменить бронирование?"
    isOpen={isOpen}
    onClose={onClose}
  >
    <div className={classes['popup__button-wrap']}>
      <Button variant="outlined" size="medium" type="button">
        Назад
      </Button>
      <Button variant="purple-filled" size="medium" type="submit">
        Отменить бронирование
      </Button>
    </div>
  </PopupWithForm>
);

BookingRevokePopup.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.bool,
};

BookingRevokePopup.defaultProps = {
  isOpen: true,
  onClose: false,
};

export default BookingRevokePopup;
