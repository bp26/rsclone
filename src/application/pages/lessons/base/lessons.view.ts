import { leftAndRight } from './../../../utils/constants/arrows/letftAndRightArrows';
import { theory } from './../modules/theory';
import { lessonsBlock } from './../modules/lessonsBlock';
import { chat } from '../modules/chat';
import { task } from './../modules/task';
import { getSafeElement } from '../../../utils/helpers';
import { EmitterEventName } from '../../../types/enums';
import { emitter } from '../../../utils/emitter';
import sloth from '../../../modules/sloth/sloth';

class LessonsView {
  private root: HTMLElement;

  constructor() {
    const root = document.querySelector('.main__root');
    this.root = getSafeElement(root);
  }

  public render(): void {
    this.root.innerHTML = '';
    const html = document.createElement('div');
    html.innerHTML = `
<div class="container-fluid">
  <button
    class="btn btn-primary position-absolute d-flex align-items-center justify-content-center rounded-end"
    style="z-index: 50"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#collapseWidthExample"
    aria-expanded="false"
    aria-controls="collapseWidthExample"
  >
    ${leftAndRight}
  </button>
  <div class="row position-relative vh-100">
    ${lessonsBlock.render()}
    <div class="col-md-8 mx-auto">
      <div id="carouselExampleFade" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="content-block p-4">
              <h3 class="text-center">Variable</h3>
              <div
                class="d-flex align-items-center justify-content-center task__video m-auto mb-5 h-md-30"
              >
                <iframe
                  class="w-md-80 h-md-30"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/5V8IeATHr4w"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <div class="theory">
                  ${theory.render()}
               </div>
              <div
                class="content-controller d-flex align-items-center justify-content-end"
              >
                <button
                  class="switch-button btn btn-primary"
                  type="button"
                  data-bs-target="#carouselExampleFade"
                  data-bs-slide="next"
                >
                  <span aria-hidden="true">Let's Practice</span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="content-block p-5">
              <h3>Tasks</h3>
              <div
                class="d-flex align-items-center justify-content-center task__video m-auto mb-5"
              >
              </div>
                ${task.render()}
                <div
                  class="content-controller d-flex align-items-center justify-content-end"
                >
                  <button
                    class="switch-button btn btn-primary d-block me-auto"
                    type="button"
                    data-bs-target="#carouselExampleFade"
                    data-bs-slide="prev"
                  >
                    <span aria-hidden="true">Back to theory</span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
    ${chat.render()}
    </div>
  </div>
</div>
`;

    this.root.append(html);
    sloth.render();
  }
}

export const lessonsView = new LessonsView();
