import axios from 'axios';
import { StatusCode } from '../../../types/enums';
import { IUser } from '../../../types/interfaces';
import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_REGISTER, AUTH_ROUTE, BASE_URL } from '../../../utils/constants';

class AuthApi {
  public async register(login: string, password: string) {
    return await this.authenticate(login, password, AUTH_REGISTER);
  }

  public async login(login: string, password: string): Promise<void> {
    await this.authenticate(login, password, AUTH_LOGIN);
  }

  private async authenticate(login: string, password: string, endpoint: string): Promise<void> {
    const res = await axios.post(`${BASE_URL}/${AUTH_ROUTE}/${endpoint}`, {
      login,
      password,
    });
    if (res.status !== +StatusCode.OK) {
      throw new Error(res.data);
    }
  }

  public async logout(): Promise<void> {
    await axios.delete(`${BASE_URL}/${AUTH_ROUTE}/${AUTH_LOGOUT}`);
  }
}

export const authApi = new AuthApi();
