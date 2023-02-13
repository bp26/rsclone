import { userModel } from './user.model';
import { userView } from './user.view';
import { model } from '../../../base/model';

class UserController {
  public init(): void {
    const user = model.user;
    if (user) {
      userView.render(user);
    }

    this.initChilden();
  }

  private initChilden(): void {
    //
  }
}

export const userController = new UserController();
