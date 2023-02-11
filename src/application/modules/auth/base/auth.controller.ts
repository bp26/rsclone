import { AuthErrorMessage, AuthErrorType } from '../../../types/enums';
import { LOGIN_LENGTH, PASSWORD_LENGTH } from '../../../utils/constants/constants';
import { authModel } from './auth.model';
import { authView } from './auth.view';

class AuthController {
  public init(): void {
    authView.render();
  }

  public showModal(): void {
    authView.showModal();
  }

  public submit(login: string, password: string): void {
    let isValidated = true;

    if (!login || !password) {
      isValidated = false;
    }
    if (login.length < LOGIN_LENGTH || password.length < PASSWORD_LENGTH) {
      isValidated = false;
    }

    if (!login) {
      authView.showError(AuthErrorType.LOGIN, AuthErrorMessage.NO_LOGIN);
    } else if (login.length < LOGIN_LENGTH) {
      authView.showError(AuthErrorType.LOGIN, AuthErrorMessage.SHORT_LOGIN);
    }

    if (!password) {
      authView.showError(AuthErrorType.PASSWORD, AuthErrorMessage.NO_PASSWORD);
    } else if (password.length < PASSWORD_LENGTH) {
      authView.showError(AuthErrorType.PASSWORD, AuthErrorMessage.SHORT_PASSWORD);
    }

    if (isValidated) {
      authView.showPreloader();
      authModel.submit(login, password);
    }
  }

  public switchMode(): void {
    authModel.switchMode();
  }

  public async logout(): Promise<void> {
    await authModel.logout();
  }
}

export const authController = new AuthController();
