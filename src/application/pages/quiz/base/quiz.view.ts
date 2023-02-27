import { slothGood } from './../../../utils/constants/icons/sloth-good';
import { QuizTask } from './../modules/quizTask';
import { getSafeElement, queryHTMLElement } from './../../../utils/helpers';
import { tasks } from '../modules/quizTasks';
class QuizView {
  private root: HTMLElement;

  constructor() {
    this.root = queryHTMLElement('.main__root');
  }

  public render() {
    this.root.innerHTML = '';
    const html = document.createElement('div');
    html.className = 'h-100 quiz-main-block';
    html.innerHTML = `
<h2 class="text-center mt-4 quiz__title m-2">Quiz</h2>
<div class="quiz-task d-flex gap-5 justify-content-center mb-5 mt-5">
  <button class="btn btn-secondary button quiz-init m">Start Quiz</button>
</div>
<div class="content-wrapper">
  <div class="quiz__content-block  d-flex align-items-center justify-content-between p-5 gap-5">
    <div class="content__img w-50 d-flex align-items-center justify-content-center">
      ${slothGood}
    </div>
    <div class="content__text w-50 fs-3">
      In this simulator, you need to solve tasks for a certain period of time. You have 5 seconds for each task. In the case of both a correct and incorrect answer, you will receive a sound signal. The quiz consists of 10 questions that must be passed without a single mistake.
    </div>
  </div>
</div>

`;
    this.root.append(html);
    const initButton = document.querySelector('.quiz-init');
    initButton?.addEventListener('click', (e) => {
      this.hideTitleAndButton();
      this.changeQuizTaskClasses(true);
      this.initQuiz();
    });
  }
  initQuiz() {
    let count = 3;
    const element = document.createElement('div');
    element.className = 'h-100 w-100 d-flex fs-1 align-items-center justify-content-center  position-fixed top-0 start-0 bottom-0 end-0';
    element.innerHTML = `<div class="text-center inline-block quiz-timer  timer show "> ${String(count)} </div>
    `;
    const root = document.querySelector('.quiz-main-block');
    if (root) root.append(element);
    const timerCount = getSafeElement(document.querySelector('.quiz-timer'));
    const quizTimerID = setInterval(() => {
      count--;
      timerCount.textContent = String(count);
      if (count < 1) {
        clearInterval(quizTimerID);
        element.remove();
        new QuizTask(tasks, this.changeQuizTaskClasses).init();
      }
    }, 1000);
  }

  hideTitleAndButton() {
    const initButton = getSafeElement(document.querySelector('.quiz-init'));
    const title = getSafeElement(document.querySelector('.quiz__title'));
    const contentBlock = getSafeElement(document.querySelector('.content-wrapper'));
    contentBlock.style.display = 'none';
    initButton.style.display = 'none';
    title.style.display = 'none';
  }

  changeQuizTaskClasses(checked: boolean) {
    const quizContainer = getSafeElement(document.querySelector('.quiz-main-block'));
    quizContainer.className = checked ? 'h-100 quiz-main-block d-flex align-items-center justify-content-center' : 'h-100 quiz-main-block';
  }
}

export const quizView = new QuizView();
