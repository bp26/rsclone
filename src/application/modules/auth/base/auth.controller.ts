import { AuthErrorType } from '../../../types/enums';
import { validateLogin, validatePassword } from '../../../utils/validation';
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

    const loginValidation = validateLogin(login);
    if (!loginValidation.isValid) {
      isValidated = false;
      authView.showError(AuthErrorType.LOGIN, loginValidation.message);
    }

    const passwordValidation = validatePassword(password);
    if (!passwordValidation.isValid) {
      isValidated = false;
      authView.showError(AuthErrorType.PASSWORD, passwordValidation.message);
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
