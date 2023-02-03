import { LayoutHeaderView } from '../modules/layoutHeaderView';
import { LayoutFooterView } from '../modules/layoutFooterView';
import { Sprite } from '../modules/sprite';
import { EmitterViewEvents } from '../../../types/enums';
import { emitter } from '../../../utils/emitter';

class LayoutView {
  private layoutHeaderView: LayoutHeaderView;
  private layoutFooterView: LayoutFooterView;
  constructor() {
    this.layoutHeaderView = new LayoutHeaderView();
    this.layoutFooterView = new LayoutFooterView();
    const spritesIgnore = new Sprite();

    this.subscribe();
  }

  public render(): void {
    this.layoutHeaderView.render();
    this.layoutFooterView.render();
  }

  private subscribe() {
    emitter.subscribe(EmitterViewEvents.LAYOUT_UPDATE, this.render.bind(this));
  }
}

export const layoutView = new LayoutView();
