import { Quiz } from './../../../types/interfaces';
import { quizErrorTime, quizErrorAnswer, quizComplete } from './../../../utils/constants/slothExampleTutorialArray';
import { getSafeElement } from './../../../utils/helpers';
import sloth from '../../lessons/modules/sloth/sloth';

export class QuizTask {
  root: HTMLElement;
  time: number;
  tasks: Quiz[];
  currentTask: number;
  correctAudio: HTMLAudioElement;
  errorAudio: HTMLAudioElement;
  completeQuizAudio: HTMLAudioElement;
  callback: (value: boolean) => void;
  constructor(tasks: Quiz[], callback: (value: boolean) => void) {
    this.root = getSafeElement(document.querySelector('.quiz-task'));
    this.callback = callback;
    this.time = 5;
    this.currentTask = 0;
    this.tasks = tasks;
    this.correctAudio = new Audio('https://zvukipro.com/uploads/files/2018-10/1540308869_jg-032316-sfx-elearning-correct-answer-sound-1.mp3');
    this.errorAudio = new Audio('https://zvukipro.com/uploads/files/2018-10/1540308965_jg-032316-sfx-elearning-incorrect-answer-sound-3.mp3');
    this.completeQuizAudio = new Audio('https://zvukipro.com/uploads/files/2018-10/1540308514_pole-chudes-priz.mp3');
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
    html.className = 'card bg-dark text-center  d-flex align-items-center justify-content-center inline-block';
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
    const currentTime = getSafeElement(document.querySelector('.quiz-timer'));
    const timerID = setInterval(() => {
      this.time--;
      currentTime.textContent = String(this.time);
      if (this.time < 3) {
        this.initDangerBorder();
      }
      if (this.time < 1) {
        const quizCard = getSafeElement(document.querySelector('.quiz-task .card'));
        if (quizCard) {
          quizCard.remove();
        }
        this.errorAudio.play();
        this.callback(false);
        clearInterval(timerID);
        this.resetTimer();
        this.currentTask = 0;
        sloth.render(quizErrorTime);
        this.showTitleAndButton();
      }
    }, 1000);

    const quizButtons = document.querySelectorAll(`[quiz-button="${this.tasks[this.currentTask].id}"]`);
    quizButtons.forEach((elem) => {
      elem.addEventListener('click', (e) => {
        const target = e.target as Element;
        if (target.textContent === this.tasks[this.currentTask].answer) {
          this.correctAudio.currentTime = 0;
          this.correctAudio.play();
          this.currentTask += 1;
          getSafeElement(document.querySelector('.card')).remove();
          if (this.currentTask < this.tasks.length) {
            clearInterval(timerID);
            this.resetTimer();
            this.init();
          } else if (this.currentTask === this.tasks.length) {
            this.callback(false);
            clearInterval(timerID);
            this.resetTimer();
            sloth.render(quizComplete);
            this.showTitleAndButton();
          }
        } else {
          this.errorAudio.play();
          clearInterval(timerID);
          this.resetTimer();
          this.currentTask = 0;
          target.parentElement?.parentElement?.parentElement?.remove();
          this.callback(false);
          sloth.render(quizErrorAnswer);
          this.showTitleAndButton();
        }
      });
    });
  }

  resetTimer() {
    this.time = 5;
  }

  initDangerBorder() {
    const taskCard = getSafeElement(document.querySelector('.card'));
    taskCard.classList.add('danger');
  }

  showTitleAndButton() {
    const initButton = getSafeElement(document.querySelector('.quiz-init'));
    const title = getSafeElement(document.querySelector('.quiz__title'));
    initButton.style.display = 'inline-block';
    title.style.display = 'block';
  }
}
