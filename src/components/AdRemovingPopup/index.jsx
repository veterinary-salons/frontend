import PropTypes from 'prop-types';
import classes from '../PopupWithForm/style.module.scss';
import PopupWithForm from '../PopupWithForm';
import Button from '../../ui/buttons/originButton/Button';

const AdRemovingPopup = ({ isOpen, onClose }) => (
  <PopupWithForm
    title="Вы уверены, что хотите снять объявление с публикации?"
    isOpen={isOpen}
    onClose={onClose}
  >
    <div className={classes['popup__button-wrap']}>
      <Button variant="outlined" size="medium" type="button">
        Назад
      </Button>
      <Button variant="purple-filled" size="medium" type="submit">
        Снять с публикации
      </Button>
    </div>
  </PopupWithForm>
);

AdRemovingPopup.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.bool,
};

AdRemovingPopup.defaultProps = {
  isOpen: true,
  onClose: false,
};

export default AdRemovingPopup;
