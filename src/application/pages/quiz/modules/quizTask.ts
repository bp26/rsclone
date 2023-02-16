import { IQuiz } from './../base/quiz.view';
import { getSafeElement } from './../../../utils/helpers';

export class QuizTask {
  root: HTMLElement;
  time: number;
  tasks: IQuiz[];
  currentTask: number;
  constructor(tasks: IQuiz[]) {
    this.root = getSafeElement(document.querySelector('.quiz-task'));
    this.time = 5;
    this.currentTask = 0;
    this.tasks = tasks;
  }

  getAnswers() {
    let answerBlocks = '';
    this.tasks[this.currentTask].answerBlocks.forEach((el) => {
      answerBlocks += `<button quiz-button="${this.tasks[this.currentTask].id}" class="btn btn-secondary m-2">${el}</button>`;
    });
    return answerBlocks;
  }

  generatorTasks() {
    const html = document.createElement('div');
    html.className = 'card bg-dark w-25 text-center';
    html.innerHTML = `
    <div class="quiz-timer">${this.time}</div>
        <div class="card-body">
          <p class="bg-secondary rounded-2">${this.tasks[this.currentTask].description}</p>
        <div>${this.getAnswers()}</div>
       </div>
      `;
    return html;
  }

  init() {
    const html = this.generatorTasks();
    this.root.append(html);
    const initButton = document.querySelector('.quiz-init') as HTMLElement;
    const currentTime = document.querySelector('.quiz-timer');

    const timerID = setInterval(() => {
      this.time--;
      currentTime!.textContent = String(this.time);
      console.log(this.time);
      if (this.time < 1) {
        clearInterval(timerID);
        if (document.querySelector('.quiz-task')) {
          document.querySelector('.quiz-task')?.remove();
        }
        console.log(initButton);
        initButton.style.display = 'inline-block';
        this.time = 10;
        this.currentTask = 0;
      }
    }, 1000);

    const quizButtons = document.querySelectorAll(`[quiz-button="${this.tasks[this.currentTask].id}"]`);
    quizButtons.forEach((elem) => {
      elem.addEventListener('click', (e) => {
        const target = e.target as Element;

        if (target.textContent === this.tasks[this.currentTask].answer) {
          this.currentTask += 1;
          target.parentElement?.parentElement?.parentElement?.remove();
          if (this.currentTask < this.tasks.length) {
            clearInterval(timerID);
            this.time = 10;
            this.init();
          } else if (this.currentTask === this.tasks.length) {
            initButton.style.display = 'inline-block';
            alert('SUCCESS');
          }
        } else {
          alert('ERROR');
          clearInterval(timerID);
          this.time = 10;
          this.currentTask = 0;
          target.parentElement?.parentElement?.parentElement?.remove();
          initButton.style.display = 'inline-block';
        }
      });
    });
  }
}
