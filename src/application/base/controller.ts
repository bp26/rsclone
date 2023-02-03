import { layoutController } from '../pages/layout/base/layoutController';
import { homeController } from '../pages/home/base/home.controller';

class Controller {
  constructor() {
    layoutController.init();
  }

  public initLayoutContent(): void {
    layoutController.init();
  }

  public initHomePage(): void {
    homeController.init();
  }

  public initDocumentationPage(): void {
    //
  }

  public initLessonsPage(): void {
    //
  }

  public initUserPage(): void {
    //
  }

  public initRoadmapPage(): void {
    //
  }
}

export const controller = new Controller();
