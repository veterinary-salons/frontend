import PropTypes from 'prop-types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Textarea from '../../ui/forms/inputs/Textarea/Textarea';
import Button from '../../ui/buttons/originButton/Button';
import classes from './style.module.scss';

const DescriptionService = ({ getDescription }) => {
  const navigate = useNavigate();
  const [value, setValue] = useState('');

  const handleButton = () => {
    navigate('/advert-final', { replace: true });
    getDescription({ descriptionServes: value });
  };

  return (
    <section className={classes.description}>
      <h2 className={classes.description__title}>
        Расскажите о вашем опыте и деталях услуг(и)
      </h2>
      <Textarea value={value} setValue={setValue} />

      <div className={classes['description__conteiner-btn']}>
        <Button
          variant="outlined"
          size="medium"
          type="button"
          onClick={() => {
            navigate('/advert-price', { replace: true });
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
