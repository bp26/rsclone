import { headerView } from './header.view';
import { model } from '../../../base/model';
import { Lang, Theme } from '../../../types/enums';

class HeaderController {
  public init(): void {
    headerView.render();
  }

  public setLang(lang: Lang): void {
    model.setLang(lang);
  }

  public setTheme(theme: Theme): void {
    model.setTheme(theme);
  }
}

export const headerController = new HeaderController();
