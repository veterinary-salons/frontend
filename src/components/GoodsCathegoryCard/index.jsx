import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import classes from './style.module.scss';

const GoodsCathegoryCard = ({ link, title, img }) => (
  <li className={classes.card}>
    <Link to={link} className={classes.card__container}>
      <div
        className={classnames(
          classes.card__img,
          classes[`card__img-${img}`]
      )}/>
      <h3 className={classes.card__title}>{title}</h3>
    </Link>
  </li>
);

GoodsCathegoryCard.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string,
  img: PropTypes.string
};

GoodsCathegoryCard.defaultProps = {
  link: '/',
  title: 'Корм и лакомства',
  img: 'feed-goodies'
};

export default GoodsCathegoryCard;