import PropTypes from 'prop-types';
import classes from '../PopupWithForm/style.module.scss';
import PopupWithForm from '../PopupWithForm';
import Button from '../../ui/buttons/originButton/Button';

const ServiceConfirmPopup = ({ isOpen, onClose }) => (
  <PopupWithForm
    name="infotool"
    title="Ничего, будем рады помочь вам в другой раз"
    isOpen={isOpen}
    onClose={onClose}
  >
    <div className={classes['popup__button-wrap']}>
      <Button variant="outlined" size="medium" type="button">
        Назад
      </Button>
      <Button
        variant="purple-filled"
        size="medium"
        type="submit"
      >
        Отменить бронирование
      </Button>
    </div>
  </PopupWithForm>
);

ServiceConfirmPopup.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.bool,
};

ServiceConfirmPopup.defaultProps = {
  isOpen: true,
  onClose: false,
};

export default ServiceConfirmPopup;
