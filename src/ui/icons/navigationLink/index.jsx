import PropTypes from 'prop-types';
import classnames from 'classnames';
import classes from './style.module.scss';
import imgAvatar from '../../../assets/images/icon/avatar/avatar.svg';

const NavigationLink = ({ variant, counter, img }) => {
  const variantAvatar = variant === 'profile';
  /**
   * @param (counter) number
   *  В зависимости от числа, подбирается класс с позиционированием
   *  и шириной компонента
   */
  const spanClass = classnames(
    [classes['nav-link__span']],
    {
      [classes['nav-link__counter-min']]: counter <= 99,
    },
    {
      [classes['nav-link__counter-max']]: counter > 99,
    },
  );
  // Возращает число, если counter > 99, то возращаем '+99'
  const handleCounter = (num) => {
    const maxCounter = num > 99 ? '99+' : num;
    return num === 0 ? '' : maxCounter;
  };

  return (
    <div className={classes['nav-link']}>
      {variantAvatar ? (
        <img
          className={classes[`nav-link__${variant}`]}
          src={img || imgAvatar}
          alt="icon-avatar"
        />
      ) : (
        <div className={classes[`nav-link__${variant}`]}>
          {counter > 0 && (
            <span className={spanClass}>{handleCounter(counter)}</span>
          )}
        </div>
      )}
    </div>
  );
};

NavigationLink.propTypes = {
  variant: PropTypes.string,
  counter: PropTypes.number,
  img: PropTypes.string,
};

NavigationLink.defaultProps = {
  variant: 'profile',
  counter: 0,
  img: '',
};

export default NavigationLink;
