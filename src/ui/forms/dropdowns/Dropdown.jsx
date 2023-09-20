import PropTypes from 'prop-types';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import classes from './Dropdown.module.scss';
import ArrowUp from '../../icons/arrows/arrowUp/ArrowUp';
import ArrowDown from '../../icons/arrows/arrowDown/ArrowDown';
import { arrayAnimals } from '../../../assets/constants/constants';

const Dropdown = ({ array, width, getDropdown, disabled }) => {
  const [text, setText] = useState(array[0].text);

  const hanelListSelection = (item) => {
    setText(item);
  };

  useEffect(() => {
    getDropdown(text);
    // eslint-disable-next-line
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
  getDropdown: PropTypes.func,
  disabled: PropTypes.bool,
};

Dropdown.defaultProps = {
  width: '500px',
  array: arrayAnimals,
  getDropdown: () => {},
  disabled: false,
};

export default Dropdown;
