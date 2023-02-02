import { HTMLTag } from '../types/enums';

export class Element {
  node: HTMLElement;

  constructor(parent: HTMLElement, tag: HTMLTag, className: string, textContent = '', append = true) {
    const elem = document.createElement(tag);
    elem.className = className;
    elem.textContent = textContent;
    if (append) {
      parent.append(elem);
    }
    this.node = elem;
  }

  destroy() {
    this.node.remove();
  }
}
