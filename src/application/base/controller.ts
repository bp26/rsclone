import { Sprite } from '../ui/sprite/sprite';
import { userController } from './../pages/user/base/user.controller';
import { lessonsController } from './../pages/lessons/base/lessons.controller';
import { headerController } from '../modules/header/base/header.controller';
import { footerController } from '../modules/footer/base/footer.controller';
import { homeController } from '../pages/home/base/home.controller';
import { roadController } from '../pages/roadmap/base/road.controller';
import { authController } from '../modules/auth/base/auth.controller';
import { model } from './model';
import { preloader } from '../ui/preloader/preloader';

class Controller {
  public async init() {
    preloader.init();

    headerController.init();
    footerController.init();
    authController.init();
    new Sprite();

    await model.init();
    preloader.hide();
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
    roadController.init();
  }
}

export const controller = new Controller();
