import PropTypes from 'prop-types';
import { useState } from 'react';
import classes from './style.module.scss';
import { variantVeterinarians } from '../../assets/constants/constants';
import Dropdown from '../../ui/forms/dropdowns/Dropdown';
import AdSchedule from '../AdSchedule';

const MeService = ({ variant }) => {
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
    <section className={classes['me-service']}>
      <h2
        className={classes['me-service__title']}
      >{`Мои услуги - ${variantVeterinarians[variant]} - (редактирование)`}</h2>

      <div className={classes['me-service__container']}>
        <h3 className={classes['me-service__block-name']}>Поменять на</h3>
        <Dropdown width="500px" array={arrayVeterinarians} />
      </div>

      <div className={classes['me-service__container']}>
        <h3 className={classes['me-service__block-name']}>
          С какими животными вы работаете?
        </h3>
      </div>

      <div className={classes['me-service__container']}>
        <h3 className={classes['me-service__block-name']}>
          Укажите ваши рабочие часы
        </h3>
        <AdSchedule serviceTime={false} />
      </div>
    </section>
  );
};

MeService.propTypes = {
  variant: PropTypes.oneOf([
    'zoonyanya',
    'cynologist',
    'groomer',
    'veterinarian',
  ]),
};

MeService.defaultProps = {
  variant: 'zoonyanya',
};

export default MeService;
