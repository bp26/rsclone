import axios from 'axios';
import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_REGISTER, AUTH_ROUTE, BASE_URL } from '../../../utils/constants/constants';

class AuthApi {
  public async register(login: string, password: string): Promise<void> {
    await this.authenticate(login, password, AUTH_REGISTER);
  }

  public async login(login: string, password: string): Promise<void> {
    await this.authenticate(login, password, AUTH_LOGIN);
  }

  private async authenticate(login: string, password: string, endpoint: string): Promise<void> {
    await axios.post(
      `${BASE_URL}/${AUTH_ROUTE}/${endpoint}`,
      {
        login,
        password,
      },
      {
        withCredentials: true,
      }
    );
  }

  public async logout(): Promise<void> {
    await axios.delete(`${BASE_URL}/${AUTH_ROUTE}/${AUTH_LOGOUT}`, {
      withCredentials: true,
    });
  }
}

export const authApi = new AuthApi();
