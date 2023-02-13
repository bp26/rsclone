import { Lessons } from '../../../../../types/interfaces';
import { getSafeElement } from '../../../../../utils/helpers';
import { Colors } from '../../../../../types/enums';

export class TaskBoolean {
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
  constructor({ id, title, description, price, buttonsArray, answer, answerBlock, selector }: Lessons) {
    this.id = id;
    this.colors = [Colors.WARNING, Colors.DARK, Colors.DANGER, Colors.SUCCESS];
    this.title = title;
    this.description = description;
    this.price = price;
    this.buttonsArray = buttonsArray;
    this.answer = answer;
    this.startTimer = 10;
    this.answerBlock = answerBlock;
    this.selector = selector;
  }

  generatorButtons(arr: Array<string>) {
    let buttonsBlockContent = '';
    arr.forEach((el) => {
      const indexColor = this.getRandomNumberForColor();
      buttonsBlockContent += `<button data-task-boolean-buttons="${this.id}"  class="btn btn-${this.colors[indexColor]} m-1 btn-controller">${el}</button>`;
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
<div class="card-body">
  <div class="card-title text-center">${this.title}</div>
    <div class="card-text text-center">
    <button class="btn btn-primary init-boolean-button${this.id}" type="button" data-bs-toggle="collapse" data-bs-target="#task-boolean-${this.id}" aria-expended="false" aria-controls="task-boolean-${this.id}">Show task</button>
  </div>
</div>
    `;
    const taskBlock = document.createElement('div');
    taskBlock.innerHTML = `
<div class="container collapse" id="task-boolean-${this.id}">
  <div class="tasks">
    <h4 class="task__title">${this.title}</h4>
    <p class="task__price">Price: ${this.price} points</p>
    <div class="mb-3">
      <span
        data-task-boolean-textarea="${this.id}"
        class="form-control bg-secondary text-light mb-3"
        id="exampleFormControlTextarea1"
        rows="5"
        style="resize: none"
      >${this.description.trim()}</span>
      <div class="buttons-block">
        ${this.generatorButtons(this.buttonsArray)}
      </div>
    </div>
  </div>
</div>
`;

    const root = getSafeElement(document.querySelector(`${this.selector}`));
    root.append(initLesson);
    root.append(taskBlock);

    const initButton = getSafeElement(document.querySelector(`.init-boolean-button${this.id}`));

    initButton.addEventListener('click', () => {
      this.toggleInitButton(initButton);
    });

    const answerButton = document.querySelectorAll(`[data-task-boolean-buttons="${this.id}"]`);

    answerButton.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const target = e.target as Element;
        if (typeof this.answer === 'string') {
          this.answer = '' + this.answer;
        }
        target.textContent === this.answer ? this.changeBorderByAnswer(true) : this.changeBorderByAnswer(false);
      });
    });
  }

  toggleInitButton = (element: Element) => {
    element.textContent === 'Show task' ? (element.textContent = 'Hidden task') : (element.textContent = 'Show task');
  };

  resetBorderTextarea() {
    const textarea = getSafeElement(document.querySelector(`[data-task-boolean-textarea="${this.id}"]`)) as HTMLTextAreaElement;
    textarea.style.borderColor = 'black';
  }

  changeBorderByAnswer(result: boolean) {
    const textarea = getSafeElement(document.querySelector(`[data-task-boolean-textarea="${this.id}"]`)) as HTMLTextAreaElement;
    result ? (textarea.style.border = '3px solid green') : (textarea.style.border = '3px solid red');
  }
}
