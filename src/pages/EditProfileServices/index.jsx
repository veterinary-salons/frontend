import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './style.module.scss';
import {
  dateServiceCheckboxList,
  vaterinars,
} from '../../assets/constants/constants';
import Dropdown from '../../ui/forms/dropdowns/Dropdown';
import AdSchedule from '../../components/AdSchedule';
import AdPrice from '../../components/AdCreation/AdPrice';
import Textarea from '../../ui/forms/inputs/Textarea/Textarea';
import Button from '../../ui/buttons/originButton/Button';
import ChecboxList from '../../components/ChecboksList';
import imgServise from '../../assets/images/icon/avatar/imgEditing.svg';
import ImageUploadPopup from '../../components/ImageUploadPopup';

const EditProfileServices = ({ variant }) => {
  const navigate = useNavigate();
  const [veterinars, setVeterinars] = useState(variant);
  const [dataDropdown, setDataDropdown] = useState({});
  const [dataAnimals, setDataAnimals] = useState({});
  const [dataService, setDataService] = useState({});
  const [dataScheduleDay, setDataScheduleDay] = useState({});
  const [dataPrice, setDataPrice] = useState({});
  const [dataTextarea, setDataTextarea] = useState('');
  const [image, setImage] = useState('');
  const [isAction, setIsAction] = useState(false);

  const local = JSON.parse(localStorage.getItem('veterinarian'));

  const versionData = {
    зооняня: dataService,
  };

  const actionBtn = () => {
    const action =
      local.petType &&
      local.serviceType &&
      local.workingHours &&
      local.price &&
      local.description &&
      true;

    return action !== '';
  };

  const version = (name) => versionData[name];

  localStorage.setItem(
    'veterinarian',
    JSON.stringify({
      ...local,
      category: vaterinars[dataDropdown.veterinarian],
      petType: version(local?.category) || dataAnimals,
      serviceType: dataService,
      workingHours: dataScheduleDay,
      price: Object.values(dataPrice),
      description: dataTextarea,
    }),
  );

  const handleButton = () => {
    navigate('/profile', { replace: true });
  };

  const handleBtn = () => {
    setIsAction((state) => !state);
  };

  useEffect(() => {
    setVeterinars(dataDropdown);
  }, [dataDropdown]);

  return (
    <section className={classes['service-changes']}>
      <h2
        className={classes['service-changes__title']}
      >{`Мои услуги - ${local.category} - (редактирование)`}</h2>

      <div className={classes['service-changes__container-img']}>
        <img
          className={classes['service-changes__image']}
          src={image.src || imgServise}
          alt="фото"
        />
        <Button
          size="small"
          type="button"
          variant="outlined"
          onClick={handleBtn}
        >
          Добавить фото
        </Button>
      </div>

      <div className={classes['service-changes__box']}>
        <div className={classes['service-changes__container']}>
          <h3 className={classes['service-changes__block-name']}>
            Поменять на
          </h3>
          <Dropdown
            getValue={setDataDropdown}
            width="500px"
            name="veterinarian"
            array={dateServiceCheckboxList.specialisation}
          />
        </div>

        {veterinars.veterinarian === 'зооняня' && (
          <div className={classes['service-changes__container']}>
            <h3 className={classes['service-changes__block-name']}>
              С какими животными вы работаете?
            </h3>
            <ChecboxList
              array={dateServiceCheckboxList.arrAnimalsZoonyanya}
              getInfo={setDataService}
            />
          </div>
        )}

        {veterinars.veterinarian === 'кинолог' && (
          <>
            <div className={classes['service-changes__container']}>
              <h3 className={classes['service-changes__block-name']}>
                С какими задачами вы работаете?
              </h3>
              <ChecboxList
                array={dateServiceCheckboxList.arrServiceList}
                getInfo={setDataAnimals}
              />
            </div>
            <div className={classes['service-changes__container']}>
              <h3 className={classes['service-changes__block-name']}>
                Какой формат работы вы используете?
              </h3>
              <ChecboxList
                array={dateServiceCheckboxList.arrServiceFormat}
                getInfo={setDataService}
              />
            </div>
          </>
        )}

        {veterinars.veterinarian === 'грумер' && (
          <>
            <div className={classes['service-changes__container']}>
              <h3 className={classes['service-changes__block-name']}>
                С какими задачами вы работаете?
              </h3>
              <ChecboxList
                array={dateServiceCheckboxList.arrAnimalsGroomer}
                getInfo={setDataAnimals}
              />
            </div>
            <div className={classes['service-changes__container']}>
              <h3 className={classes['service-changes__block-name']}>
                Какой формат работы вы используете?
              </h3>
              <ChecboxList
                array={dateServiceCheckboxList.arrServiceGroomer}
                getInfo={setDataService}
                inputActive={false}
              />
            </div>
          </>
        )}

        {veterinars.veterinarian === 'ветеринар' && (
          <>
            <div className={classes['service-changes__container']}>
              <h3 className={classes['service-changes__block-name']}>
                С какими задачами вы работаете?
              </h3>
              <ChecboxList
                array={dateServiceCheckboxList.arrAnimalsVeterinarian}
                getInfo={setDataAnimals}
              />
            </div>
            <div className={classes['service-changes__container']}>
              <h3 className={classes['service-changes__block-name']}>
                Какой груминг вы можете делать?
              </h3>
              <ChecboxList
                array={dateServiceCheckboxList.arrServiceVeterinarian}
                getInfo={setDataService}
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

        {local.serviceType.length > 0 && (
          <div className={classes['service-changes__container']}>
            <h3 className={classes['service-changes__block-name']}>
              Укажите стоимость услуг(и)
            </h3>
            <div className={classes['service-changes__container-price']}>
              {local.serviceType.map((i) =>
                i !== null ? (
                  <AdPrice
                    title={i}
                    name={i}
                    key={i}
                    getPrice={setDataPrice}
                    value={dataPrice}
                  />
                ) : (
                  ''
                ),
              )}
            </div>
          </div>
        )}

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
          active={actionBtn()}
        >
          Сохранить данные
        </Button>
      </div>

      <ImageUploadPopup
        isOpen={isAction}
        getImage={setImage}
        onClose={handleBtn}
      />
    </section>
  );
};

EditProfileServices.propTypes = {
  variant: PropTypes.oneOf(['зооняня', 'кинолог', 'грумер', 'ветеринар']),
};

EditProfileServices.defaultProps = {
  variant: 'ветеринар',
};

export default EditProfileServices;
