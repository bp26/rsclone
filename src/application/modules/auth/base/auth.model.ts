import { EmitterEventName } from '../../../types/enums';
import { emitter } from '../../../utils/emitter';
import { AuthMode } from '../../../types/enums';
import { authApi } from '../api/auth.api';

class AuthModel {
  mode: AuthMode = AuthMode.LOGIN;

  public switchMode(): void {
    switch (this.mode) {
      case AuthMode.LOGIN:
        this.mode = AuthMode.REGISTER;
        break;
      case AuthMode.REGISTER:
        this.mode = AuthMode.LOGIN;
        break;
    }
    emitter.emit(EmitterEventName.AUTH_SWITCH, this.mode);
  }

  public async submit(login: string, password: string) {
    switch (this.mode) {
      case AuthMode.REGISTER:
        this.register(login, password);
        break;
      case AuthMode.LOGIN:
        this.login(login, password);
        break;
    }
    emitter.emit(EmitterEventName.AUTH_SUCCESS);
  }

  private async register(login: string, password: string): Promise<void> {
    try {
      await authApi.register(login, password);
    } catch (error) {
      if (error instanceof Error) {
        emitter.emit(EmitterEventName.AUTH_ERROR, error.message);
      }
    }
  }

  private async login(login: string, password: string): Promise<void> {
    try {
      await authApi.register(login, password);
    } catch (error) {
      if (error instanceof Error) {
        emitter.emit(EmitterEventName.AUTH_ERROR, error.message);
      }
    }
  }

  public async logout(): Promise<void> {
    try {
      await authModel.logout();
      emitter.emit(EmitterEventName.AUTH_LOGOUT);
    } catch (error) {
      console.log(error);
    }
  }
}

export const authModel = new AuthModel();
