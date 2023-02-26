import { getSafeElement } from './../../../utils/helpers';
import { exampleTutorial } from './../../../utils/constants/slothExampleTutorialArray';
import { TaskBoolean } from './../modules/tasks/boolean/booleanTask';
import { lessonsDrag } from './../modules/tasks/drag/data';
import { lessonsWrite } from './../modules/tasks/write/data';
import { TaskDrag } from './../modules/tasks/drag/dragTask';
import { TaskWrite } from './../modules/tasks/write/writeTask';
import { leftAndRight } from '../../../utils/constants/icons/letftAndRightArrows';
import { lessonsBlock } from './../modules/lessonsBlock';
import { queryHTMLElement } from '../../../utils/helpers';
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
    class="position-sticky btn btn-primary lessons-bs align-self-flex-start"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#lessonsBlock"
    aria-expanded="false"
    aria-controls="lessonsBlock"
    style="z-index:3"
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
</div>
`;

    this.root.append(html);
    this.bind();
  }

  bind() {
    const lessonsButtons = document.querySelectorAll('.lessons-btn');
    lessonsButtons.forEach((el) => {
      el.addEventListener('click', () => {
        const currentLesson = el.getAttribute('lesson-btn') as string;
        this.openLesson(currentLesson);
      });
    });
  }

  openLesson(lesson: string) {
    const root = queryHTMLElement('.content-inner');
    const key = `lesson${lesson}`;

    if (key in lessonsContent) {
      const theory = lessonsContent[key].theory;
      root.innerHTML = theory;

      const practice = lessonsContent[key].tasks;
      practice.forEach((task) => {
        if (task.Write?.length) {
          this.renderWriteTasks(task.Write, lesson);
        }
        if (task.Drag?.length) {
          this.renderDragTasks(task.Drag, lesson);
        }
        if (task.Boolean?.length) {
          this.renderBooleanTasks(task.Boolean, lesson);
        }
      });

      this.collapse();
    }
  }

  collapse() {
    const btnBS = queryHTMLElement('.js-collapse');
    const BS = new Collapse(btnBS);
    BS.hide();
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
