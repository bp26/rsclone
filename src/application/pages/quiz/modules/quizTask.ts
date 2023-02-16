import { IQuiz } from './../base/quiz.view';
import { getSafeElement } from './../../../utils/helpers';

export class QuizTask {
  root: HTMLElement;
  time: number;
  task: IQuiz;
  constructor(task: IQuiz) {
    this.root = getSafeElement(document.querySelector('.quiz-task'));
    this.time = 10;
    this.task = task;
  }

  getAnswers() {
    let answerBlocks = '';
    this.task.answerBlocks.forEach((el) => {
      answerBlocks += `<button quiz-button="${this.task.id}" class="btn btn-secondary m-2">${el}</button>`;
    });
    return answerBlocks;
  }

  generatorTasks() {
    const html = document.createElement('div');
    html.className = 'card bg-dark w-25 text-center';
    html.innerHTML = `
        <div class="card-body">
          <p class="bg-secondary rounded-2">${this.task.description}</p>
        <div>${this.getAnswers()}</div>
       </div>
      `;
    return html;
  }

  render() {
    const html = this.generatorTasks();
    this.root.append(html);
    const quizButtons = document.querySelectorAll(`[quiz-button="${this.task.id}"]`);
    quizButtons.forEach((elem) => {
      elem.addEventListener('click', (e) => {
        const target = e.target as Element;
        if (target.textContent === this.task.answer) {
          console.log('true');
        }
      });
    });
  }
}
