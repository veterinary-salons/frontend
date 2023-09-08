import PropTypes from 'prop-types';
import classes from '../PopupWithForm/style.module.scss';
import PopupWithForm from '../PopupWithForm';
import Button from '../../ui/buttons/originButton/Button';

const LogoutConfirmationPopup = ({ isOpen, onClose }) => {
  const handleClosePopup = () => {
    onClose();
    console.log(isOpen);
  };

  const handleClosePopupSubmit = () => {
    onClose();
    // TODO: добавить выход из профиля
  };

  <PopupWithForm
    title="Вы уверены что хотите выйти из аккаунта?"
    isOpen={isOpen}
    onClose={handleClosePopup}
  >
    <div className={classes['popup__button-wrap']}>
      <Button
        variant="outlined"
        size="medium"
        type="submit"
        onClick={handleClosePopupSubmit}
      >
       Да
      </Button>
      <Button
        variant="purple-filled"
        size="medium"
        type="reset"
        onClick={handleClosePopup}
      >
        Нет
      </Button>
    </div>
  </PopupWithForm>
};

LogoutConfirmationPopup.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

LogoutConfirmationPopup.defaultProps = {
  isOpen: true,
  onClose: () => {},
};

export default LogoutConfirmationPopup;
