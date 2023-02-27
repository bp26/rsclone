import axios from 'axios';
import { IUser } from '../types/interfaces';
import { BASE_URL, USER_ROUTE, AUTH_ROUTE, AUTH_VERIFY, USER_AVATAR } from '../utils/constants/constants';

class Api {
  public async getUser(): Promise<IUser> {
    const { data } = await axios.get(`${BASE_URL}/${USER_ROUTE}`, {
      withCredentials: true,
    });
    return data;
  }

  public async updateUser(user: IUser): Promise<IUser> {
    const { data } = await axios.put(`${BASE_URL}/${USER_ROUTE}`, user, {
      withCredentials: true,
    });
    return data;
  }

  public async updateUserAvatar(avatarData: FormData): Promise<IUser> {
    const { data } = await axios.post(`${BASE_URL}/${USER_ROUTE}/${USER_AVATAR}`, avatarData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      withCredentials: true,
    });
    return data;
  }

  public async checkVerification(): Promise<boolean> {
    const { data } = await axios.get(`${BASE_URL}/${AUTH_ROUTE}/${AUTH_VERIFY}`, {
      withCredentials: true,
    });
    return data;
  }
}

export const api = new Api();
