import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import classes from './style.module.scss';
import imgAvatar from '../../assets/images/icon/avatar/avatar-advert-final.svg';
import ListPrices from '../../components/ListPricesss';
import { specialisation } from '../../assets/constants/constants';
import Button from '../../ui/buttons/originButton/Button';
import ContainerOpenHours from '../../components/ContainerOpenHours';

const AdvertFinal = ({ session, sessionInfo, name }) => {
  const navigate = useNavigate();
  const img = useSelector((state) => state.getImageService);
  const local = JSON.parse(localStorage.getItem('veterinarian'));

  return (
    <section className={classes.final}>
      <div className={classes['final__container-description']}>
        <div className={classes['final__container-text']}>
          <h2 className={classes.final__title}>
            {session ? 'Ваше объявление' : 'Предпросмотр объявления'}
          </h2>
          <h4 className={classes.final__name}>{`${
            specialisation[local.category]
          } ${name}`}</h4>
          <div className={classes.final__info}>
            <p className={classes.final__text}>{local.adTitle}</p>
            <p className={classes.final__text}>{local.description}</p>
          </div>
        </div>
        <img
          className={classes.final__img}
          alt="фото"
          src={img || local.image || imgAvatar}
        />
      </div>
      <ListPrices array={local.price} />
      <ContainerOpenHours object={local.workingHours.days} />
      {session && (
        <p
          className={classes.final__text}
        >{`Длительность одной услуги - ${sessionInfo}`}</p>
      )}
      <div className={classes['final__container-btn']}>
        <Button
          variant="outlined"
          size="medium"
          type="button"
          onClick={() => {
            navigate('/advert-image', { replace: true });
          }}
        >
          Назад
        </Button>
        <Button
          size="medium"
          type="button"
          onClick={() => {
            navigate('/advert-success', { replace: true });
          }}
        >
          Опубликовать объявление
        </Button>
      </div>
    </section>
  );
};

AdvertFinal.propTypes = {
  session: PropTypes.bool,
  sessionInfo: PropTypes.string,
  name: PropTypes.string,
  // specialistInformation: PropTypes.string,
  // descriptionSpecialist: PropTypes.string,
};

AdvertFinal.defaultProps = {
  session: false,
  sessionInfo: '30 минут',
  // specialization: 'Зооняня',
  name: 'Петров Иван',
  // specialistInformation: 'Работает с черепахами, всеми видами грызунов',
  // descriptionSpecialist:
  //    'Привет, друзья! Меня зовут Иван и я - профессионально сижу с вашими питомцами.',
};

export default AdvertFinal;
