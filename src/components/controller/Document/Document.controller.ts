import { DocumentView } from '../../view/Document/Document.view';
export class DocumentController {
  view: DocumentView;
  constructor() {
    this.view = new DocumentView();
  }

  start() {
    this.view.render();
  }
}
