import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import classes from './style.module.scss';
import Checkbox from '../../ui/forms/checkboxes/checkbox/checkbox';
import Dropdown from '../../ui/forms/dropdowns/Dropdown';
import { filterScheduleData } from '../../assets/constants/filters';

const ScheduleDay = ({ labelCheckbox, type, getGraph, value }) => {
  const { checkbox, dropDownOne, dropDownTwo, checkboxSwitch, day } =
    filterScheduleData[type];

  const [checkedDate, setCheckedDate] = useState(false);
  const [switchDate, setSwitchDate] = useState(false);
  const [begin, setBegin] = useState(dropDownOne[0].text);
  const [end, setEnd] = useState(dropDownTwo[0].text);

  const handleCheckbox = () => {
    setCheckedDate(!checkedDate);
  };

  const handleSwitch = () => {
    setSwitchDate(!switchDate);
  };

  useEffect(() => {
    if (checkedDate === false) {
      setSwitchDate(false);
    }
    // eslint-disable-next-line
  }, [checkedDate]);

  useEffect(() => {
    if (switchDate === true) {
      setCheckedDate(true);
    }
    // eslint-disable-next-line
  }, [switchDate, value]);

  useEffect(() => {
    getGraph(
      switchDate && checkedDate
        ? {
            ...value,
            [type]: {
              work: checkedDate,
              day,
              aroundClock: switchDate,
              begin: begin['dropdown-begin'],
              end: end['dropdown-end'],
            },
          }
        : {
            ...value,
            [type]: {
              work: checkedDate,
              day,
              aroundClock: switchDate,
              begin: begin['dropdown-begin'],
              end: end['dropdown-end'],
            },
          },
    );
    // eslint-disable-next-line
  }, [checkedDate, switchDate, begin, end]);

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
          getValue={setBegin}
          disabled={switchDate}
          name="dropdown-begin"
        />
        <Dropdown
          width="119px"
          array={dropDownTwo}
          getValue={setEnd}
          disabled={switchDate}
          name="dropdown-end"
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
  value: PropTypes.shape().isRequired,
  getGraph: PropTypes.func,
};

ScheduleDay.defaultProps = {
  type: 'monday',
  labelCheckbox: 'круглосуточно',
  getGraph: () => {},
};

export default ScheduleDay;
