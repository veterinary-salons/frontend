import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import classes from '../../../components/ServicesCategoryCard/style.module.scss';
import imgGroomer from '../../../assets/images/images/category-specialist-card/groomers.svg';

const SpecialistCardMainPage = ({ link, color, title, img, disable, isServicesPage, }) => {
  const getCardBackground = classnames(
    classes[`card__background_${color}`],
    classes.card__background,
    { [classes.card__background_services]: isServicesPage },
  );

  const containerCN = classnames(classes.card__container, {
    [classes.card__container_disabled]: disable,
  });

  const header = classnames(classes.card__header, {
    [classes.card__header_services]: isServicesPage,
  });

  return (
    <li className={classes.card}>
      <Link to={link} className={containerCN}>
        <div className={getCardBackground}>
          <img className={classes.card__img} alt={title} src={img} />
        </div>
        <h3 className={header}>{title}</h3>
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
  isServicesPage: PropTypes.bool,
};

SpecialistCardMainPage.defaultProps = {
  link: '/',
  color: 'blue',
  title: 'Грумеры',
  img: imgGroomer,
  disable: false,
  isServicesPage: false,
};

export default SpecialistCardMainPage;
