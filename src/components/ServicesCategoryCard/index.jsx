// TODO: объединить с товарами и сделать одним общий компонентом.
// карточка специалиста на главной страницы услуг

import { Link } from 'react-router-dom';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import classes from './style.module.scss';
import feedImg from '../../assets/images/images/goods-cathegories-catalog/feed-goodies.svg';

const ServicesCategoryCard = ({
  link,
  title,
  img,
  disable,
  color,
  isServicesPage,
}) => {
  const getCardBackground = classnames(
    classes[`card__background_${color}`],
    classes.card__background,
    { [classes.card__background_services]: isServicesPage },
  );

  const containerCN = classnames(classes.card__container, {
    [classes.card__container_disabled]: disable,
  });

  const card = classnames(classes.card, {
    [classes.card_services]: isServicesPage,
  });

  const header = classnames(classes.card__header, {
    [classes.card__header_services]: isServicesPage,
  });

  return (
    <li className={card}>
      <Link to={link} className={containerCN}>
        <div className={getCardBackground}>
          <img className={classes.card__img} alt={title} src={img} />
        </div>
        <h3 className={header}>{title}</h3>
      </Link>
    </li>
  );

  // <li className={classes.card}>
  //   <Link to={link} className={classes.card__container}>
  //     <img className={classes.card__img} alt={title} src={img} />
  //     <h4 className={classes.card__title}>{title}</h4>
  //   </Link>
  // </li>
};

ServicesCategoryCard.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string,
  disable: PropTypes.bool,
  isServicesPage: PropTypes.bool,
  color: PropTypes.oneOf(['blue', 'yellow', 'green', 'violet']),
  img: PropTypes.string,
};

ServicesCategoryCard.defaultProps = {
  link: '/groomers',
  title: 'Грумеры',
  color: 'blue',
  disable: false,
  img: feedImg,
  isServicesPage: false,
};

export default ServicesCategoryCard;
