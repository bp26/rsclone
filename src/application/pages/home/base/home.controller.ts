import { homeView } from './home.view';
import { model } from '../../../base/model';
import { lessonsController } from '../../lessons/base/lessons.controller';
import { authController } from '../../../modules/auth/base/auth.controller';

class HomeController {
  public init(): void {
    homeView.render();
  }

  public start() {
    if (model.isAuthenticated) {
      lessonsController.init();
    } else {
      authController.showModal();
    }
  }
}

export const homeController = new HomeController();
