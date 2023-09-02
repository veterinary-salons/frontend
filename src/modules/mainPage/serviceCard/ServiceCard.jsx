import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import classes from './ServiceCard.module.scss';
import toysImg from '../../../assets/images/images/services-card/toys.png';

const ServiceCard = ({ link, color, title, img, disable }) => {
  const getCardServiceBackground = classnames(
    classes[`card__service-background_${color}`],
    classes['card__service-background'],
    {
      [classes[`card__service-background_${color}_disabled`]]: disable,
    },
  );

  return (
    <li className={classes.card}>
      <Link to={link} className={classes.card__container}>
        <div className={getCardServiceBackground}>
          <img className={classes.card__img} alt={title} src={img} />
        </div>
        <h3 className={classes.card__header}>{title}</h3>
      </Link>
    </li>
  );
};

ServiceCard.propTypes = {
  link: PropTypes.string,
  color: PropTypes.string,
  title: PropTypes.string,
  img: PropTypes.string,
  disable: PropTypes.bool,
};

ServiceCard.defaultProps = {
  link: '/',
  color: 'blue',
  title: 'Игрушки',
  img: toysImg,
  disable: true,
};

export default ServiceCard;
