import { theory } from './../modules/theory';
import { lessonsBlock } from './../modules/lessonsBlock';
import { chat } from './../modules/chat';
import { task } from './../modules/task';
import { getSafeElement } from '../../../utils/helpers';
import { EmitterViewEvents } from '../../../types/enums';
import { emitter } from '../../../utils/emitter';
import sloth from '../../../modules/sloth/sloth';

class LessonsView {
  private root: HTMLElement;

  constructor() {
    const root = document.querySelector('.main__root');
    this.root = getSafeElement(root);

    this.subscribe();
  }

  public render(): void {
    this.root.innerHTML = '';
    const html = document.createElement('div');
    if (html)
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
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-arrow-left-right"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z"
      />
    </svg>
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
                <!-- <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/5V8IeATHr4w"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                      ></iframe> -->
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
    window.addEventListener('DOMContentLoaded', () => {
      sloth.render();
      if (!localStorage.getItem('tutorial')) {
        sloth.showSloth();
      }
    });
  }
  private subscribe() {
    emitter.subscribe(EmitterViewEvents.HOME_UPDATE, this.render.bind(this));
  }
}

export const lessonsView = new LessonsView();
