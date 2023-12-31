import PropTypes from 'prop-types';
import { useState } from 'react';
import classNames from 'classnames';
import classStyle from './style.module.scss';

const SearchForm = ({
  placeholder,
  name,
  maxLength,
  minLength,
  disabled,
  getInput,
  authorization
}) => {
  const [value, setValue] = useState('');

  const handelSubmit = (e) => {
    e.preventDefault();
    getInput(value);
  };

  return (
    <form
      className={classNames(
        classStyle['search-container'],
        disabled ? classStyle.disabled : null,
        authorization ? classStyle.auth : null,
      )}
      onSubmit={handelSubmit}
    >
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
      <button
        type="submit"
        className={classStyle['search-container__submit']}
        disabled={disabled}
        aria-label="Подтвердить поиск"
      />
    </form>
  );
};

SearchForm.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string,
  maxLength: PropTypes.number,
  minLength: PropTypes.number,
  disabled: PropTypes.bool,
  getInput: PropTypes.func,
  authorization: PropTypes.bool,
};

SearchForm.defaultProps = {
  placeholder: 'Чем вам помочь?',
  name: 'search',
  maxLength: 100,
  minLength: 2,
  disabled: false,
  getInput: () => {},
  authorization: false,
};

export default SearchForm;
