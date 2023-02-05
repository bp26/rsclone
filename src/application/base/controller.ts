import { Sprite } from './../pages/layout/modules/sprite';
import router from '../router/router';
import { userController } from './../pages/user/base/user.controller';
import { lessonsController } from './../pages/lessons/base/lessons.controller';
import { headerController } from '../pages/layout/base/header.controller';
import { footerController } from '../pages/layout/base/footer.controller';
import { homeController } from '../pages/home/base/home.controller';

class Controller {
  init() {
    headerController.init();
    footerController.init();
    new Sprite();
  }
  public initHomePage(): void {
    homeController.init();
  }

  public initDocumentationPage(): void {
    //
  }

  public initLessonsPage(): void {
    lessonsController.init();
  }

  public initUserPage(): void {
    userController.init();
  }

  public initRoadmapPage(): void {
    //
  }
}

export const controller = new Controller();
