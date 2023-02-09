import { Sprite } from '../ui/sprite/sprite';
import { userController } from './../pages/user/base/user.controller';
import { lessonsController } from './../pages/lessons/base/lessons.controller';
import { headerController } from '../modules/header/base/header.controller';
import { footerController } from '../modules/footer/base/footer.controller';
import { homeController } from '../pages/home/base/home.controller';

class Controller {
  public init() {
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
