import PropTypes from 'prop-types';
import classnames from 'classnames';
import classes from './Button.module.scss';
import LoadingIcon from '../loadingIcon/LoadingIcon';

export const Button = ({
  onClick,
  variant,
  size,
  shape,
  type,
  children,
  active,
  loading,
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
  );

  // Определение цвета на основе варианта с использованием объекта
  const colorMap = {
    'purple-filled': 'reverse',
    'outlined': 'primary',
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
        !loading && variant !== 'circle' && children
      }
      {loading && (
        // скрыть текст кнопки, оставив ширину для кнопки и отобразить только иконку
        <>
          <div className={classes.hide}>
            {children}
          </div>
          <LoadingIcon size={size} color={color}/>
        </>
      )}
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
};

Button.defaultProps = {
  variant: 'purple-filled',
  size: 'large',
  shape: 'square',
  type: 'button',
  active: true,
  loading: false,
};

export default Button;
