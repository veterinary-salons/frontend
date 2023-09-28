import PropTypes from 'prop-types';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import classes from './Dropdown.module.scss';
import ArrowUp from '../../icons/arrows/arrowUp/ArrowUp';
import ArrowDown from '../../icons/arrows/arrowDown/ArrowDown';
import { arrayAnimals } from '../../../assets/constants/constants';

const Dropdown = ({ array, value, width, getValue, disabled, name }) => {
  const [text, setText] = useState(array[0].text);

  const hanelListSelection = (item) => {
    setText(item);
  };

  useEffect(() => {
    if (value) {
      setText(value);
    }
  }, [value]);

  useEffect(() => {
    if (getValue) {
      getValue({ [name]: text });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  return (
    <ul className={classes.dropdown}>
      {disabled ? (
        <div className={classes['dropdown__disabled-block']}>
          <p className={classes['dropdown__disabled-text']}>-</p>
          <ArrowUp positionDropdown />
          <ArrowDown />
        </div>
      ) : (
        <li className={cn(classes.dropdown__block)}>
          {text}
          <ul className={classes.dropdown__container}>
            {array.map(
              (item) =>
                item.text !== text && (
                  <li className={classes.dropdown__li} key={item.id}>
                    <button
                      style={{ width }}
                      key={item.id}
                      className={classes.dropdown__button}
                      onClick={() => hanelListSelection(item.text)}
                      type="button"
                    >
                      {item.text}
                    </button>
                  </li>
                ),
            )}
          </ul>
          <ArrowUp positionDropdown />
          <ArrowDown classes={classes.opacity} />
        </li>
      )}
    </ul>
  );
};

Dropdown.propTypes = {
  width: PropTypes.string,
  array: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])),
  getValue: PropTypes.func,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  name: PropTypes.string,
};

Dropdown.defaultProps = {
  width: '500px',
  array: arrayAnimals,
  getValue: () => {},
  disabled: false,
  value: null,
  name: '',
};

export default Dropdown;
