import PropTypes from 'prop-types';
import classnames from 'classnames';
import classes from './Button.module.scss';
import LoadingIcon from '../../icons/loading/LoadingIcon';
import CrossIcon from '../../icons/cross/CrossIcon';

export const Button = ({
  onClick,
  variant,
  size,
  shape,
  type,
  children,
  active,
  loading,
  isFiltered,
}) => {
  const buttonClasses = classnames(
    classes.button,
    classes[size],
    classes[shape],
    classes[variant],
    classes[loading ? 'load' : ''],
    {
      [classes.disabled]: !active && !loading,
    },
    {
      [classes.button__container]: isFiltered,
    },
  );

  // Определение цвета на основе варианта с использованием объекта
  const colorMap = {
    'purple-filled': 'reverse',
    outlined: 'primary',
    add: 'reverse',
    // Дополнительные варианты и их цвета могут быть добавлены здесь
  };
  const color = colorMap[variant] || 'primary';

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      type={type}
      disabled={!active}
    >
      {
        // вывести текст кнопки в отсутсвии режима загрузки и типа кнопки "добавить"
        !loading && variant !== 'add' && 
        
        <div className={classes.button__container}>
          {children}
          {isFiltered && <CrossIcon color={color === 'primary' ? 'reverse' : 'primary'} />}
        </div> 
      }
      {loading && (
        // скрыть текст кнопки, оставив ширину для кнопки и отобразить только иконку
        <div>
          <div className={classes.hide}>{children}</div>
          <LoadingIcon size={size} color={color} />
        </div>
      )}
      {
      }
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(['purple-filled', 'outlined']),
  size: PropTypes.oneOf(['small', 'large']),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  shape: PropTypes.oneOf(['square', 'round']),
  children: PropTypes.node.isRequired,
  active: PropTypes.bool,
  loading: PropTypes.bool,
  isFiltered: PropTypes.bool,
};

Button.defaultProps = {
  variant: 'purple-filled',
  size: 'large',
  shape: 'square',
  type: 'button',
  active: true,
  loading: false,
  isFiltered: false,
};

export default Button;
