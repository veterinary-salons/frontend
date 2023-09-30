import PropTypes from 'prop-types';
import classes from './style.module.scss';

const SectionSubtitle = ({ title  }) => (
  <h4 className={classes['section-subtitle']}>{title}</h4>
);

SectionSubtitle.propTypes = {
  title: PropTypes.string.isRequired,
};

SectionSubtitle.defaultProps = {
};

export default SectionSubtitle;