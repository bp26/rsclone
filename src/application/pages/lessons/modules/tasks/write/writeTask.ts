import { lessonsController } from './../../../base/lessons.controller';
import { getSafeElement } from '../../../../../utils/helpers';
import { Task } from '../../../../../types/interfaces';
import { Colors } from '../../../../../types/enums';

export class TaskWrite {
  colors: Array<string>;
  id: number;
  currentLesson: string;
  title: string;
  description: string;
  price: string;
  buttonsArray: Array<string>;
  answer: string;
  startTimer: number;
  selector: string;
  answerBlock: () => void;

  constructor({ id, title, description, price, buttonsArray, answer, answerBlock, selector }: Task, currentLesson: string) {
    this.id = id;
    this.currentLesson = currentLesson;
    this.colors = [Colors.WARNING, Colors.DANGER, Colors.SUCCESS];
    this.title = title;
    this.description = description;
    this.price = price;
    this.buttonsArray = buttonsArray;
    this.answer = answer;
    this.startTimer = 60;
    this.answerBlock = answerBlock;
    this.selector = selector;
  }

  generatorButtons(arr: Array<string>) {
    let buttonsBlockContent = '';
    arr.forEach((el) => {
      const indexColor = this.getRandomNumberForColor();
      buttonsBlockContent += `<button data-task-buttons="${this.id}"  class="btn-drag btn btn-${this.colors[indexColor]} m-1 btn-controller">${el}</button>`;
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
    initLesson.innerHTML = `
<div class="card-body bg-dark ">
  <div class="card-title text-center">${this.title}</div>
    <div class="card-text text-center">
    <button class="btn btn-primary init-write-button${this.id}" type="button" data-bs-toggle="collapse" data-bs-target="#task-write-${this.id}" aria-expended="false" aria-controls="task-write-${this.id}">Show task</button>
  </div>
</div>
    `;
    const taskBlock = document.createElement('div');
    taskBlock.innerHTML = `
<div class="container collapse" id="task-write-${this.id}">
  <div class="tasks">
    <h4 class="task__title">${this.title}</h4>
    <p class="task__price">Price: ${this.price} points</p>
    <p class="tast__description">${this.description}</p>
    <div class="mb-3">
      <textarea
        data-task-textarea="${this.id}"
        class="form-control bg-secondary text-light mb-3"
        id="exampleFormControlTextarea1"
        rows="5"
        style="resize: none"
      ></textarea>
      <div class="buttons-block">
        ${this.generatorButtons(this.buttonsArray)}
      </div>
      <div class="task__footer d-flex m-1">
        <button
          class="btn btn-primary d-block button-timer"
          data-task-btn-timer="${this.id}"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapse-task-${this.id}"
          aria-expanded="false"
          aria-controls="collapse-task-${this.id}"
          disabled
        >
          <span
            class="spinner-grow spinner-grow-sm spinner-loader"
            data-task-loader=${this.id}
            role="status"
            aria-hidden="true"
          ></span>
          <span class="spinner-timer" data-task-timer="${this.id}">${this.startTimer}</span>
        </button>
        <button
          data-task-submit="${this.id}"
          class="btn btn-primary ms-auto d-block ms-auto mt-2"
        >
          Submit
        </button>
      </div>
      <div class="collapse" id="collapse-task-${this.id}">
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

    const initButton = getSafeElement(document.querySelector(`.init-write-button${this.id}`));

    initButton.addEventListener('click', () => {
      this.toggleInitButton(initButton);
      this.timerForAnswer();
    });

    const submit = getSafeElement(document.querySelector(`[data-task-submit="${this.id}"]`));
    const textarea = getSafeElement(document.querySelector(`[data-task-textarea="${this.id}"]`)) as HTMLTextAreaElement;

    textarea.addEventListener('input', () => {
      this.resetBorderTextarea();
    });

    submit.addEventListener('click', () => {
      const textarea = getSafeElement(document.querySelector(`[data-task-textarea="${this.id}"]`)) as HTMLTextAreaElement;
      let textareaContent = textarea.value;
      let answer = this.answer;
      if (textareaContent) textareaContent = textareaContent.replace(/[\s\n\r]+/g, '');
      answer = answer.replace(/[\s\n\r]+/g, '');
      textareaContent === answer ? this.submit(true) : this.submit(false);
    });

    const buttonsController = document.querySelectorAll(`[data-task-buttons="${this.id}"]`);

    buttonsController.forEach((button) => {
      const textarea = getSafeElement(document.querySelector(`[data-task-textarea="${this.id}"]`)) as HTMLTextAreaElement;
      button.addEventListener('click', (e) => {
        this.resetBorderTextarea();
        const target = e.target as HTMLTextAreaElement;
        let content = target.textContent;
        if (content === 'space') {
          content = ' ';
        } else if (content === 'delete') {
          const textAreaContent = textarea.value;
          if (textAreaContent) textarea.value = textAreaContent?.slice(0, textAreaContent.length - 1);
          textarea.focus();
          textarea.setSelectionRange(textarea.value.length, textarea.value.length);
          return;
        } else if (content === 'white-space') {
          const currentValue = textarea.value;
          textarea.value = currentValue + '\n';
          textarea.focus();
          textarea.setSelectionRange(textarea.value.length, textarea.value.length);
          return;
        } else if (content === 'clear') {
          textarea.value = '';
          content = '';
        }
        textarea.value += content;
        textarea.focus();
        textarea.setSelectionRange(textarea.value.length, textarea.value.length);
      });
    });
  }

  timerForAnswer() {
    const textarea = getSafeElement(document.querySelector(`[data-task-textarea="${this.id}"]`));
    const currentElement = getSafeElement(document.querySelector(`[data-task-timer="${this.id}"]`));
    if (this.startTimer > Number(currentElement.textContent)) {
      return;
    }
    const intervalID = setInterval(() => {
      currentElement.textContent = String(Number(currentElement.textContent) - 1);
      if (currentElement.textContent === '0' || textarea.getAttribute('status')) {
        document.querySelector(`[data-task-loader="${this.id}"]`)?.remove();
        const currentButton = document.querySelector(`[data-task-btn-timer="${this.id}"]`) as HTMLButtonElement;
        if (currentButton) {
          currentButton.disabled = false;
          currentButton.innerText = 'Check answer';
        }
        clearInterval(intervalID);
      }
    }, 1000);
  }

  toggleInitButton = (element: Element) => {
    element.textContent === 'Show task' ? (element.textContent = 'Hidden task') : (element.textContent = 'Show task');
  };

  resetBorderTextarea() {
    const textarea = getSafeElement(document.querySelector(`[data-task-textarea="${this.id}"]`));
    textarea.style.borderColor = 'black';
  }

  changeBorderByAnswer(result: boolean) {
    const textarea = getSafeElement(document.querySelector(`[data-task-textarea="${this.id}"]`));
    textarea.style.border = `3px solid ${result ? 'green' : 'red'}`;
  }

  submit(result: boolean) {
    const textarea = getSafeElement(document.querySelector(`[data-task-textarea="${this.id}"]`));
    textarea.setAttribute('status', `${result ? 'complete' : ''}`);
    this.changeBorderByAnswer(result);
    result ? lessonsController.submitTask(this.title, this.price, this.currentLesson) : '';
  }
}
