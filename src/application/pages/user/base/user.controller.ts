import { validatePassword } from '../../../utils/validation';
import { userModel } from './user.model';
import { userView } from './user.view';

class UserController {
  public init(): void {
    userView.render(userModel.init());
  }

  public changePassword(password: string) {
    const validation = validatePassword(password);
    if (!validation.isValid) {
      userView.showPasswordError(validation.message);
    }
  }

  public changeChatSettings(color: string, notificationsOn: boolean) {
    console.log(color, notificationsOn);
  }
}

export const userController = new UserController();
