import PropTypes from 'prop-types';
import classes from '../PopupWithForm/style.module.scss';
import PopupWithForm from '../PopupWithForm';
import Button from '../../ui/buttons/originButton/Button';

const BookingCancellationPopup = ({ isOpen, onClose }) => (
  <PopupWithForm
    title="Ничего, будем рады помочь вам в другой раз"
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

BookingCancellationPopup.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.bool,
};

BookingCancellationPopup.defaultProps = {
  isOpen: true,
  onClose: false,
};

export default BookingCancellationPopup;
