import { AuthErrorMessage } from '../types/enums';
import { IValidation } from '../types/interfaces';
import { LOGIN_MIN_LENGTH, LOGIN_MAX_LENGTH, PASSWORD_MIN_LENGTH, PASSWORD_MAX_LENGTH } from './constants/constants';

export const validateLogin = (login: string): IValidation => {
  if (!login) {
    return {
      isValid: false,
      message: AuthErrorMessage.NO_LOGIN,
    };
  } else if (login.length < LOGIN_MIN_LENGTH) {
    return {
      isValid: false,
      message: AuthErrorMessage.SHORT_LOGIN,
    };
  } else if (login.length > LOGIN_MAX_LENGTH) {
    return {
      isValid: false,
      message: AuthErrorMessage.LONG_LOGIN,
    };
  }

  return {
    isValid: true,
    message: AuthErrorMessage.VALID,
  };
};

export const validatePassword = (password: string): IValidation => {
  if (!password) {
    return {
      isValid: false,
      message: AuthErrorMessage.NO_PASSWORD,
    };
  } else if (password.length < PASSWORD_MIN_LENGTH) {
    return {
      isValid: false,
      message: AuthErrorMessage.SHORT_PASSWORD,
    };
  } else if (password.length > PASSWORD_MAX_LENGTH) {
    return {
      isValid: false,
      message: AuthErrorMessage.LONG_PASSWORD,
    };
  }

  return {
    isValid: true,
    message: AuthErrorMessage.VALID,
  };
};
