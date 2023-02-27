import { LessonAvalailability } from '../../../types/interfaces';
import { lock } from '../../../utils/constants/icons/lock';
import { checkmark } from '../../../utils/constants/icons/checkmark';

class LessonsBlock {
  generatorLessons = ({ isOpen, isSolved }: LessonAvalailability, index: number) => {
    const unlocked = '';
    const locked = `<span class="badge">${lock}</span>`;
    const solved = `<span class="badge">${checkmark}</span>`;
    const unsolved = '';
    const html = `
      <button lesson-btn="${index}" class="btn btn-primary button lessons-btn p-2 mb-2 w-75 ${isOpen ? unlocked : 'disabled'}"> Lesson ${index} ${isOpen ? unlocked : locked}${
      isSolved ? solved : unsolved
    } </button>
    `;
    return html;
  };

  render(lessonAvailbility: LessonAvalailability[]) {
    let buttons = '';
    lessonAvailbility.forEach((el, i) => {
      buttons += this.generatorLessons(el, i + 1);
    });
    const html = `
  <div class="position-absolute top-0 start-0 collapse collapse-horizontal show js-collapse" id="lessonsBlock" style="z-index:1;">
    <div class="bg-secondary lessons-block card card-body" style="min-width:300px;">
      <div class="d-flex flex-column align-items-center">
            <p class="mt-5 text-center fw-bold">JavaScript Fundamental</p>
              ${buttons}
          </div>
    </div>
  </div>
    `;
    return html;
  }
}

export const lessonsBlock = new LessonsBlock();
