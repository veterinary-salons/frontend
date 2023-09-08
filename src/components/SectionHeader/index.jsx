import PropTypes from 'prop-types';
import classes from './style.module.scss';
import Dropdown from '../../ui/forms/dropdowns/Dropdown';
import { arrayFilterList } from '../../assets/constants/constants';

const SectionHeader = ({ title, withFilter }) => (
  <section className={classes['section-header']}>
    <h2 className={classes['section-header__title']}>{title}</h2>
    {withFilter &&
      <Dropdown array={arrayFilterList} width='310px' />
    }
  </section>
);

SectionHeader.propTypes = {
  title: PropTypes.string,
  withFilter: PropTypes.bool,
};

SectionHeader.defaultProps = {
  title: 'Избранное',
  withFilter: false,
};

export default SectionHeader;