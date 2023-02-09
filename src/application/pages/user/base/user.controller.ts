import { userModel } from './user.model';
import { userView } from './user.view';

class UserController {
  public add(): void {
    userModel.add();
  }

  public init(): void {
    userView.render();
    this.initChilden();
  }

  private initChilden(): void {
    // chatController.init()
    // menuController.init()
  }
}

export const userController = new UserController();
