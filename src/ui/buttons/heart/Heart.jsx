import PropTypes from 'prop-types';
import cn from 'classnames';
import style from './Heart.module.scss';

const Heart = ({ isActive, onClick }) => (
  <button
    className={cn(style.like, isActive ? style.action : null)}
    type="button"
    onClick={onClick}
    aria-label="лайк"
  />
);

Heart.propTypes = {
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
};

Heart.defaultProps = {
  isActive: false,
  onClick: (isActive) => !isActive,
};

export default Heart;
