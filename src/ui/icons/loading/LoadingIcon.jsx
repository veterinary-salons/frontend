import PropTypes from 'prop-types';
import classnames from 'classnames';
import classes from './LoadingIcon.module.scss';

const Loading = ({ size, color }) => {
  const loadingIconClasses = classnames(
    classes.loading,
    classes[size],
    classes[color],
  );

  return <div className={loadingIconClasses} />;
};

Loading.propTypes = {
  size: PropTypes.oneOf(['small', 'large']),
  color: PropTypes.oneOf(['primary', 'reverse']),
};

Loading.defaultProps = {
  size: 'small',
  color: 'primary',
};

export default Loading;
