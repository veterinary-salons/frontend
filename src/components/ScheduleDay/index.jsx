import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import classes from './style.module.scss';
import Checkbox from '../../ui/forms/checkboxes/checkbox/checkbox';
import Dropdown from '../../ui/forms/dropdowns/Dropdown';
import { filterScheduleData } from '../../assets/constants/filters';

const ScheduleDay = ({ labelCheckbox, type, getGraph, value }) => {
  const { checkbox, dropDownOne, dropDownTwo, checkboxSwitch } =
    filterScheduleData[type];

  const [checkedDate, setCheckedDate] = useState(false);
  const [switchDate, setSwitchDate] = useState(false);
  const [startReception, setStartReception] = useState('');
  const [endReception, setEndReception] = useState('');

  const handleCheckbox = () => {
    setCheckedDate(!checkedDate);
  };

  const handleSwitch = () => {
    setSwitchDate(!switchDate);
  };

  useEffect(() => {
    if (switchDate === true) {
      handleCheckbox();
    }
    // eslint-disable-next-line
  }, [switchDate]);

  useEffect(() => {
    if (checkedDate === false) {
      setSwitchDate(false);
    }
  }, [checkedDate]);

  useEffect(() => {
    getGraph(
      switchDate && checkedDate
        ? {
            ...value,
            [type]: {
              checkedDate,
              switchDate,
              startReception: '-',
              endReception: '-',
            },
          }
        : {
            ...value,
            [type]: {
              checkedDate,
              switchDate,
              startReception,
              endReception,
            },
          },
    );
    // eslint-disable-next-line
  }, [checkedDate, switchDate, startReception, endReception]);

  return (
    <div className={classes.graph}>
      <div className={classes.graph__container_checkbox}>
        <Checkbox
          getCheckbox={handleCheckbox}
          htmlType="checkbox"
          value={checkbox.name}
          name={checkbox.name}
          checked={checkedDate}
        >
          {checkbox.label}
        </Checkbox>
      </div>
      <div className={classes.graph__container}>
        <Dropdown
          width="119px"
          array={dropDownOne}
          getDropdown={setStartReception}
          disabled={switchDate}
        />
        <Dropdown
          width="119px"
          array={dropDownTwo}
          getDropdown={setEndReception}
          disabled={switchDate}
        />
      </div>

      <Checkbox
        type="switch"
        getCheckbox={handleSwitch}
        value={checkboxSwitch.value}
        name={checkboxSwitch.name}
        checked={switchDate}
      >
        {labelCheckbox}
      </Checkbox>
    </div>
  );
};

ScheduleDay.propTypes = {
  type: PropTypes.string,
  labelCheckbox: PropTypes.string,
  getGraph: PropTypes.func,
  value: PropTypes.shape(),
};

ScheduleDay.defaultProps = {
  type: 'monday',
  labelCheckbox: 'круглосуточно',
  getGraph: () => {},
  value: {},
};

export default ScheduleDay;
