import { HTMLTag } from '../types/enums';

export class Element {
  node: HTMLElement;

  constructor(parent: HTMLElement, tag: HTMLTag, className: string, textContent = '') {
    const elem = document.createElement(tag);
    elem.className = className;
    elem.textContent = textContent;

    parent.append(elem);
    this.node = elem;
  }

  destroy() {
    this.node.remove();
  }
}
