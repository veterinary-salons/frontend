import PropTypes from 'prop-types';
import classnames from 'classnames';
import cn from './Button.module.scss';
import LoadingIcon from '../../icons/loading/LoadingIcon';
import CrossIcon from '../../icons/cross/CrossIcon';

const Button = ({
  onClick,
  variant,
  size,
  shape,
  type,
  children,
  active,
  loading,
  isChips,
}) => {
  const buttonClasses = classnames(
    cn.button,
    cn[size],
    cn[shape],
    cn[variant],
    cn[loading ? 'load' : ''],
    {
      [cn.disabled]: !active && !loading,
    },
    {
      [cn.button__container]: isChips,
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
        !loading && variant !== 'add' && (
          <div className={cn.button__container}>
            {children}
            {isChips && (
              <CrossIcon color={color === 'primary' ? 'reverse' : 'primary'} />
            )}
          </div>
        )
      }
      {loading && (
        // скрыть текст кнопки, оставив ширину для кнопки и отобразить только иконку
        <div>
          <div className={cn.hide}>{children}</div>
          <LoadingIcon size={size} color={color} />
        </div>
      )}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(['purple-filled', 'outlined', 'add']),
  size: PropTypes.oneOf(['small', 'large', 'medium']),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  shape: PropTypes.oneOf(['square', 'round']),
  children: PropTypes.node.isRequired,
  active: PropTypes.bool,
  loading: PropTypes.bool,
  isChips: PropTypes.bool,
};

Button.defaultProps = {
  variant: 'purple-filled',
  size: 'large',
  shape: 'square',
  type: 'button',
  active: true,
  loading: false,
  isChips: false,
};

export default Button;
