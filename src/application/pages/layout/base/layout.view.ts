import { layoutHeaderView } from '../modules/layout.header.view';
import { layoutFooterView } from '../modules/layout.footer.view';
import { Sprite } from '../modules/sprite';
import { EmitterViewEvents } from '../../../types/enums';
import { emitter } from '../../../utils/emitter';

class LayoutView {
  constructor() {
    const spritesIgnore = new Sprite();
    this.subscribe();
  }

  public render(): void {
    layoutHeaderView.render();
    layoutFooterView.render();
  }

  private subscribe() {
    emitter.subscribe(EmitterViewEvents.LAYOUT_UPDATE, this.render.bind(this));
  }
}

export const layoutView = new LayoutView();
