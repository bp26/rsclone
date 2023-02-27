import { HTMLTag } from '../../types/enums';
import { Element } from '../../utils/element';
import { queryHTMLElement } from '../../utils/helpers';

class Preloader {
  public init() {
    const preloader = new Element(document.body, HTMLTag.DIV, 'preloader');
    const circle = new Element(preloader.node, HTMLTag.DIV, 'preloader__circle');
  }

  public show() {
    const preloader = queryHTMLElement('.preloader');
    preloader.classList.remove('d-none');
  }

  public hide() {
    const preloader = queryHTMLElement('.preloader');
    preloader.classList.add('d-none');
  }
}

export const preloader = new Preloader();
