import { quizView } from './quiz.view';

class QuizController {
  public init(): void {
    quizView.render();
  }
}

export const quizController = new QuizController();
