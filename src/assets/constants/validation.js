import { regexEmail, regexPossword, regexPhone } from './constants';

function validateEmail(email) {
  if (email !== undefined) {
    if (email.length === 0) {
      return { invalid: false, message: 'Это поле не должно быть пустым!' };
    }
    if (!regexEmail.test(email.toLowerCase())) {
      return { invalid: false, message: 'Неверный формат почты!' };
    }
    if (regexEmail.test(email.toLowerCase())) {
      return { invalid: true };
    }
  }
  return { invalid: false, message: 'Заполните поле' };
}

function validateText(text) {
  if (text !== undefined) {
    if (text.length === 0) {
      return { invalid: false, message: 'Это поле не должно быть пустым!' };
    }
    if (text.length > 5) {
      return { invalid: true, message: '' };
    }
  }
  return { invalid: false, message: 'Заполните поле' };
}

function validatePassword(password) {
  if (password !== undefined) {
    if (password.length === 0) {
      return { invalid: false, message: 'Это поле не должно быть пустым!' };
    }
    if (!regexPossword.test(password)) {
      return {
        invalid: false,
        message:
          'Пароль должен состоять из восьми символов, минимум одна буква и одна цифра',
      };
    }

    if (regexPossword.test(password)) {
      return {
        invalid: true,
      };
    }
  }
  return { invalid: false, message: 'Заполните поле' };
}

function validatePhone(phone) {
  if (phone !== undefined) {
    if (phone.length === 0) {
      return { invalid: false, message: 'Введите номер телефона' };
    }
    if (!regexPhone.test(phone)) {
      return {
        invalid: false,
        message: 'Введите корректный номер',
      };
    }
    if (regexPhone.test(phone)) {
      return {
        invalid: true,
      };
    }
  }
  return { invalid: false, message: 'Заполните поле' };
}

const validateInput = (type, item) => {
  switch (type) {
    case 'text':
      return validateText(item);
    case 'email':
      return validateEmail(item);
    case 'password':
      return validatePassword(item);
    case 'tel':
      return validatePhone(item);
    default:
      return '';
  }
};

export default validateInput;
