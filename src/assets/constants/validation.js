import { regexEmail, regexName } from './constants';

function validateEmail(email) {
  if (email !== undefined) {
    if (email.length === 0) {
      return { invalid: true, message: 'Это поле не должно быть пустым!' };
    }
    if (!regexEmail.test(email.toLowerCase())) {
      return { invalid: true, message: 'Неверный формат почты!' };
    }
    if (regexEmail.test(email.toLowerCase())) {
      return { invalid: false, message: '' };
    }
  }
  return { invalid: true, message: '' };
}

function validateText(text) {
  if (text !== undefined) {
    if (text.length === 0) {
      return { invalid: true, message: 'Это поле не должно быть пустым!' };
    }
    if (!regexName.test(text.toLowerCase())) {
      return {
        invalid: true,
        message:
          'Поле должно содержать только латиницу, кириллицу, пробел или дефис!',
      };
    }
    if (regexName.test(text.toLowerCase())) {
      return { invalid: false, message: '' };
    }
  }
  return { invalid: true, message: '' };
}

function validatePassword(password) {
  if (password !== undefined) {
    if (password.length === 0) {
      return { invalid: true, message: 'Это поле не должно быть пустым!' };
    }
    if (password.length < 0) {
      return {
        invalid: true,
        message: 'Пароль должен содержать более восьми символов',
      };
    }
  }
  return { invalid: true, message: '' };
}

function validateNumber(number) {
  if (number !== undefined) {
    if (number.length === 0) {
      return { invalid: true, message: 'Это поле не должно быть пустым!' };
    }
    if (number.length < 11) {
      return {
        invalid: true,
        message: 'Введите корректный номер',
      };
    }
  }
  return { invalid: true, message: '' };
}

const validateInput = (type, item) => {
  if (type === 'email') {
    return validateEmail(item);
  }
  if (type === 'text') {
    return validateText(item);
  }
  if (type === 'password') {
    return validatePassword(item);
  }
  if (type === 'number') {
    return validateNumber(item);
  }
  return '';
};

export default validateInput;
