import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import classes from './SpecialistCard.module.scss';
import imgGroomer from '../../../assets/images/icon/specialists/groomers.svg';

const SpecialistCard = ({ link, color, title, img, disable }) => {
  const getCardBackground = classnames(
    classes[`card__background_${color}`],
    classes.card__background,
    {
      [classes[`card__background_${color}_disabled`]]: disable,
    },
  );

  return (
    <li className={classes.card}>
      <Link to={link} className={classes.card__container}>
        <div className={getCardBackground}>
          <img className={classes.card__img} alt={title} src={img} />
        </div>
        <h3 className={classes.card__header}>{title}</h3>
      </Link>
    </li>
  );
};

SpecialistCard.propTypes = {
  link: PropTypes.string,
  color: PropTypes.string,
  title: PropTypes.string,
  img: PropTypes.string,
  disable: PropTypes.bool,
};

SpecialistCard.defaultProps = {
  link: '/',
  color: 'blue',
  title: 'Грумеры',
  img: imgGroomer,
  disable: false,
};

export default SpecialistCard;
