import { footerView } from './footer.view';

class FooterController {
  public init(): void {
    footerView.render();
  }
}

export const footerController = new FooterController();
