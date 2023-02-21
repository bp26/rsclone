import { IUser } from '../types/interfaces';
import { api } from '../api/api';
import { emitter } from '../utils/emitter';
import { EmitterEventName, Theme } from '../types/enums';

class Model {
  public isAuthenticated = false;
  public user?: IUser;
  public theme: Theme = Theme.DARK;

  constructor() {
    this.subscribe();
  }

  public async authentificate(): Promise<void> {
    try {
      this.isAuthenticated = await api.checkVerification();
      if (this.isAuthenticated) {
        await this.loadUser();
      }
    } catch (error) {
      console.log(error);
    }
  }

  public async loadUser(): Promise<void> {
    try {
      this.user = await api.getUser();
      this.isAuthenticated = true;
      emitter.emit(EmitterEventName.GLOBAL_USER_LOAD_SUCCESS, this.user);
    } catch (error) {
      emitter.emit(EmitterEventName.GLOBAL_USER_LOAD_ERROR);
    }
  }

  public async updateUser() {
    try {
      if (this.user) {
        this.user = await api.updateUser(this.user);
        emitter.emit(EmitterEventName.GLOBAL_USER_UPDATE);
      }
    } catch (error) {
      console.log(error);
    }
  }

  public async updateUserAvatar(avatarData: FormData) {
    try {
      if (this.user) {
        this.user = await api.updateUserAvatar(avatarData);
        emitter.emit(EmitterEventName.GLOBAL_USER_UPDATE_AVATAR, this.user.avatar.secure_url);
      }
    } catch (error) {
      console.log(error);
    }
  }

  public setTheme(theme: Theme) {
    this.theme = theme;
    emitter.emit(EmitterEventName.GLOBAL_THEME, this.theme);
  }

  private subscribe() {
    emitter.on(EmitterEventName.AUTH_SUCCESS, this.loadUser.bind(this));
  }
}

export const model = new Model();
