import PropTypes from 'prop-types';
import classnames from 'classnames';
import classes from './index.module.scss';
import imgAvatar from '../../../assets/images/icon/avatar/avatar.svg';

const NavigationLink = ({ variant, counter, img, width, height }) => {
  const variantAvatar = variant === 'profile';
  /**
   * @param (counter) number
   *  В зависимости от числа, подбирается класс с позиционированием
   *  и шириной компонента
   */
  const spanClass = classnames(
    [classes['nav-link__span']],
    {
      [classes['nav-link__counter-min']]: counter < 99,
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
    // Добавил style если в дизайне что-то поменяется
    <div className={classes['nav-link']} style={{ width, height }}>
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
  width: PropTypes.string,
  height: PropTypes.string,
};

NavigationLink.defaultProps = {
  variant: 'profile',
  counter: 0,
  img: '',
  width: '40px',
  height: '40px',
};

export default NavigationLink;
