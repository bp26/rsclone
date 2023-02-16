import { homeView } from './home.view';

class HomeController {
  public init(): void {
    homeView.render();
  }
}

export const homeController = new HomeController();
