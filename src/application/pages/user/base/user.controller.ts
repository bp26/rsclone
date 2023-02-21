import { UserPasswordError } from '../../../types/enums';
import { validatePassword } from '../../../utils/validation';
import { userModel } from './user.model';
import { userView } from './user.view';

class UserController {
  public init(): void {
    userView.render(userModel.init());
  }

  public changeAvatar(image: File) {}

  public changePassword(password: string, repeatPassword: string) {
    let isValid = true;

    const validation = validatePassword(password);
    if (!validation.isValid) {
      isValid = false;
      userView.showPasswordError(UserPasswordError.NEW, validation.message);
    } else if (password !== repeatPassword) {
      isValid = false;
      userView.showPasswordError(UserPasswordError.REPEAT, `Passwords don't match`);
    }

    if (isValid) {
      userModel.changePassword(password);
      userView.clearPasswordInput();
    }
  }

  public changeChatSettings(color: string, notificationsOn: boolean) {
    userModel.changeChatSettings(color, notificationsOn);
  }
}

export const userController = new UserController();
