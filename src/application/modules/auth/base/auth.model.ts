import { AuthErrorType, EmitterEventName } from '../../../types/enums';
import { emitter } from '../../../utils/emitter';
import { AuthMode } from '../../../types/enums';
import { authApi } from '../api/auth.api';
import { AxiosError } from 'axios';
import { ResponceError } from '../../../types/interfaces';

class AuthModel {
  private mode: AuthMode = AuthMode.LOGIN;

  constructor() {
    this.subscribe();
  }

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
    try {
      switch (this.mode) {
        case AuthMode.REGISTER:
          await this.register(login, password);
          break;
        case AuthMode.LOGIN:
          await this.login(login, password);
          break;
      }
      emitter.emit(EmitterEventName.AUTH_SUCCESS);
    } catch (error) {
      if (error instanceof AxiosError && error.response?.data) {
        const responceError: ResponceError = error.response.data;
        if (responceError.type === AuthErrorType.LOGIN || responceError.type === AuthErrorType.PASSWORD) {
          emitter.emit(EmitterEventName.AUTH_ERROR, responceError.type, responceError.message);
        } else {
          console.log(error);
        }
      }
    }
  }

  private async register(login: string, password: string): Promise<void> {
    await authApi.register(login, password);
  }

  private async login(login: string, password: string): Promise<void> {
    await authApi.login(login, password);
  }

  public async logout(): Promise<void> {
    try {
      await authApi.logout();
      location.replace('/');
    } catch (error) {
      console.log(error);
    }
  }

  private subscribe() {
    emitter.on(EmitterEventName.GLOBAL_USER_LOAD_SUCCESS, () => {
      if (this.mode === AuthMode.REGISTER) {
        this.switchMode();
      }
    });
  }
}

export const authModel = new AuthModel();
