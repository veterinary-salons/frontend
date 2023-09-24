import PropTypes from 'prop-types';
import classes from './style.module.scss';

const ListPrices = ({ array }) => (
  <div className={classes.list}>
    <div className={classes['list__container-title']}>
      <h4 className={classes.list__title}>Услуги</h4>
      <h4 className={classes.list__title}>Цена</h4>
    </div>
    {array.map((i) => (
      <div className={classes['list__container-services']} key={i.id}>
        <p className={classes.list__text}>{i.text}</p>
        <p
          className={classes.list__text}
        >{`от ${i.form} до ${i.befor} ₽/усл.`}</p>
      </div>
    ))}
  </div>
);

ListPrices.propTypes = {
  array: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
      form: PropTypes.string,
      befor: PropTypes.string,
    }),
  ).isRequired,
};

export default ListPrices;
