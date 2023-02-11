import { IUser } from '../types/interfaces';
import { api } from '../api/api';
import { emitter } from '../utils/emitter';
import { EmitterEventName } from '../types/enums';

class Model {
  private user?: IUser;

  constructor() {
    this.subscribe();
  }

  public async init(): Promise<void> {
    const isVerificated = await api.checkVerification();
    if (isVerificated) {
      await this.loadUser();
    }
  }

  public getUser(): IUser | undefined {
    return this.user;
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

  private subscribe() {
    emitter.on(EmitterEventName.AUTH_SUCCESS, this.loadUser.bind(this));
  }
}

export const model = new Model();
