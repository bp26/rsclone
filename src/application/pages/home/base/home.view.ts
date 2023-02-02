import { homeController } from './home.controller';
import { getSafeElement } from '../../../utils/helpers';
import { Element } from '../../../utils/element';
import { HTMLTag, EmitterViewEvents } from '../../../types/enums';
import { emitter } from '../../../utils/emitter';

class HomeView {
  private root: HTMLElement;

  constructor() {
    const root = document.querySelector('.root');
    this.root = getSafeElement(root);

    this.subscribe();
  }

  public render(): void {
    this.root.innerHTML = '';

    const addButton = new Element(this.root, HTMLTag.BUTTON, 'home__add', 'Add');
    addButton.node.onclick = () => homeController.add();
  }

  private subscribe() {
    emitter.subscribe(EmitterViewEvents.HOME_UPDATE, this.render.bind(this));
  }
}

export const homeView = new HomeView();
