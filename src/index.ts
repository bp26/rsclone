import { task } from './application/pages/lessons/modules/task';
import { getSafeElement } from './application/utils/helpers';
import { controller } from './application/base/controller';
import './index.scss';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import './assets/svg/RangBabe.svg';
import './assets/svg/coin.svg';
import './assets/svg/Profile.svg';
import './assets/svg/sloth.svg';
import router from './application/router/router';

(function () {
  controller.init();
  router.locationHandler();
})();

document.body.innerHTML = '';
interface Lessons {
  id: number;
  title: string;
  description: string;
  price: string;
  buttonsArray: Array<string>;
  answer: string;
  answerBlock: () => void;
  selector: string;
}

const functionString = `function() {

}
`;
const ifString = `if() {

}`;
const lesson1: Lessons = {
  id: 1,
  title: 'Working with variables',
  description: `    1. Declare a variables: admin. <br />
  2. Declare a variable:  name <br />
    3. Assign the value "John" to name.<br />
    4. Copy the value from name to admin.<br />
    5. Show the value of admin using alert (must output “John”).`,
  price: '2',
  buttonsArray: ['let ', 'const ', 'admin ', 'name ', 'John;', 'alert', '= ', '(', ')', 'space', 'delete', 'white-space', ';', 'clear', '{', '}', 'function()', 'if'],
  answer: `
let admin;
let name;
name = John;
admin = name;
alert(admin);
`,
  answerBlock: () => {
    return `
  <div>let admin;</div>
  <div>let name;</div>
<div>name = John;</div>
<div>admin = name;</div>
<div>alert(admin);</div>
  `;
  },
  selector: 'body',
};

const lesson2: Lessons = {
  id: 2,
  title: 'Working with variables2',
  description: ` 1. Declare a variables: admin. <br />
  2. Declare a variable:  name <br />
    3. Assign the value "John" to name.<br />
    4. Copy the value from name to admin.<br />
    5. Show the value of admin using alert (must output “John”).`,
  price: '2',
  buttonsArray: ['let ', 'const ', 'admin ', 'name ', 'John;', 'alert', '= ', '(', ')', 'space', 'delete', 'white-space', ';', 'clear'],
  answer: `let admin;
  let name;
name = John;
admin = name;
alert(admin);
`,
  answerBlock: () => {
    return `
  <div>let admin;</div>
  <div>let name;</div>
<div>name = John;</div>
<div>admin = name;</div>
<div>alert(admin);</div>
  `;
  },
  selector: 'body',
};

enum Colors {
  WARNING = 'warning',
  DARK = 'dark',
  DANGER = 'danger',
  PRIMARY = 'primary',
  SUCCESS = 'success',
}
class Task {
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
      const indexColor = this.getRundomNumberForColor();
      buttonsBlockContent += `<button data-task-buttons="${this.id}" draggable="true" class="btn-drag btn btn-${this.colors[indexColor]} m-1 btn-controller">${el}</button>`;
    });
    return buttonsBlockContent;
  }

  getRundomNumberForColor() {
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
        <button class="btn btn-primary init-button${this.id}" type="button" data-bs-toggle="collapse" data-bs-target="#task${this.id}" aria-expended="false" aria-controls="task${this.id}">Show task</button>
        </div>
      </div>
    `;
    const taskBlock = document.createElement('div');
    taskBlock.innerHTML = `<div class="container collapse" id="task${this.id}">
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
        <div class="card card-body">
          ${this.answerBlock()}
        </div>
      </div>
      <hr />
    </div>
  </div>
</div>
`;
    const root = getSafeElement(document.querySelector(`${this.selector}`));
    root.append(initLesson);
    root.append(taskBlock);
    const initButton = getSafeElement(document.querySelector(`.init-button${this.id}`));
    initButton.addEventListener('click', () => {
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
      textareaContent === answer ? this.changeBorderByAnswer(true) : this.changeBorderByAnswer(false);
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
        } else if (content === 'function()') {
          content = functionString;
        } else if (content === 'if') {
          content = ifString;
        }
        textarea.value += content;
        textarea.focus();
        textarea.setSelectionRange(textarea.value.length, textarea.value.length);
      });
    });
  }

  timerForAnswer() {
    const currentElement = getSafeElement(document.querySelector(`[data-task-timer="${this.id}"]`));
    const intervarID = setInterval(() => {
      this.startTimer -= 1;
      currentElement.textContent = String(this.startTimer);
      if (currentElement.textContent === '0') {
        document.querySelector(`[data-task-loader="${this.id}"]`)?.remove();
        const currentButton = document.querySelector(`[data-task-btn-timer="${this.id}"]`) as HTMLButtonElement;
        if (currentButton) currentButton.disabled = false;
        currentButton.innerText = 'Check answer';
        clearInterval(intervarID);
      }
    }, 1000);

    return this.startTimer;
  }
  resetBorderTextarea() {
    const textarea = getSafeElement(document.querySelector(`[data-task-textarea="${this.id}"]`)) as HTMLTextAreaElement;
    textarea.style.borderColor = 'black';
  }
  changeBorderByAnswer(result: boolean) {
    const textarea = getSafeElement(document.querySelector(`[data-task-textarea="${this.id}"]`)) as HTMLTextAreaElement;
    if (result) {
      textarea.style.border = '3px solid green';
      // render modal
    } else {
      textarea.style.border = '3px solid red';
    }
  }
}

const lesson = new Task(lesson1);
const lesson22 = new Task(lesson2);
lesson.render();
lesson22.render();

class TaskDrag {
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
      buttonsBlockContent += `<button data-task-buttons="${this.id}" draggable="true" class="btn-drag btn btn-${this.colors[indexColor]} m-1 btn-controller">${el}</button>`;
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
        <button class="btn btn-primary init-button${this.id}" type="button" data-bs-toggle="collapse" data-bs-target="#task${this.id}" aria-expended="false" aria-controls="task${this.id}">Show task</button>
        </div>
      </div>
    `;
    const taskBlock = document.createElement('div');
    taskBlock.innerHTML = `<div class="container collapse" id="task${this.id}">
  <div class="tasks">
    <h4 class="task__title">${this.title}</h4>
    <p class="task__price">Price: ${this.price} points</p>
    <p class="tast__description">${this.description}</p>
    <div class="mb-3">
      <div class="bg-warning w-100 rounded-4 p-2 task-area-${this.id}" data-drag-area="${this.id}" style="min-height:200px">
      <div class="container">
        <div class="row m-1 gap-2" style="min-height:20px">
            <div class="col bg-light rounded-4  put-area box"></div>
        </div>
        <div class="row m-1 gap-2" style="min-height:20px">
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
        <div class="card card-body">
          ${this.answerBlock()}
        </div>
      </div>
      <hr />
    </div>
  </div>
</div>
`;
    const root = getSafeElement(document.querySelector(`${this.selector}`));
    root.append(initLesson);
    root.append(taskBlock);
    const initButton = getSafeElement(document.querySelector(`.init-button${this.id}`));
    initButton.addEventListener('click', () => {
      this.timerForAnswer();
    });
    const buttonsBlock = getSafeElement(document.querySelector(`[data-drag-buttons-block="${this.id}"]`));
    const buttonsController = document.querySelectorAll(`[data-task-buttons="${this.id}"]`);
    const taskAreaElements = document.querySelectorAll(`.task-area-${this.id}  .box`);

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

    const submit = getSafeElement(document.querySelector(`[data-task-submit="${this.id}"]`));
    submit.addEventListener('click', this.submitTask);

    const area = getSafeElement(document.querySelector(`[data-drag-area="${this.id}"]`));
    area.addEventListener('dragover', () => {
      area.style.border = 'none';
    });
  }

  timerForAnswer() {
    const currentElement = getSafeElement(document.querySelector(`[data-task-timer="${this.id}"]`));
    const intervalID = setInterval(() => {
      this.startTimer -= 1;
      currentElement.textContent = String(this.startTimer);
      if (currentElement.textContent === '0') {
        document.querySelector(`[data-task-loader="${this.id}"]`)?.remove();
        const currentButton = document.querySelector(`[data-task-btn-timer="${this.id}"]`) as HTMLButtonElement;
        if (currentButton) currentButton.disabled = false;
        currentButton.innerText = 'Check answer';
        clearInterval(intervalID);
      }
    }, 1000);
    return this.startTimer;
  }

  submitTask = () => {
    let result = '';
    const area = getSafeElement(document.querySelector(`[data-drag-area="${this.id}"]`));
    const areaContent = area.querySelectorAll('button');
    areaContent.forEach((elem) => {
      result += elem.textContent;
    });
    result = result.replace(/[\s\n\r]+/g, '');
    const answer = this.answer.replace(/[\s\n\r]+/g, '');
    answer === result ? this.changeBorderByAnswer(true) : this.changeBorderByAnswer(false);
  };

  resetBorderArea() {
    const taskArea = getSafeElement(document.querySelector(`[data-drag-area="${this.id}"]`)) as HTMLDivElement;
    taskArea.style.borderColor = 'black';
  }
  changeBorderByAnswer(result: boolean) {
    const taskArea = getSafeElement(document.querySelector(`[data-drag-area="${this.id}"]`)) as HTMLDivElement;
    console.log(taskArea);
    if (result) {
      taskArea.style.border = '3px solid green';
      // render modal
    } else {
      taskArea.style.border = '3px solid red';
    }
  }
}
const lesson3: Lessons = {
  id: 3,
  title: 'Drag',
  description: ` 1. Declare a variables: admin. <br />
  2. Declare a variable:  name <br />`,
  price: '2',
  buttonsArray: ['let ', 'let ', 'admin; ', 'name; '],
  answer: `
  let admin;
  let name;
`,
  answerBlock: () => {
    return `
  <div>let admin;</div>
  <div>let name;</div>
  `;
  },
  selector: 'body',
};

const lessonDrag = new TaskDrag(lesson3);
lessonDrag.render();

class TaskBoolean {
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
      const indexColor = this.getRundomNumberForColor();
      buttonsBlockContent += `<button data-task-buttons="${this.id}" draggable="true" class="btn-drag btn btn-${this.colors[indexColor]} m-1 btn-controller">${el}</button>`;
    });
    return buttonsBlockContent;
  }

  getRundomNumberForColor() {
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
        <button class="btn btn-primary init-button${this.id}" type="button" data-bs-toggle="collapse" data-bs-target="#task${this.id}" aria-expended="false" aria-controls="task${this.id}">Show task</button>
        </div>
      </div>
    `;
    const taskBlock = document.createElement('div');
    taskBlock.innerHTML = `<div class="container collapse" id="task${this.id}">
  <div class="tasks">
    <h4 class="task__title">${this.title}</h4>
    <p class="task__price">Price: ${this.price} points</p>
    <div class="mb-3">
      <textarea
        data-task-textarea="${this.id}"
        class="form-control bg-secondary text-light mb-3"
        id="exampleFormControlTextarea1"
        rows="5"
        style="resize: none"
      >${this.description.trim()}</textarea>
      <div class="buttons-block">
        ${this.generatorButtons(this.buttonsArray)}
      </div>
      <hr />
    </div>
  </div>
</div>
`;
    const root = getSafeElement(document.querySelector(`${this.selector}`));
    root.append(initLesson);
    root.append(taskBlock);

    const answerButton = document.querySelectorAll(`[data-task-buttons="${this.id}"]`);
    const arr = [this.answer];
    answerButton.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const target = e.target as Element;
        console.log(target.textContent);
        if (typeof this.answer === 'string') {
          this.answer = '' + this.answer;
        }
        console.log(arr[0]);
        target.textContent === this.answer ? this.changeBorderByAnswer(true) : this.changeBorderByAnswer(false);
      });
    });
  }

  resetBorderTextarea() {
    const textarea = getSafeElement(document.querySelector(`[data-task-textarea="${this.id}"]`)) as HTMLTextAreaElement;
    textarea.style.borderColor = 'black';
  }
  changeBorderByAnswer(result: boolean) {
    const textarea = getSafeElement(document.querySelector(`[data-task-textarea="${this.id}"]`)) as HTMLTextAreaElement;
    if (result) {
      textarea.style.border = '3px solid green';
      // render modal
    } else {
      textarea.style.border = '3px solid red';
    }
  }
}
const lesson4: Lessons = {
  id: 4,
  title: 'Console',
  description: `String(true)`,
  price: '2',
  buttonsArray: ['true', 'false', '"true"', 'string'],
  answer: '"true"',
  answerBlock: () => {
    return ``;
  },
  selector: 'body',
};
const lessonBoolean1 = new TaskBoolean(lesson4);
lessonBoolean1.render();

const lesson5: Lessons = {
  id: 5,
  title: 'Console',
  description: `Boolean (undefined)`,
  price: '2',
  buttonsArray: ['true', 'false', 'undefined', '0', '1'],
  answer: 'true',
  answerBlock: () => {
    return ``;
  },
  selector: 'body',
};
const lessonBoolean2 = new TaskBoolean(lesson5);
lessonBoolean2.render();
