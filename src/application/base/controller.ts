import { userController } from './../pages/user/base/user.controller';
import { lessonsController } from './../pages/lessons/base/lessons.controller';
import { headerController } from '../pages/layout/base/header.controller';
import { footerController } from '../pages/layout/base/footer.controller';
import { homeController } from '../pages/home/base/home.controller';

class Controller {
  constructor() {
    headerController.init();
    footerController.init();
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
