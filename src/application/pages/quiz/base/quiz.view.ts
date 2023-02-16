import { QuizTask } from './../modules/quizTask';
import { queryHTMLElement } from './../../../utils/helpers';

export interface IQuiz {
  id: number;
  description: string;
  answerBlocks: Array<string | number>;
  answer: string | number;
}

const tasks: IQuiz[] = [
  {
    id: 1,
    description: "' ' + 1 + 0",
    answerBlocks: [10, "'10'", 'NaN'],
    answer: "'10'",
  },
  {
    id: 2,
    description: 'String (null)',
    answerBlocks: [0, "'0'", 'string', "'null'"],
    answer: "'null'",
  },
  {
    id: 3,
    description: "true + 'test'",
    answerBlocks: ["'truetest'", 'Error', 'NaN', 'null'],
    answer: "'truetest'",
  },
  {
    id: 4,
    description: "undefined + '123'",
    answerBlocks: ['undefined', "'undefinded123'", 'NaN'],
    answer: "'undefinded123'",
  },
  {
    id: 5,
    description: 'String (-12.3)',
    answerBlocks: ['-12.3', 'NaN', "'-12.3'"],
    answer: "'-12.3'",
  },
  {
    id: 6,
    description: "4 + 5 + 'px'",
    answerBlocks: ['45px', "'9px'", 'NaN'],
    answer: "'9px'",
  },
];

class QuizView {
  private root: HTMLElement;

  constructor() {
    this.root = queryHTMLElement('.main__root');
  }

  public render() {
    this.root.innerHTML = '';
    const html = document.createElement('div');
    html.innerHTML = `<h2 class="text-center mt-4">Quiz</h2>

<div class="quiz-task d-flex gap-5 justify-content-between flex-wrap">

    <button class="btn btn-secondary quiz-init">Start Quiz</button>
</div>
`;
    this.root.append(html);
    const initButton = document.querySelector('.quiz-init');
    initButton?.addEventListener('click', () => {
      initButton.remove();
      tasks.forEach((el) => {
        new QuizTask(el).render();
      });
    });
  }
}

export const quizView = new QuizView();
