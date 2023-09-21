import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classes from './style.module.scss';
import feedImg from '../../assets/images/images/goods-cathegories-catalog/feed-goodies.svg';

const GoodsCategoryCard = ({ link, title, img }) => (
  <li className={classes.card}>
    <Link to={link} className={classes.card__container}>
      <img className={classes.card__img} alt={title} src={img} />
      <h4 className={classes.card__title}>{title}</h4>
    </Link>
  </li>
);

GoodsCategoryCard.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string,
  img: PropTypes.string
};

GoodsCategoryCard.defaultProps = {
  link: '/',
  title: 'Корм и лакомства',
  img: feedImg
};

export default GoodsCategoryCard;