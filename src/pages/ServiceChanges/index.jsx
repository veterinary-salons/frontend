import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './style.module.scss';
import {
  variantVeterinarians,
  dataServiceChecboksList,
} from '../../assets/constants/constants';
import Dropdown from '../../ui/forms/dropdowns/Dropdown';
import AdSchedule from '../../components/AdSchedule';
import AdPrice from '../../components/AdCreation/AdPrice';
import Textarea from '../../ui/forms/inputs/Textarea/Textarea';
import Button from '../../ui/buttons/originButton/Button';
import ChecboxList from '../../components/ChecboksList';

const ServiceChanges = ({ variant }) => {
  const navigate = useNavigate();
  const [dataDropdown, setDataDropdown] = useState({});
  const [dataAnimals, setDataAnimals] = useState({});
  const [dataTasks, setDataTasks] = useState({});
  const [dataFormatWork, setDataFormatWork] = useState({});
  const [dataScheduleDay, setDataScheduleDay] = useState({});
  const [dataGrooming, setDataGrooming] = useState({});
  const [dataPrice, setDataPrice] = useState({});
  const [dataTextarea, setDataTextarea] = useState('');
  const [datas, setDatas] = useState({});

  const handleButton = () => {
    navigate('/next', { replace: true });
  };

  const version = (name) => {
    switch (name) {
      case 'zoonyanya': {
        return dataTasks;
      }

      case 'cynologist': {
        return dataFormatWork;
      }

      case 'groomer': {
        return dataGrooming;
      }

      case 'veterinarian': {
        return dataTasks;
      }

      default: {
        return '';
      }
    }
  };

  useEffect(() => {
    setDatas({
      specialistType: dataDropdown.veterinarian,
      petType: dataAnimals,
      serviceType: dataTasks,
      servList: version(variant),
      schedule: dataScheduleDay,
      price: dataPrice.price,
      description: dataTextarea,
    });
    // eslint-disable-next-line
  }, [
    dataDropdown,
    dataAnimals,
    dataScheduleDay,
    dataTextarea,
    dataFormatWork,
    dataGrooming,
    dataPrice,
    dataTasks,
  ]);

  console.log(datas);

  return (
    <section className={classes['service-changes']}>
      <h2
        className={classes['service-changes__title']}
      >{`Мои услуги - ${variantVeterinarians[variant]} - (редактирование)`}</h2>

      <div className={classes['service-changes__box']}>
        <div className={classes['service-changes__container']}>
          <h3 className={classes['service-changes__block-name']}>
            Поменять на
          </h3>
          <Dropdown
            getValue={setDataDropdown}
            width="500px"
            name="veterinarian"
            array={dataServiceChecboksList.variantVeterinarians}
          />
        </div>

        {variant === 'zoonyanya' && (
          <div className={classes['service-changes__container']}>
            <h3 className={classes['service-changes__block-name']}>
              С какими животными вы работаете?
            </h3>
            <ChecboxList
              array={dataServiceChecboksList.arrAnimalsZoonyanya}
              getInfo={setDataAnimals}
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
                array={dataServiceChecboksList.arrServiceList}
                getInfo={setDataTasks}
              />
            </div>
            <div className={classes['service-changes__container']}>
              <h3 className={classes['service-changes__block-name']}>
                Какой формат работы вы используете?
              </h3>
              <ChecboxList
                array={dataServiceChecboksList.arrServiceFormat}
                getInfo={setDataFormatWork}
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
                array={dataServiceChecboksList.arrAnimalsGroomer}
                getInfo={setDataAnimals}
              />
            </div>
            <div className={classes['service-changes__container']}>
              <h3 className={classes['service-changes__block-name']}>
                Какой формат работы вы используете?
              </h3>
              <ChecboxList
                array={dataServiceChecboksList.arrServiceGroomer}
                getInfo={setDataGrooming}
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
                array={dataServiceChecboksList.arrAnimalsVeterinarian}
                getInfo={setDataAnimals}
              />
            </div>
            <div className={classes['service-changes__container']}>
              <h3 className={classes['service-changes__block-name']}>
                Какой груминг вы можете делать?
              </h3>
              <ChecboxList
                array={dataServiceChecboksList.arrServiceVeterinarian}
                getInfo={setDataTasks}
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
            setDays={setDataScheduleDay}
            days={dataScheduleDay}
          />
        </div>

        <div className={classes['service-changes__container']}>
          <h3 className={classes['service-changes__block-name']}>
            Укажите стоимость услуг(и)
          </h3>
          <AdPrice
            title="1 день передержки"
            name="price"
            getPrice={setDataPrice}
            value={dataPrice}
          />
        </div>

        <div className={classes['service-changes__container']}>
          <h3 className={classes['service-changes__block-name']}>
            Расскажите о вашем опыте и деталях услуги
          </h3>
          <Textarea
            value={dataTextarea}
            setValue={setDataTextarea}
            height="305px"
          />
        </div>

        <Button
          type="button"
          size="medium"
          variant="outlined"
          onClick={handleButton}
        >
          Сохранить данные
        </Button>
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
  variant: 'veterinarian',
};

export default ServiceChanges;
