import PropTypes from 'prop-types';
import cn from 'classnames';
import { useState } from 'react';
import styleClass from './Dropdown.module.scss';
import ArrowUp from '../ArrowUp/ArrowUp';
import ArrowDown from '../ArrowDown/ArrowDown';
import { arrayAnimals } from '../../assets/constants/constants';

const Dropdown = ({ array, width }) => {
  const [dropdownClick, setDropdownClick] = useState(false);

  const [text, setText] = useState(array[0].text);

  const handelOpenDropdown = () => {
    setDropdownClick(!dropdownClick);
  };

  const hanelListSelection = (item) => {
    setText(item);
    handelOpenDropdown();
  };

  return (
    <section className={styleClass.dropdown} style={{ width }}>
      <button
        style={{ width }}
        className={cn(styleClass.select, {
          [styleClass.select_action]: dropdownClick,
        })}
        onClick={handelOpenDropdown}
        type="button"
      >
        <span className={styleClass.selected}>{text}</span>
      </button>
      <ul
        className={cn(styleClass.menu, {
          [styleClass['menu-open']]: dropdownClick,
        })}
      >
        {array.map(
          (item) =>
            item.text !== text && (
              <button
                className={styleClass['menu-btn']}
                key={item.id}
                onClick={() => hanelListSelection(item.text)}
                type="button"
              >
                {item.text}
              </button>
            ),
        )}
      </ul>
      <ArrowUp positionDropdown="ture" />
      <ArrowDown positionDropdown="true" dropdownClick={dropdownClick} />
    </section>
  );
};

Dropdown.propTypes = {
  width: PropTypes.string,
  array: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])),
};

Dropdown.defaultProps = {
  width: '500px',
  array: arrayAnimals,
};

export default Dropdown;
