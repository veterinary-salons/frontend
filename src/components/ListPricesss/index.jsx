import PropTypes from 'prop-types';
import cn from 'classnames';
import classes from './style.module.scss';

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
        <div className={classes.list__service} key={Math.random()}>
          <p className={classes.list__text}>{i.text}</p>
          <p
            className={cn(classes.list__text, classes['list__position-right'])}
          >
            {`от ${i.from} до ${i.befor} ₽/усл.`}
            {/* от <span className={classes.list__span}>{i.form}</span> до{' '}
            <span className={classes.list__span}>{i.befor}</span> */}
          </p>
        </div>
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

// {
//   `от ${(<span className={classes.list__span}>i.form</span>)} до ${
//     i.befor
//   } ₽/усл.`;
// }
