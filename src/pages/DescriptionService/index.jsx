// import PropTypes from 'prop-types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Textarea from '../../ui/forms/inputs/Textarea/Textarea';
import Button from '../../ui/buttons/originButton/Button';
import classes from './style.module.scss';
import { addService } from '../../app/store/addService/service-action';

const DescriptionService = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleButton = () => {
    navigate('/advert-final', { replace: true });
    dispatch(addService(value, 'descriptionServes'));
  };

  return (
    <section className={classes.description}>
      <h2 className={classes.description__title}>
        Расскажите о вашем опыте и деталях услуг(и)
      </h2>
      <Textarea value={value} setValue={setValue} setIsValid={setIsValid} />

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
        <Button
          size="medium"
          type="button"
          onClick={handleButton}
          active={isValid}
        >
          Далее
        </Button>
      </div>
    </section>
  );
};

DescriptionService.propTypes = {
  //  getDescription: PropTypes.func,
};

DescriptionService.defaultProps = {
  // getDescription: () => {},
};

export default DescriptionService;
