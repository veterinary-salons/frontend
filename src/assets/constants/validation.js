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
      return { invalid: true, message: 'Почта верна!' };
    }
  }
  return { invalid: false, message: 'Заполните поле' };
}

function validateText(text) {
  if (text !== undefined) {
    if (text.length === 0) {
      return { invalid: false, message: 'Это поле не должно быть пустым!' };
    }
    if (text.length > 2) {
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
          'Пароль должен состоять из восемь символов, минимум одна буква и одна цифра',
      };
    }

    if (regexPossword.test(password)) {
      return {
        invalid: true,
        message: 'Отличный пароль',
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
        message: 'Номер верный',
      };
    }
  }
  return { invalid: false, message: 'Заполните поле' };
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
  if (type === 'tel') {
    return validatePhone(item);
  }
  return '';
};

export default validateInput;
