import { IUser } from '../types/interfaces';
import { api } from '../api/api';
import { emitter } from '../utils/emitter';
import { EmitterEventName, Lang, Theme } from '../types/enums';

class Model {
  public isAuthenticated = false;
  public user?: IUser;
  public lang: Lang = Lang.EN;
  public theme: Theme = Theme.DARK;

  constructor() {
    this.subscribe();
  }

  public async init(): Promise<void> {
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
      emitter.emit(EmitterEventName.GLOBAL_USER_LOAD_SUCCESS, this.user);
    } catch (error) {
      emitter.emit(EmitterEventName.GLOBAL_USER_LOAD_ERROR);
    }
  }

  public async updateUser() {
    try {
      if (this.user) {
        await api.updateUser(this.user);
      }
    } catch (error) {
      console.log(error);
    }
  }

  public switchLang() {
    switch (this.lang) {
      case Lang.EN:
        this.lang = Lang.RU;
        break;

      case Lang.RU:
        this.lang = Lang.EN;
        break;
    }
    emitter.emit(EmitterEventName.GLOBAL_LANGUAGE, this.lang);
  }

  public switchTheme() {
    switch (this.theme) {
      case Theme.DARK:
        this.theme = Theme.LIGHT;
        break;

      case Theme.LIGHT:
        this.theme = Theme.DARK;
        break;
    }
    emitter.emit(EmitterEventName.GLOBAL_THEME, this.theme);
  }

  private subscribe() {
    emitter.on(EmitterEventName.AUTH_SUCCESS, this.loadUser.bind(this));
  }
}

export const model = new Model();
