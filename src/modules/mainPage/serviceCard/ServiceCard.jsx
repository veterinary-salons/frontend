import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import style from './ServiceCard.module.scss';
import toysImg from '../../../assets/images/images/services-card/toys.png'


const ServiceCard = ({ color, title, img }) => (
  <li className={style.card}>
    <Link to='/' className={style.card__container}>
        <div className={`${style[`card__background_${color}`]} ${style.card__background}`}>
        <img
          className={style.card__img}
          alt={title}
          src={img}
        />
        <h3 className={style.card__header}>{title}</h3>
      </div>
    </Link>
  </li>
)

ServiceCard.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
  img: PropTypes.string,
};

ServiceCard.defaultProps = {
  color: 'blue',
  title: 'Игрушки',
  img: toysImg,
};

export default ServiceCard;
