import PropTypes from 'prop-types';
import cn from 'classnames';
import classes from './style.module.scss';

const CardPrice = ({ text, from, before }) => (
  <article className={classes.card}>
    <p className={classes.card__text}>{text}</p>
    <p
      className={cn(classes.card__text, classes['card__position-right'])}
    >{`от ${from} до ${before} ₽/усл.`}</p>
  </article>
);

CardPrice.propTypes = {
  text: PropTypes.string,
  from: PropTypes.string,
  before: PropTypes.string,
};

CardPrice.defaultProps = {
  text: '1 день передержки',
  from: '1000',
  before: '10 000',
};

export default CardPrice;
