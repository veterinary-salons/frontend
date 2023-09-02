import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import style from './SpecialistCard.module.scss';
import imgGroomer from '../../../assets/images/icon/specialists/groomers.svg';

const SpecialistCard = ({ color, title, img }) => (
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

SpecialistCard.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
  img: PropTypes.string,
};

SpecialistCard.defaultProps = {
  color: 'blue',
  title: 'Грумеры',
  img: imgGroomer,
};

export default SpecialistCard;
