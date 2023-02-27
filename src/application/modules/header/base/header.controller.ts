import { headerView } from './header.view';
import { model } from '../../../base/model';

class HeaderController {
  public init(): void {
    headerView.render();

    if (model.isAuthenticated && model.user) {
      headerView.renderSignedAuth(model.user);
    }
  }
}

export const headerController = new HeaderController();
