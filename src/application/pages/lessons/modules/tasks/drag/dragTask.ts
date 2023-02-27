import { Task } from '../../../../../types/interfaces';
import { getSafeElement } from '../../../../../utils/helpers';
import { Colors } from '../../../../../types/enums';
import { lessonsController } from '../../../base/lessons.controller';

export class TaskDrag {
  colors: Array<string>;
  id: number;
  title: string;
  description: string;
  price: string;
  buttonsArray: Array<string>;
  answer: string;
  startTimer: number;
  selector: string;
  answerBlock: () => void;
  currentLesson: string;

  constructor({ id, title, description, price, buttonsArray, answer, answerBlock, selector }: Task, currentLesson: string) {
    this.id = id;
    this.colors = [Colors.WARNING, Colors.DANGER, Colors.SUCCESS];
    this.title = title;
    this.description = description;
    this.price = price;
    this.buttonsArray = buttonsArray;
    this.answer = answer;
    this.startTimer = 60;
    this.answerBlock = answerBlock;
    this.selector = selector;
    this.currentLesson = currentLesson;
  }

  generatorButtons(arr: Array<string>) {
    let buttonsBlockContent = '';
    arr.forEach((el) => {
      const indexColor = this.getRandomNumberForColor();
      buttonsBlockContent += `<button data-task-drag-buttons="${this.id}" draggable="true" class="btn-drag btn btn-${this.colors[indexColor]} m-1 btn-controller">${el}</button>`;
    });
    return buttonsBlockContent;
  }

  getRandomNumberForColor() {
    const number = Math.floor(Math.random() * this.colors.length);
    return number;
  }

  render() {
    const initLesson = document.createElement('div');
    initLesson.classList.add('card');
    initLesson.classList.add('rounded-4');
    initLesson.innerHTML = `
<div class="card-body bg-dark rounded-4">
  <div class="card-title text-center">${this.title}</div>
    <div class="card-text text-center">
    <button class="btn btn-primary button init-drag-button${this.id}" type="button" data-bs-toggle="collapse" data-bs-target="#task-drag-${this.id}" aria-expended="false" aria-controls="task-drag-${this.id}">Show task</button>
  </div>
</div>
    `;
    const taskBlock = document.createElement('div');
    taskBlock.innerHTML = `
<div class="container collapse" id="task-drag-${this.id}">
  <div class="tasks">
    <h4 class="task__title">${this.title}</h4>
    <p class="task__price">Price: ${this.price} points</p>
    <p class="task__description">${this.description}</p>
    <div class="mb-3">
      <div class="bg-primary w-100 rounded-4 p-2 task-drag-area-${this.id}" data-drag-area="${this.id}" style="min-height:200px">
      <div class="container">
        <div class="row m-1 gap-2" style="min-height:40px">
            <div class="col bg-light rounded-4  put-area box"></div>
        </div>
        <div class="row m-1 gap-2" style="min-height:40px">
            <div class="col bg-light rounded-4  put-area box"></div>
        </div>
      </div>
      </div>
      <div class="buttons-block" data-drag-buttons-block="${this.id}" style="min-height:50px">
        ${this.generatorButtons(this.buttonsArray)}
      </div>
      <div class="task__footer d-flex m-1">
        <button
          class="btn btn-primary d-block button-timer"
          data-task-drag-btn-timer="${this.id}"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapse-task-drag-${this.id}"
          aria-expanded="false"
          aria-controls="collapse-task-drag-${this.id}"
          disabled
        >
          <span
            class="spinner-grow spinner-grow-sm spinner-loader"
            data-task-drag-loader=${this.id}
            role="status"
            aria-hidden="true"
          ></span>
          <span class="spinner-timer" data-task-drag-timer="${this.id}">${this.startTimer}</span>
        </button>
        <button
          data-task-drag-submit="${this.id}"
          class="btn btn-primary ms-auto d-block ms-auto mt-2"
        >
          Submit
        </button>
      </div>
      <div class="collapse" id="collapse-task-drag-${this.id}">
        <div class="card card-body bg-primary">
          ${this.answerBlock()}
        </div>
      </div>
    </div>
  </div>
</div>
`;

    const root = getSafeElement(document.querySelector(`${this.selector}`));
    root.append(initLesson);
    root.append(taskBlock);

    const initButton = getSafeElement(document.querySelector(`.init-drag-button${this.id}`));

    const buttonsBlock = getSafeElement(document.querySelector(`[data-drag-buttons-block="${this.id}"]`));
    const buttonsController = document.querySelectorAll(`[data-task-drag-buttons="${this.id}"]`);
    const taskAreaElements = document.querySelectorAll(`.task-drag-area-${this.id}  .box`);
    const taskArea = getSafeElement(document.querySelector(`.task-drag-area-${this.id}`));
    const area = getSafeElement(document.querySelector(`[data-drag-area="${this.id}"]`));
    const submit = getSafeElement(document.querySelector(`[data-task-drag-submit="${this.id}"]`));

    initButton.addEventListener('click', () => {
      this.toggleInitButton(initButton);
      this.timerForAnswer(taskArea);
    });

    buttonsBlock.addEventListener('dragover', dragover);
    buttonsBlock.addEventListener('drop', drop);
    buttonsBlock.addEventListener('dragenter', dragenter);
    buttonsBlock.addEventListener('dragleave', dragleave);

    taskAreaElements.forEach((el) => {
      el.addEventListener('dragover', dragover);
      el.addEventListener('drop', drop);
      el.addEventListener('dragenter', dragenter);
      el.addEventListener('dragleave', dragleave);
    });

    function dragover(e: Event) {
      e.preventDefault();
    }

    function drop(e: Event) {
      const target = e.target as Element;
      const activeElement = getSafeElement(document.querySelector('.drag-hidden'));
      if (!target.classList.contains('btn-drag')) {
        target.append(activeElement);
      }
      target.classList.remove('active-border');
    }

    function dragenter(e: Event) {
      const target = e.target as Element;
      target.classList.add('active-border');
    }

    function dragleave(e: Event) {
      const target = e.target as Element;
      target.classList.remove('active-border');
    }

    buttonsController.forEach((button) => {
      button.addEventListener('dragstart', (e) => {
        setTimeout(() => {
          const target = e.target as Element;
          target.classList.add('drag-hidden');
        });
      });

      button.addEventListener('dragend', (e) => {
        setTimeout(() => {
          const target = e.target as Element;
          target.classList.remove('drag-hidden');
        });
      });
    });

    const clickInSubmitButton = () => {
      this.submitTask(taskArea, area);
    };

    submit.addEventListener('click', clickInSubmitButton);

    area.addEventListener('dragover', () => {
      area.style.border = 'none';
    });
  }

  timerForAnswer(textarea: HTMLElement) {
    const currentElement = getSafeElement(document.querySelector(`[data-task-drag-timer="${this.id}"]`));
    const currentButton = getSafeElement(document.querySelector(`[data-task-drag-btn-timer="${this.id}"]`));
    const timer = getSafeElement(document.querySelector(`[data-task-drag-loader="${this.id}"]`));
    if (this.startTimer > Number(currentElement.textContent)) {
      return;
    }
    const intervalID = setInterval(() => {
      currentElement.textContent = String(Number(currentElement.textContent) - 1);
      if (currentElement.textContent === '0' || textarea.getAttribute('status')) {
        timer.remove();
        if (currentButton instanceof HTMLButtonElement) {
          currentButton.disabled = false;
          currentButton.textContent = 'Check answer';
        }
        clearInterval(intervalID);
      }
    }, 1000);
  }

  toggleInitButton = (element: Element) => {
    element.textContent === 'Show task' ? (element.textContent = 'Hidden task') : (element.textContent = 'Show task');
  };

  submitTask = (taskArea: HTMLElement, area: HTMLElement) => {
    let result = '';
    const areaContent = area.querySelectorAll('button');
    areaContent.forEach((elem) => {
      result += elem.textContent;
    });
    result = result.replace(/[\s\n\r]+/g, '');
    const answer = this.answer.replace(/[\s\n\r]+/g, '');
    answer === result ? this.submit(true, taskArea) : this.submit(false, taskArea);
  };

  submit(result: boolean, taskArea: HTMLElement) {
    taskArea.setAttribute('status', `${result ? 'complete' : ''}`);
    taskArea.style.border = `3px solid ${result ? 'green' : 'red'}`;
    result ? lessonsController.submitTask(this.title, this.price, this.currentLesson) : '';
  }
}
