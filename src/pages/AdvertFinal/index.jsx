import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import classes from './style.module.scss';
import imgAvatar from '../../assets/images/icon/avatar/avatar-advert-final.svg';
import ListPrices from '../../components/Listprices';
import {
  dataListPrices,
  dataFinalSchedule,
} from '../../assets/constants/dataListPrices';
import OpenHours from '../../components/OpenHours';
import Button from '../../ui/buttons/originButton/Button';

const AdvertFinal = ({ img, session }) => {
  const navigate = useNavigate();

  return (
    <section className={classes.final}>
      <div className={classes['final__container-description']}>
        <div className={classes['final__container-text']}>
          <h2 className={classes.final__title}>Предпросмотр объявления</h2>
          <h4 className={classes.final__name}>Зооняня Петров Иван</h4>
          <p className={classes.final__description}>
            Работает с черепахами, всеми видами грызунов
          </p>
          <p className={classes.final__description}>
            Привет, друзья! Меня зовут Иван и я - профессионально сижу с вашими
            питомцами.
          </p>
        </div>
        <img className={classes.final__img} alt="фото" src={img || imgAvatar} />
      </div>
      <ListPrices array={dataListPrices} />
      <OpenHours array={dataFinalSchedule} />
      <p
        className={classes.final__description}
      >{`Длительность одной услуги —  ${session}`}</p>
      <div className={classes['final__container-btn']}>
        <Button
          variant="outlined"
          size="medium"
          type="button"
          onClick={() => {
            navigate('/advert-description', { replace: true });
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
  img: PropTypes.string,
  session: PropTypes.string,
};

AdvertFinal.defaultProps = {
  img: '',
  session: '30 минут',
};

export default AdvertFinal;
