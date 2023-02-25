import { FabricCanvas } from '../modules/fabric-canvas';
import { HTMLTag } from '../../../types/enums';
import { Element } from '../../../utils/element';
import { getSafeElement } from '../../../utils/helpers';
import { RoadData } from '../../../types/interfaces';

class RoadView {
  private root: HTMLElement;
  private wrapFrontMap: Element | undefined;
  constructor() {
    const root = document.querySelector('.main__root');
    this.root = getSafeElement(root);
  }

  public render() {
    this.root.innerHTML = '';
    this.wrapFrontMap = new Element(this.root, HTMLTag.DIV, 'front-wrap');
    const titleFrontMapIgnor = new Element(this.wrapFrontMap.node, HTMLTag.H1, 'front-wrap__title', 'Frontend Roadmap');
    const wrapperCanvas = new Element(this.wrapFrontMap.node, HTMLTag.DIV, 'front-wrap__canvas-wrap');
    const canvas = new Element(wrapperCanvas.node, HTMLTag.CANVAS, '');
    canvas.node.setAttribute('width', `${wrapperCanvas.node.clientWidth}`);
    canvas.node.setAttribute('height', `${wrapperCanvas.node.clientHeight}`);
    if (canvas.node instanceof HTMLCanvasElement) {
      const createFabricIgnor = new FabricCanvas(canvas.node);
    }
  }

  createModal(data: RoadData, color: string) {
    if (this.wrapFrontMap) {
      document.body.classList.add('modal-open');
      const modalWrapClick = new Element(this.root, HTMLTag.DIV, 'modal-wrap-click');
      const modalCont = new Element(this.wrapFrontMap.node, HTMLTag.DIV, 'modal-cont');
      modalCont.node.style.borderColor = color;
      const modalWrap = new Element(modalCont.node, HTMLTag.DIV, 'modal-wrap');

      const blockTitle = new Element(modalWrap.node, HTMLTag.DIV, 'modal-block-title');
      const wrapImage = new Element(blockTitle.node, HTMLTag.DIV, 'modal-image');
      const wrapTitleModal = new Element(blockTitle.node, HTMLTag.DIV, 'modal-wrap-title');
      const blockHeader = new Element(wrapTitleModal.node, HTMLTag.DIV, 'modal-block-header');

      const titleIgnor = new Element(blockHeader.node, HTMLTag.H2, 'modal-title', data.name);
      const buttonClose = new Element(blockHeader.node, HTMLTag.BUTTON, 'modal-button');
      const buttonCloseSpan1Ignor = new Element(buttonClose.node, HTMLTag.SPAN, 'modal-button__span1');
      const buttonCloseSpan2Ignor = new Element(buttonClose.node, HTMLTag.SPAN, 'modal-button__span2');

      const blockCont = new Element(wrapTitleModal.node, HTMLTag.DIV, 'modal-block-main-content');
      const paragraphIgnor = new Element(blockCont.node, HTMLTag.P, 'modal-main-content', data.p1);

      const blockContent = new Element(modalWrap.node, HTMLTag.DIV, 'modal-block-content');
      const blockContentTextIgnor = new Element(blockContent.node, HTMLTag.P, 'modal-block-content__text', data.p2);
      const ul = new Element(blockContent.node, HTMLTag.UL, 'modal-block-content__list');
      for (let i = 0; i < data.links.length; i += 1) {
        const li = new Element(ul.node, HTMLTag.LI, 'modal-list-item');
        const a = new Element(li.node, HTMLTag.A, 'modal-list-item__link', data.name_links[i]);
        a.node.setAttribute('href', data.links[i]);
        a.node.setAttribute('target', '_blank');
      }

      buttonClose.node.onclick = () => {
        document.body.classList.remove('modal-open');
        modalCont.destroy();
        modalWrapClick.destroy();
      };
      modalWrapClick.node.onclick = () => {
        document.body.classList.remove('modal-open');
        modalCont.destroy();
        modalWrapClick.destroy();
      };
    }
  }
}

export const roadView = new RoadView();
