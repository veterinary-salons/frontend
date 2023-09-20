import PropTypes from 'prop-types';
import classes from './style.module.scss';
import Checkbox from '../../ui/forms/checkboxes/checkbox/checkbox';
import { filterScheduleData } from '../../assets/constants/filters';

const ReceptionSelectionBlock = ({ values, category, getCheckbox }) => {
  const { checkboxType, options } = filterScheduleData[category];

  return (
    <div className={classes['selection-block']}>
      <p className={classes['selection-block__text']}>Одна услуга длится</p>
      <div className={classes['selection-block__checkbox-conteiner']}>
        {options.map((item) => (
          <Checkbox
            key={item.label}
            type={checkboxType}
            htmlType={checkboxType}
            checked={
              item.name
                ? values[item.name] === item.value
                : values[item.value] === item.value
            }
            value={item.value}
            name={item.name ? item.name : item.value}
            getCheckbox={getCheckbox}
          >
            {item.label}
          </Checkbox>
        ))}
      </div>
    </div>
  );
};

ReceptionSelectionBlock.propTypes = {
  category: PropTypes.string,
  values: PropTypes.objectOf(PropTypes.string),
  getCheckbox: PropTypes.func.isRequired,
};

ReceptionSelectionBlock.defaultProps = {
  category: 'checkboxTime',
  values: {},
};

export default ReceptionSelectionBlock;
