import PropTypes from 'prop-types';
import cn from 'classnames';
import imgMagnifier from '../../../assets/images/icon/magnifier/magnifier.svg';
import style from './Magnifier.module.scss';

const Magnifier = ({ position, disabled }) => {
  const getStyleMagnifier = cn(
    style.magnifier,
    {
      [style['magnifier__position-search']]: position === 'search',
    },
    { [style.magnifier__disabled]: disabled },
  );

  return (
    <img className={getStyleMagnifier} alt="magnifier" src={imgMagnifier} />
  );
};

Magnifier.propTypes = {
  position: PropTypes.string,
  disabled: PropTypes.bool,
};

Magnifier.defaultProps = {
  position: '',
  disabled: false,
};

export default Magnifier;
