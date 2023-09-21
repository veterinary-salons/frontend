import PropTypes from 'prop-types';
import classes from '../PopupWithForm/style.module.scss';
import PopupWithForm from '../PopupWithForm';
import styles from './style.module.scss';

const EditAvatarPopup = ({ isOpen, onClose, handleFile }) => (
  <PopupWithForm
    title="Загрузка новой фотографии"
    isOpen={isOpen}
    onClose={onClose}
  >
    <p className={classes.popup__placeholder}>
      Вы&nbsp;можете загрузить изображение в&nbsp;формате JPG, GIF, PNG
    </p>
    <div className={classes['popup__button-wrap']}>
      <label className={styles.lable}>
        <input
          id="input-image"
          type="file"
          className={styles.input}
          accept=".png,.jpg,.jpeg,.gif"
          onInput={handleFile}
        />
        Выбрать файл
      </label>
    </div>
  </PopupWithForm>
);

EditAvatarPopup.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  handleFile: PropTypes.func,
};

EditAvatarPopup.defaultProps = {
  isOpen: true,
  onClose: null,
  handleFile: null,
};

export default EditAvatarPopup;
