import { headerView } from './header.view';

class HeaderController {
  public init(): void {
    headerView.render();
  }
}

export const headerController = new HeaderController();
