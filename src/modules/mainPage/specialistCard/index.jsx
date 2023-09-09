import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import classes from './style.module.scss';
import imgGroomer from '../../../assets/images/icon/specialists/groomers.svg';

const SpecialistCardMainPage = ({ link, color, title, img, disable }) => {
  const getCardBackground = classnames(
    classes[`card__background_${color}`],
    classes.card__background,
  );

  const containerCN = classnames(classes.card__container, {
    [classes.card__container_disabled]: disable,
  });

  return (
    <li className={classes.card}>
      <Link to={link} className={containerCN}>
        <div className={getCardBackground}>
          <img className={classes.card__img} alt={title} src={img} />
        </div>
        <h3 className={classes.card__header}>{title}</h3>
      </Link>
    </li>
  );
};

SpecialistCardMainPage.propTypes = {
  link: PropTypes.string,
  color: PropTypes.oneOf(['blue', 'yellow', 'green', 'violet']),
  title: PropTypes.string,
  img: PropTypes.string,
  disable: PropTypes.bool,
};

SpecialistCardMainPage.defaultProps = {
  link: '/',
  color: 'blue',
  title: 'Грумеры',
  img: imgGroomer,
  disable: false,
};

export default SpecialistCardMainPage;
