import PropTypes from 'prop-types';
import classes from './style.module.scss';
import Dropdown from '../../ui/forms/dropdowns/Dropdown';
import { arrayFilterList } from '../../assets/constants/constants';

const SectionTitle = ({ title, withFilter, marginT }) => (
  <div className={classes['section-header']} style={{marginTop: marginT}}>
    <h3 className={classes['section-header__title']}>{title}</h3>
    {withFilter &&
      <Dropdown array={arrayFilterList} width='310px' />
    }
  </div>
);

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  withFilter: PropTypes.bool,
  marginT: PropTypes.string,
};

SectionTitle.defaultProps = {
  withFilter: false,
  marginT: '0px',
};

export default SectionTitle;