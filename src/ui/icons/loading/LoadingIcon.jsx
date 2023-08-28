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
  size: PropTypes.oneOf(['medium', 'large']),
  color: PropTypes.oneOf(['primary', 'reverse']),
};

Loading.defaultProps = {
  size: 'medium',
  color: 'primary',
};

export default Loading;
