import PropTypes from 'prop-types';
import classes from '../PopupWithForm/style.module.scss';
import PopupWithForm from '../PopupWithForm';
import Button from '../../ui/buttons/originButton/Button';

const QuitInfotooltipPopup = ({ isOpen, onClose, onApprov }) => (
  <PopupWithForm title="Вы вышли из аккаунта" isOpen={isOpen} onClose={onClose}>
    <div className={classes['popup__button-wrap']}>
      <Button
        onClick={onApprov}
        variant="purple-filled"
        size="medium"
        type="submit"
      >
        Понятно
      </Button>
    </div>
  </PopupWithForm>
);

QuitInfotooltipPopup.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onApprov: PropTypes.func,
};

QuitInfotooltipPopup.defaultProps = {
  isOpen: true,
  onClose: null,
  onApprov: null,
};

export default QuitInfotooltipPopup;
