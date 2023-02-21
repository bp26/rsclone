import { quizTutorial } from './../../../utils/constants/slothExampleTutorialArray';
import sloth from '../../lessons/modules/sloth/sloth';
import { quizView } from './quiz.view';
import { Storage } from '../../../types/enums';

class QuizController {
  public init(): void {
    quizView.render();
    if (!localStorage.getItem(Storage.QUIZ__TUTORIAL)) {
      sloth.render(quizTutorial);
      localStorage.setItem(Storage.QUIZ__TUTORIAL, Storage.COMPLETE);
    }
  }
}

export const quizController = new QuizController();
