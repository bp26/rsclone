import { EmitterEventName } from '../../../types/enums';
import { emitter } from '../../../utils/emitter';
import { model } from '../../../base/model';
import { LESSONS_COUNT } from '../../../utils/constants/constants';
import { IFormatedUser } from '../../../types/interfaces';
import { chatModel } from '../../../modules/chat/base/chat.model';

class UserModel {
  public init(): IFormatedUser {
    if (!model.user) {
      throw new Error('User not loaded');
    }

    return {
      login: model.user.login,
      avatar: model.user.avatar.secure_url,
      coins: model.user.coins,
      rank: model.user.lessons.length,
      progress: `${Math.floor((model.user.lessons.length / LESSONS_COUNT) * 100)}%`,
      chat: model.user.chat,
    };
  }

  public async changePassword(password: string): Promise<void> {
    if (model.user) {
      model.user.password = password;
    }
    await this.updateSettings();
  }

  public async changeChatSettings(color: string, notificationsOn: boolean): Promise<void> {
    chatModel.setNotifications(notificationsOn);
    if (model.user) {
      model.user.chat = {
        color,
        notifications: notificationsOn,
      };
    }
    await this.updateSettings();
  }

  public async changeAvatar(avatar: File): Promise<void> {
    const formData = new FormData();
    formData.append('avatar', avatar);
    emitter.emit(EmitterEventName.USER_SETTINGS);
    await model.updateUserAvatar(formData);
  }

  private async updateSettings() {
    emitter.emit(EmitterEventName.USER_SETTINGS);
    await model.updateUser();
  }
}

export const userModel = new UserModel();
