import PropTypes from 'prop-types';
import cn from 'classnames';
import classes from './style.module.scss';
import CardPrice from '../CardPrice';

const ListPrices = ({ array }) => (
  <div className={classes.list}>
    <div className={classes['list__container-title']}>
      <h4 className={classes.list__title}>Услуги</h4>
      <h4 className={cn(classes.list__title, classes['list__position-right'])}>
        Цена
      </h4>
    </div>
    <div className={classes['list__container-services']}>
      {array.map((i) => (
        <CardPrice key={i} {...i} />
      ))}
    </div>
  </div>
);

ListPrices.propTypes = {
  array: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
      from: PropTypes.string,
      before: PropTypes.string,
    }),
  ).isRequired,
};

export default ListPrices;
