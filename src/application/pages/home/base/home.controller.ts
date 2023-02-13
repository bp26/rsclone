import { homeModel } from './home.model';
import { homeView } from './home.view';

class HomeController {
  public init(): void {
    homeView.render();
    this.initChilden();
  }

  private initChilden(): void {
    // chatController.init()
    // menuController.init()
  }
}

export const homeController = new HomeController();
