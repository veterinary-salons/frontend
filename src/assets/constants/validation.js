import {
  regexEmail,
  regexCyrillic,
  regexPassword,
  regexPhone,
  regexPetName,
} from './constants';

function validateEmail(value) {
  if (value === '') {
    return { default: true, invalid: false };
  }
  if (value !== undefined) {
    if (value.length === 0) {
      return { invalid: false, message: 'Это поле не должно быть пустым' };
    }
    if (!regexEmail.test(value.toLowerCase())) {
      return { invalid: false, message: 'Введите корректную почту' };
    }
  }
  return { invalid: true, message: '' };
}

function validateText(value) {
  if (value === '') {
    return { default: true, invalid: false };
  }
  if (value !== undefined) {
    if (value.length === 0) {
      return { invalid: true, message: 'Это поле не должно быть пустым' };
    }
    if (value.length < 2) {
      return { invalid: false, message: 'Поле должно содержать более 2 символов' };
    }
  }
  return { invalid: true, message: 'Поле должно содержать более 2 символов' };
}

function validateUserName(value) {
  if (value === '') {
    return { default: true, invalid: false };
  }
  if (value !== undefined) {
    if (!regexCyrillic.test(value)) {
      return {
        err: true,
        message: 'Используйте только кириллицу, пробел и -',
      };
    }
    if (value.length < 2 || value.length > 15) {
      return {
        err: false,
        message: 'Поле должно содержать от 2 до 15 символов',
      };
    }
  }
  return { invalid: true, message: '' };
}

function validatePassword(value) {
  if (value === '') {
    return { default: true, invalid: false };
  }
  if (value !== undefined) {
    if (value.length === 0) {
      return { invalid: false, message: 'Это поле не должно быть пустым' };
    }
    if (!regexPassword.test(value)) {
      return {
        invalid: false,
        message: 'Используйте только латинские буквы, цифры, . и -',
      };
    }
    if (value.length < 6 || value.length > 20) {
      return {
        invalid: false,
        message: 'Пароль должен содержать от 6 до 20 символов',
      };
    }
    return { invalid: true, message: '' };
  }
  return { default: true };
}

function validatePhone(value) {
  if (value === '') {
    return { default: true, invalid: false };
  }
  if (value !== undefined) {
    if (value.length === 0) {
      return { invalid: false, message: 'Введите номер телефона' };
    }
    if (!regexPhone.test(value)) {
      return {
        err: true,
        message: 'Введите корректный номер',
      };
    }
    if (regexPhone.test(value)) {
      return { invalid: true, message: '' };
    }
  }
  return '';
}

function validatePrice(value) {
  if (value !== undefined) {
    if (value.length > 1) {
      return { invalid: true };
    }
  }
  return { invalid: false };
}

function validatePetName(value) {
  if (value === '') {
    return { default: true, invalid: false };
  }
  if (value !== undefined) {
    if (!regexPetName.test(value)) {
      return {
        err: true,
        message: 'Используйте кириллицу, латиницу, пробел и -',
      };
    }
    if (value.length < 2 || value.length > 15) {
      return {
        err: false,
        message: 'Поле должно содержать от 2 до 15 символов',
      };
    }
  }
  return { invalid: true, message: '' };
}

function validatePetBreed(value) {
  if (value === '') {
    return { default: true, invalid: false };
  }
  if (value !== undefined) {
    if (!regexCyrillic.test(value)) {
      return {
        err: true,
        message: 'Используйте только кириллицу, пробел и -',
      };
    }
    if (value.length < 2 || value.length > 40) {
      return {
        err: false,
        message: 'Поле должно содержать от 2 до 40 символов',
      };
    }
  }
  return { invalid: true, message: '' };
}

function validatePetType(value) {
  if (value === '') {
    return { default: true, invalid: false };
  }
  if (value !== undefined) {
    if (!regexCyrillic.test(value)) {
      return {
        err: true,
        message: 'Используйте только кириллицу, пробел и -',
      };
    }
    if (value.length < 2 || value.length > 20) {
      return {
        err: false,
        message: 'Поле должно содержать от 2 до 20 символов',
      };
    }
  }
  return { invalid: true, message: '' };
}

function validatePetAge(value) {
  if (value === '') {
    return { default: true, invalid: false };
  }
  return { invalid: true, message: '' };
}

const validateInput = (type, name, value) => {
  if (type === 'email') {
    return validateEmail(value);
  }
  if (type === 'text' && (name === 'userName' || name === 'userSurname')) {
    return validateUserName(value);
  }
  if (name === 'petName') {
    return validatePetName(value);
  }
  if (name === 'breed') {
    return validatePetBreed(value);
  }
  if (name === 'my-type') {
    return validatePetType(value);
  }
  if (type === 'number') {
    return validatePetAge(value);
  }
  if (type === 'text') {
    return validateText(value);
  }
  if (type === 'password') {
    return validatePassword(value);
  }
  if (type === 'tel') {
    return validatePhone(value);
  }
  if (type === 'price') {
    return validatePrice(value);
  }
  return '';
};

export default validateInput;
