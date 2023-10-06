import PropTypes from 'prop-types';
import { useState } from 'react';
import classes from './style.module.scss';
import { variantVeterinarians } from '../../assets/constants/constants';
import Dropdown from '../../ui/forms/dropdowns/Dropdown';
import AdSchedule from '../../components/AdSchedule';

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
      text: 'ветеринар',
    },
    {
      id: 4,
      text: 'Ветеринар',
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

      <div className={classes['service-changes__container']}>
        <h3 className={classes['service-changes__block-name']}>
          С какими животными вы работаете?
        </h3>
      </div>

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
      </div>
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
