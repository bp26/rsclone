import { EmitterEventName } from '../../../types/enums';
import { emitter } from '../../../utils/emitter';
import { model } from '../../../base/model';
import { LESSONS_COUNT } from '../../../utils/constants/constants';
import { IFormatedUser } from '../../../types/interfaces';

class UserModel {
  public init(): IFormatedUser {
    if (!model.user) {
      throw new Error('User not loaded');
    }

    return {
      login: model.user.login,
      coins: model.user.coins,
      rank: model.user.lessons.length,
      progress: Math.floor((model.user.lessons.length / LESSONS_COUNT) * 100),
    };
  }
}

export const userModel = new UserModel();
