import PropTypes from 'prop-types';
import { useState } from 'react';
import classes from './style.module.scss';
import { variantVeterinarians } from '../../assets/constants/constants';
import Dropdown from '../../ui/forms/dropdowns/Dropdown';
import AdSchedule from '../../components/AdSchedule';
import AdPrice from '../../components/AdCreation/AdPrice';
import Textarea from '../../ui/forms/inputs/Textarea/Textarea';
import Button from '../../ui/buttons/originButton/Button';
import ChecboksList from '../../components/ChecboksList';

const ServiceChanges = ({ variant }) => {
  const [info, setInfo] = useState('');

  console.log(info, setInfo);

  const arrayVeterinarians = [
    {
      id: 1,
      text: 'зооняня',
    },
    {
      id: 2,
      text: 'кинолог',
    },
    {
      id: 3,
      text: 'грумер',
    },
    {
      id: 4,
      text: 'ветеринар',
    },
  ];

  return (
    <section className={classes['service-changes']}>
      <h2
        className={classes['service-changes__title']}
      >{`Мои услуги - ${variantVeterinarians[variant]} - (редактирование)`}</h2>

      <div className={classes['service-changes__container']}>
        <h3 className={classes['service-changes__block-name']}>Поменять на</h3>
        <Dropdown width="500px" array={arrayVeterinarians} />
      </div>

      {variant === 'zoonyanya' && (
        <div className={classes['service-changes__container']}>
          <h3 className={classes['service-changes__block-name']}>
            С какими животными вы работаете?
          </h3>
          <ChecboksList />
        </div>
      )}

      {variant === 'cynologist' && (
        <>
          <div className={classes['service-changes__container']}>
            <h3 className={classes['service-changes__block-name']}>
              С какими задачами вы работаете?
            </h3>
          </div>
          <div className={classes['service-changes__container']}>
            <h3 className={classes['service-changes__block-name']}>
              Какой формат работы вы используете?
            </h3>
          </div>
        </>
      )}

      {variant === 'groomer' && (
        <>
          <div className={classes['service-changes__container']}>
            <h3 className={classes['service-changes__block-name']}>
              С какими задачами вы работаете?
            </h3>
          </div>
          <div className={classes['service-changes__container']}>
            <h3 className={classes['service-changes__block-name']}>
              Какой формат работы вы используете?
            </h3>
          </div>
        </>
      )}

      {variant === 'veterinarian' && (
        <>
          <div className={classes['service-changes__container']}>
            <h3 className={classes['service-changes__block-name']}>
              С какими задачами вы работаете?
            </h3>
          </div>
          <div className={classes['service-changes__container']}>
            <h3 className={classes['service-changes__block-name']}>
              Какой груминг вы можете делать?
            </h3>
          </div>
        </>
      )}

      <div className={classes['service-changes__container']}>
        <h3 className={classes['service-changes__block-name']}>
          Укажите ваши рабочие часы
        </h3>
        <AdSchedule serviceTime={false} />
      </div>

      <div className={classes['service-changes__container']}>
        <h3 className={classes['service-changes__block-name']}>
          Укажите стоимость услуг(и)
        </h3>
        <AdPrice
          title="1 день передержки"
          name="servis-name"
          getPrice={() => {}}
          value={{}}
        />
      </div>

      <div className={classes['service-changes__container']}>
        <h3 className={classes['service-changes__block-name']}>
          Расскажите о вашем опыте и деталях услуги
        </h3>
        <Textarea />
      </div>

      <Button type="button" size="small" variant="outlined" onClick={() => {}}>
        Сохранить данные
      </Button>
    </section>
  );
};

ServiceChanges.propTypes = {
  variant: PropTypes.oneOf([
    'zoonyanya',
    'cynologist',
    'groomer',
    'veterinarian',
  ]),
};

ServiceChanges.defaultProps = {
  variant: 'zoonyanya',
};

export default ServiceChanges;
