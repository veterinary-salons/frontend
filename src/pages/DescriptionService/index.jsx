import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import cn from 'classnames';
import Button from '../../ui/buttons/originButton/Button';
import classes from './style.module.scss';

const DescriptionService = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue();
  }, [value]);

  return (
    <section className={classes.description}>
      <h2 className={classes.description__title}>
        Расскажите о вашем опыте и деталях услуг(и)
      </h2>
      <textarea
        className={classes.description__textarea}
        maxLength={1000}
        name="description-textarea"
        id="textarea"
        placeholder="Напишите что-то о своём опыте, чтобы привлечь пользователей"
      />
      <p
        className={cn(classes.description__validation, {
          [classes.description__validation_success]: true,
        })}
      >{`Символов: ${0}/1000`}</p>
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
        <Button
          size="medium"
          type="button"
          onClick={() => {
            navigate('/next', { replace: true });
          }}
        >
          Далее
        </Button>
      </div>
    </section>
  );
};

export default DescriptionService;
