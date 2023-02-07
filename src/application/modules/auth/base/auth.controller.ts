import { authModel } from './auth.model';
import { authView } from './auth.view';

class AuthController {
  public init(): void {
    authView.render();
  }

  public async submit(login: string, password: string): Promise<void> {
    await authModel.submit(login, password);
  }

  public switchMode(): void {
    authModel.switchMode();
  }

  public async logout(): Promise<void> {
    await authModel.logout();
  }
}

export const authController = new AuthController();
