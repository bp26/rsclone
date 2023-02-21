import { model } from './../../../base/model';
import { EmitterEventName } from '../../../types/enums';
import { emitter } from '../../../utils/emitter';
import { LessonAvalailability, Lessons } from '../../../types/interfaces';
import { lessonsState } from '../modules/lessons/lessonsState';

class LessonsModel {
  private updated = false;

  private lessons: Lessons = lessonsState;

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

      if (!lesson.tasks.length) {
        lesson.isSolved = true;

        if (this.lessons[Number(currentLesson) + 1]) {
          this.lessons[Number(currentLesson) + 1].isOpen = true;
        }

        emitter.emit(EmitterEventName.LESSONS_SOLVED, lesson.coins);
        this.updateUser(lesson.coins, currentLesson);
      }
    }
  }

  public async updateUser(coins: number, lesson: string) {
    if (model.user) {
      model.user.coins += coins;
      model.user.lessons.push(lesson);
    }
    await model.updateUser();
    emitter.emit(EmitterEventName.GLOBAL_USER_UPDATE);
  }
}

export const lessonsModel = new LessonsModel();
