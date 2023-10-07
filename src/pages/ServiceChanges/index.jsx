import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import classes from './style.module.scss';
import {
  variantVeterinarians,
  dateSevriceVeterinarians,
} from '../../assets/constants/constants';
import Dropdown from '../../ui/forms/dropdowns/Dropdown';
import AdSchedule from '../../components/AdSchedule';
import AdPrice from '../../components/AdCreation/AdPrice';
import Textarea from '../../ui/forms/inputs/Textarea/Textarea';
import Button from '../../ui/buttons/originButton/Button';
import ChecboxList from '../../components/ChecboksList';

const ServiceChanges = ({ variant }) => {
  const [dateDropdown, setDateoDropdown] = useState({});
  const [dateChecboxList, setDateChecboxListn] = useState({});
  const [dateScheduleDay, setDateScheduleDay] = useState({});
  const [datePrice, setDatePrice] = useState({});
  const [dateTextarea, setDataTextarea] = useState('');
  const [dates, setDates] = useState({});

  useEffect(() => {
    setDates({
      veterinarians: dateDropdown,
      animals: dateChecboxList === undefined ? null : dateChecboxList,
      schedule: dateScheduleDay,
      price: datePrice,
      textarea: dateTextarea,
    });
    // eslint-disable-next-line
  }, [dateDropdown, dateChecboxList, dateScheduleDay, dateTextarea]);

  console.log(dates);

  return (
    <section className={classes['service-changes']}>
      <h2
        className={classes['service-changes__title']}
      >{`Мои услуги - ${variantVeterinarians[variant]} - (редактирование)`}</h2>

      <div className={classes['service-changes__container']}>
        <h3 className={classes['service-changes__block-name']}>Поменять на</h3>
        <Dropdown
          getValue={setDateoDropdown}
          width="500px"
          name="veterinarian"
          array={dateSevriceVeterinarians.variantVeterinarians}
        />
      </div>

      {variant === 'zoonyanya' && (
        <div className={classes['service-changes__container']}>
          <h3 className={classes['service-changes__block-name']}>
            С какими животными вы работаете?
          </h3>
          <ChecboxList
            array={dateSevriceVeterinarians.arrAnimalsZoonyanya}
            getInfo={setDateChecboxListn}
          />
        </div>
      )}

      {variant === 'cynologist' && (
        <>
          <div className={classes['service-changes__container']}>
            <h3 className={classes['service-changes__block-name']}>
              С какими задачами вы работаете?
            </h3>
            <ChecboxList
              array={dateSevriceVeterinarians.arrServiceList}
              getInfo={setDateChecboxListn}
            />
          </div>
          <div className={classes['service-changes__container']}>
            <h3 className={classes['service-changes__block-name']}>
              Какой формат работы вы используете?
            </h3>
            <ChecboxList
              array={dateSevriceVeterinarians.arrServiceFormat}
              getInfo={setDateChecboxListn}
            />
          </div>
        </>
      )}

      {variant === 'groomer' && (
        <>
          <div className={classes['service-changes__container']}>
            <h3 className={classes['service-changes__block-name']}>
              С какими задачами вы работаете?
            </h3>
            <ChecboxList
              array={dateSevriceVeterinarians.arrAnimalsGroomer}
              getInfo={setDateChecboxListn}
            />
          </div>
          <div className={classes['service-changes__container']}>
            <h3 className={classes['service-changes__block-name']}>
              Какой формат работы вы используете?
            </h3>
            <ChecboxList
              array={dateSevriceVeterinarians.arrServiceGroomer}
              getInfo={setDateChecboxListn}
              inputActive={false}
            />
          </div>
        </>
      )}

      {variant === 'veterinarian' && (
        <>
          <div className={classes['service-changes__container']}>
            <h3 className={classes['service-changes__block-name']}>
              С какими задачами вы работаете?
            </h3>
            <ChecboxList
              array={dateSevriceVeterinarians.arrAnimalsVeterinarian}
              getInfo={setDateChecboxListn}
            />
          </div>
          <div className={classes['service-changes__container']}>
            <h3 className={classes['service-changes__block-name']}>
              Какой груминг вы можете делать?
            </h3>
            <ChecboxList
              array={dateSevriceVeterinarians.arrServiceVeterinarian}
              getInfo={setDateChecboxListn}
            />
          </div>
        </>
      )}

      <div className={classes['service-changes__container']}>
        <h3 className={classes['service-changes__block-name']}>
          Укажите ваши рабочие часы
        </h3>
        <AdSchedule
          serviceTime={false}
          setDays={setDateScheduleDay}
          days={dateScheduleDay}
        />
      </div>

      <div className={classes['service-changes__container']}>
        <h3 className={classes['service-changes__block-name']}>
          Укажите стоимость услуг(и)
        </h3>
        <AdPrice
          title="1 день передержки"
          name="price"
          getPrice={setDatePrice}
          value={datePrice}
        />
      </div>

      <div className={classes['service-changes__container']}>
        <h3 className={classes['service-changes__block-name']}>
          Расскажите о вашем опыте и деталях услуги
        </h3>
        <Textarea value={dateTextarea} setValue={setDataTextarea} />
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
