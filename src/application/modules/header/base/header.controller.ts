import { headerView } from './header.view';
import { model } from '../../../base/model';
import { Theme } from '../../../types/enums';

class HeaderController {
  public init(): void {
    headerView.render();

    if (model.isAuthenticated && model.user) {
      headerView.renderSignedAuth(model.user);
    }
  }

  public setTheme(theme: Theme): void {
    model.setTheme(theme);
  }
}

export const headerController = new HeaderController();
