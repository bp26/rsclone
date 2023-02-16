import { TaskBoolean } from './../modules/tasks/boolean/booleanTask';
import { lessonsDrag } from './../modules/tasks/drag/data';
import { lessonsWrite } from './../modules/tasks/write/data';
import { TaskDrag } from './../modules/tasks/drag/dragTask';
import { TaskWrite } from './../modules/tasks/write/writeTask';
import { getSafeElement } from './../../../utils/helpers';
import { leftAndRight } from '../../../utils/constants/icons/letftAndRightArrows';
import { lessonsBlock } from './../modules/lessonsBlock';
import { chat } from '../modules/chat';
import { queryHTMLElement } from '../../../utils/helpers';
import sloth from '../modules/sloth/sloth';
import { Collapse } from 'bootstrap';
import { lessonsBoolean } from '../modules/tasks/boolean/data';
import { lessonsContent } from '../modules/lessons/lessonsContent';
import { LessonAvalailability } from '../../../types/interfaces';

class LessonsView {
  private root: HTMLElement;

  constructor() {
    this.root = queryHTMLElement('.main__root');
  }

  public render(lessonAvailbility: LessonAvalailability[]): void {
    this.root.innerHTML = '';
    const html = document.createElement('div');
    html.innerHTML = `
<div class="container-fluid position-relative">
  ${lessonsBlock.render(lessonAvailbility)}
  <button
    class="position-absolute btn btn-primary lessons-bs"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#lessonsBlock"
    aria-expanded="false"
    aria-controls="lessonsBlock"
    style="z-index: 3"
  >
    ${leftAndRight}
  </button>
  <div>
    <div class="col-md-12 mx-auto">
      <div id="carouselExampleFade" class="carousel slide">
        <div class="carousel-inner content-inner">
          <div class="text-center mt-5 fs-1">Choose a lesson</div>
        </div>
      </div>
    </div>
  </div>
  <div class="container">${chat.render()}</div>
</div>
`;

    this.root.append(html);
    sloth.render();

    const lessonsButtons = document.querySelectorAll('.lessons-btn');
    lessonsButtons.forEach((el) => {
      el.addEventListener('click', () => {
        const btnBS = getSafeElement(document.querySelector('.js-collapse'));
        const BS = new Collapse(btnBS);
        BS.hide();
        const root = getSafeElement(document.querySelector('.content-inner'));
        const currentLesson = el.getAttribute('lesson-btn') as string;
        for (const key in lessonsContent) {
          if (key === `lesson${currentLesson}`) {
            const theory = lessonsContent[key].theory;
            const practice = lessonsContent[key].tasks;
            const content = `${theory}`;
            if (currentLesson) root.innerHTML = content;
            practice.forEach((task) => {
              if (task.Write?.length) {
                this.renderWriteTasks(task.Write, currentLesson);
              }
              if (task.Drag?.length) {
                this.renderDragTasks(task.Drag, currentLesson);
              }
              if (task.Boolean?.length) {
                this.renderBooleanTasks(task.Boolean, currentLesson);
              }
            });
          }
        }
      });
    });
  }

  renderWriteTasks(array: number[], currentLesson: string) {
    array.forEach((elem) => {
      lessonsWrite.forEach((el) => {
        if (el.id === elem) {
          new TaskWrite(lessonsWrite[el.id - 1], currentLesson).render();
        }
      });
    });
  }

  renderDragTasks(array: number[], currentLesson: string) {
    array.forEach((elem) => {
      lessonsDrag.forEach((el) => {
        if (el.id === elem) {
          new TaskDrag(lessonsDrag[el.id - 1], currentLesson).render();
        }
      });
    });
  }

  renderBooleanTasks(array: number[], currentLesson: string) {
    array.forEach((elem) => {
      lessonsBoolean.forEach((el) => {
        if (el.id === elem) {
          new TaskBoolean(lessonsBoolean[el.id - 1], currentLesson).render();
        }
      });
    });
  }
}

export const lessonsView = new LessonsView();
