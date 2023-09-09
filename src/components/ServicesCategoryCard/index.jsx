// TODO: объединить с товарами и сделать одним общий компонентом.

import { Link } from 'react-router-dom';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import classes from './style.module.scss';
import feedImg from '../../assets/images/images/goods-cathegories-catalog/feed-goodies.svg';

const ServicesCategoryCard = ({ link, title, img, disable, color }) => {
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
  color: PropTypes.oneOf(['blue', 'yellow', 'green', 'violet']),
  img: PropTypes.string
};

ServicesCategoryCard.defaultProps = {
  link: '/groomers',
  title: 'Грумеры',
  color: 'blue',
  disable: false,
  img: feedImg
};

export default ServicesCategoryCard;