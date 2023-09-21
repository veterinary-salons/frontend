import PropTypes from 'prop-types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import cn from 'classnames';
import Button from '../../ui/buttons/originButton/Button';
import classes from './style.module.scss';
import validateInput from '../../assets/constants/validation';

const DescriptionService = ({ getDescription }) => {
  const navigate = useNavigate();
  const [value, setValue] = useState('');

  const handleButton = () => {
    navigate('/next', { replace: true });
    getDescription({ descriptionServes: value });
  };

  return (
    <section className={classes.description}>
      <h2 className={classes.description__title}>
        Расскажите о вашем опыте и деталях услуг(и)
      </h2>
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={cn(classes.description__textarea, {
          [classes.description__textarea_focus]: validateInput(
            'textarea',
            'name',
            value,
          ).textarea,
        })}
        maxLength={1000}
        name="description-textarea"
        id="textarea"
        placeholder="Напишите что-то о своём опыте, чтобы привлечь пользователей"
      />
      <p
        className={cn(classes.description__validation, {
          [classes.description__validation_success]: value.length === 1000,
        })}
      >{`Символов: ${value.length === undefined ? 0 : value.length}/1000`}</p>
      <div className={classes['description__conteiner-btn']}>
        <Button
          variant="outlined"
          size="medium"
          type="button"
          onClick={() => {
            navigate('/back', { replace: true });
          }}
        >
          Назад
        </Button>
        <Button size="medium" type="button" onClick={handleButton}>
          Далее
        </Button>
      </div>
    </section>
  );
};

DescriptionService.propTypes = {
  getDescription: PropTypes.func,
};

DescriptionService.defaultProps = {
  getDescription: () => {},
};

export default DescriptionService;
