import PropTypes from 'prop-types';
import classes from './style.module.scss';
import Dropdown from '../../ui/forms/dropdowns/Dropdown';
import { arrayFilterList } from '../../assets/constants/constants';

const SectionTitle = ({ title, withFilter }) => (
  <div className={classes['section-header']}>
    <h2 className={classes['section-header__title']}>{title}</h2>
    {withFilter &&
      <Dropdown array={arrayFilterList} width='310px' />
    }
  </div>
);

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  withFilter: PropTypes.bool,
};

SectionTitle.defaultProps = {
  withFilter: false,
};

export default SectionTitle;