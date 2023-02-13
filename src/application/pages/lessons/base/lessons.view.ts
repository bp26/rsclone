import { TaskBoolean } from './../modules/tasks/boolean/booleanTask';
import { lessonsDrag } from './../modules/tasks/drag/data';
import { lessonsWrite } from './../modules/tasks/write/data';
import { TaskDrag } from './../modules/tasks/drag/dragTask';
import { TaskWrite } from './../modules/tasks/write/writeTask';
import { theory1, theory2, theory3 } from './../modules/lessons/lessons';
import { getSafeElement } from './../../../utils/helpers';
import { leftAndRight } from './../../../utils/constants/arrows/letftAndRightArrows';
import { lessonsBlock } from './../modules/lessonsBlock';
import { chat } from '../modules/chat';
import { queryHTMLElement } from '../../../utils/helpers';
import sloth from '../../../modules/sloth/sloth';
import { Collapse } from 'bootstrap';
import { lessonsBoolean } from '../modules/tasks/boolean/data';

interface TypeTask {
  Write?: number[];
  Drag?: number[];
  Boolean?: number[];
}
interface LessonsContent {
  [key: string]: {
    theory: string;
    tasks: TypeTask[];
  };
}
const lessonsContent: LessonsContent = {
  lesson1: {
    theory: theory1,
    tasks: [
      {
        Write: [1],
      },
      {
        Drag: [1],
      },
      {
        Boolean: [],
      },
    ],
  },
  lesson2: {
    theory: theory2,
    tasks: [
      {
        Write: [],
      },
      {
        Drag: [],
      },
      {
        Boolean: [1, 2, 3],
      },
    ],
  },
  lesson3: {
    theory: theory3,
    tasks: [
      {
        Write: [2],
      },
      {
        Drag: [2, 3],
      },
      {
        Boolean: [],
      },
    ],
  },
};

class LessonsView {
  private root: HTMLElement;

  constructor() {
    this.root = queryHTMLElement('.main__root');
  }

  public render(): void {
    this.root.innerHTML = '';
    const html = document.createElement('div');
    html.innerHTML = `
<div class="container-fluid position-relative">
    ${lessonsBlock.render()}
   <button class="position-absolute btn btn-primary lessons-bs" type="button" data-bs-toggle="collapse" data-bs-target="#lessonsBlock" aria-expanded="false" aria-controls="lessonsBlock" style="z-index:3">
    ${leftAndRight}
  </button>
  <div>
    <div class="col-md-12 mx-auto">

      <div id="carouselExampleFade" class="carousel slide">
        <div class="carousel-inner content-inner">
          <div class="text-center mt-5 fs-1">
              Выберите урок
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
    const lessonsButtons = document.querySelectorAll('.lessons-btn');
    lessonsButtons.forEach((el) => {
      el.addEventListener('click', () => {
        const btnBS = getSafeElement(document.querySelector('.js-collapse'));
        const BS = new Collapse(btnBS);
        BS.hide();
        const root = getSafeElement(document.querySelector('.content-inner'));
        const currentLesson = el.getAttribute('lesson-btn');
        for (const key in lessonsContent) {
          if (key === `lesson${currentLesson}`) {
            const theory = lessonsContent[key].theory;
            const practice = lessonsContent[key].tasks;
            const content = `${theory}`;
            if (currentLesson) root.innerHTML = content;
            practice.forEach((task) => {
              console.log(task);
              if (task['Write']?.length) {
                this.renderWriteTasks(task.Write);
              }
              if (task.Drag?.length) {
                this.renderDragTasks(task.Drag);
              }

              if (task.Boolean?.length) {
                this.renderBooleanTasks(task.Boolean);
              }
            });
          }
        }
      });
    });
  }

  renderWriteTasks(array: number[]) {
    array.forEach((elem) => {
      lessonsWrite.forEach((el, i) => {
        el.id === elem ? new TaskWrite(lessonsWrite[el.id - 1]).render() : '';
      });
    });
  }

  renderDragTasks(array: number[]) {
    array.forEach((elem) => {
      lessonsDrag.forEach((el, i) => {
        el.id === elem ? new TaskDrag(lessonsDrag[el.id - 1]).render() : '';
      });
    });
  }

  renderBooleanTasks(array: number[]) {
    array.forEach((elem) => {
      console.log(elem);
      lessonsBoolean.forEach((el, i) => {
        el.id === elem ? new TaskBoolean(lessonsBoolean[el.id - 1]).render() : '';
      });
    });
  }
}

export const lessonsView = new LessonsView();
