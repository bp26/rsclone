import { model } from './../../../base/model';
import { EmitterEventName } from '../../../types/enums';
import { emitter } from '../../../utils/emitter';
import { LessonAvalailability, Lessons } from '../../../types/interfaces';

class LessonsModel {
  private updated = false;

  private lessons: Lessons = {
    '1': {
      coins: 0,
      tasks: ['Working with variables 1', 'Drag1'],
      isSolved: false,
      isOpen: true,
    },
    '2': {
      coins: 0,
      tasks: ['Boolean1', 'Boolean2', 'Boolean3'],
      isSolved: false,
      isOpen: false,
    },
    '3': {
      coins: 0,
      tasks: ['Working with variables 2', 'Drag2', 'Drag3'],
      isSolved: false,
      isOpen: false,
    },
  };

  public init(): LessonAvalailability[] {
    if (!this.updated && model.user) {
      for (const key in this.lessons) {
        if (model.user.lessons.includes(key)) {
          this.lessons[key].isSolved = true;
          this.lessons[key].isOpen = true;
          this.lessons[key].tasks = [];
          if (this.lessons[Number(key) + 1]) {
            this.lessons[Number(key) + 1].isOpen = true;
          }
        }
      }
      this.updated = true;
    }

    return Object.keys(this.lessons).map((key) => {
      return { isOpen: this.lessons[key].isOpen, isSolved: this.lessons[key].isSolved };
    });
  }

  public submitTask(title: string, price: string, currentLesson: string): void {
    const lesson = this.lessons[currentLesson];
    const index = lesson.tasks.indexOf(title);

    if (!lesson.isSolved && lesson.tasks.indexOf(title) !== -1) {
      lesson.tasks.splice(index, 1);
      lesson.coins += Number(price);

      if (lesson.tasks.length === 0) {
        lesson.isSolved = true;

        if (this.lessons[Number(currentLesson) + 1]) {
          this.lessons[Number(currentLesson) + 1].isOpen = true;
        }

        emitter.emit(EmitterEventName.LESSONS_SOLVED);
        model.updateUserOnSolvedLesson(Number(price), currentLesson);
      }
    }
  }
}

export const lessonsModel = new LessonsModel();
