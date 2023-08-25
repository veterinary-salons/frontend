import PropTypes from 'prop-types';
import { useState } from 'react';
import Magnifier from '../../../icons/magnifier/Magnifier';
import classStyle from './style.module.scss';

const SearchForm = ({
  placeholder,
  name,
  maxLength,
  minLength,
  disabled,
  infoInput,
}) => {
  const [value, setValue] = useState('');

  const handelSubmit = (e) => {
    e.preventDefault();
    infoInput(value);
  };

  return (
    <form className={classStyle['search-container']} onSubmit={handelSubmit}>
      <input
        onClick={() => {
          setValue(value.replace('Поиск:', ''));
        }}
        className={classStyle['search-container__input']}
        type="search"
        placeholder={placeholder}
        disabled={disabled}
        value={value || ''}
        name={name}
        maxLength={maxLength}
        minLength={minLength}
        onChange={(e) => setValue(e.target.value)}
      />
      <Magnifier disabled={disabled} />
    </form>
  );
};

SearchForm.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string,
  maxLength: PropTypes.number,
  minLength: PropTypes.number,
  disabled: PropTypes.bool,
  infoInput: PropTypes.func,
};

SearchForm.defaultProps = {
  placeholder: 'Чем вам помочь?',
  name: 'search',
  maxLength: 20,
  minLength: 2,
  disabled: false,
  infoInput: () => {},
};

export default SearchForm;