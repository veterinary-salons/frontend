import PropTypes from 'prop-types';
import classes from '../PopupWithForm/style.module.scss';
import PopupWithForm from '../PopupWithForm';
import Button from '../../ui/buttons/originButton/Button';

const BookingConfirmationPopup = ({ isOpen, onClose }) => (
  <PopupWithForm
    title="Вы связались с заказчиком и договорились о встрече?"
    isOpen={isOpen}
    onClose={onClose}
  >
    <div className={classes['popup__button-wrap']}>
      <Button variant="outlined" size="medium" type="button">
        Назад
      </Button>
      <Button variant="purple-filled" size="medium" type="submit">
        Подтвердить бронирование
      </Button>
    </div>
  </PopupWithForm>
);

BookingConfirmationPopup.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.bool,
};

BookingConfirmationPopup.defaultProps = {
  isOpen: true,
  onClose: false,
};

export default BookingConfirmationPopup;
