import { lock } from '../../../utils/constants/lock';

class LessonsBlock {
  render() {
    return `
    <div
      class="p-0 col-md-2 lessons-block collapse show collapse-horizontal"
      id="collapseWidthExample"
    >
      <div class="h-100 bg-secondary shadow shadow-offset-end-lg">
        <div class="bg-dark-theme position-relative">
          <div class="d-flex flex-column align-items-center">
            <p class="mt-5 text-center fw-bold">JavaScript Fundamental</p>
            <button class="btn btn-primary p-2 mb-3 w-75">Lessons 1</button>
            <button class="btn btn-primary p-2 mb-3 w-75 disabled">
              Lessons 2
              <span class="badge">
                ${lock}
              </span>
            </button>
            <button class="btn btn-primary p-2 mb-2 w-75 disabled">
              Lessons 3
              <span class="badge"
                >
                ${lock}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
    `;
  }
}

export const lessonsBlock = new LessonsBlock();
