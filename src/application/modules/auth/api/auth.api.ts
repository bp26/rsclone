import axios from 'axios';
import { StatusCode } from '../../../types/enums';
import { IUser } from '../../../types/interfaces';
import { AUTH_LOGIN, AUTH_REGISTER, AUTH_ROUTE, BASE_URL } from '../../../utils/constants';
import { ResponceError } from '../../../utils/responceError';

class AuthApi {
  public async register(login: string, password: string) {
    return await this.authorize(login, password, AUTH_REGISTER);
  }

  public async login(login: string, password: string): Promise<IUser> {
    return await this.authorize(login, password, AUTH_LOGIN);
  }

  private async authorize(login: string, password: string, endpoint: string): Promise<IUser> {
    const res = await axios.post(`${BASE_URL}/${AUTH_ROUTE}/${endpoint}`, {
      login,
      password,
    });
    if (res.status !== +StatusCode.OK) {
      throw new ResponceError(res.status, res.data);
    }
    return res.data;
  }
}

export const authApi = new AuthApi();
