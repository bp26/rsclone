export class Element {
  node: HTMLElement;
  constructor(parent: HTMLElement, tag: string, className: string, textContent = '') {
    const node = document.createElement(tag);
    node.classList.add(className);
    node.textContent = textContent;
    this.node = node;
    parent.append(node);
  }

  destroy() {
    this.node.remove();
  }
}
