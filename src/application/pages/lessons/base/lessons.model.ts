import { model } from './../../../base/model';
import { EmitterEventName } from '../../../types/enums';
import { emitter } from '../../../utils/emitter';

interface Lessons {
  [key: string]: {
    coins: number;
    tasks: Array<string>;
    isSolved: boolean;
    isOpen: boolean;
  };
}
interface openLessons {
  [key: string]: boolean;
}
const user = {
  name: '',
  password: '',
  coins: 0,
  lessons: ['1', '2'],
};
class LessonsModel {
  constructor() {
    for (const key in this.lessons) {
      if (user.lessons.includes(key)) {
        this.lessons[key].isSolved = true;
        this.lessons[key].isOpen = true;
        this.lessons[Number(key) + 1].isOpen = true;
      }
    }
  }

  lessons: Lessons = {
    '1': {
      coins: 0,
      tasks: ['Boolean1', 'Boolean2', 'Boolean3'],
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
      tasks: ['Boolean1', 'Boolean2', 'Boolean3'],
      isSolved: false,
      isOpen: false,
    },
  };

  init() {
    const openLessons: openLessons = {};
    for (const key in this.lessons) {
      openLessons[key] = this.lessons[key].isOpen;
    }
  }

  submitTask(title: string, price: string, currentLessons: string) {
    const lessons = this.lessons[currentLessons];
    const index = lessons.tasks.indexOf(title);

    if (lessons.tasks.indexOf(title) !== -1) {
      lessons.tasks.splice(index, 1);
      lessons.coins += Number(price);

      if (lessons.tasks.length === 0) {
        lessons.isSolved = true;

        if (this.lessons[Number(currentLessons) + 1]) {
          this.lessons[Number(currentLessons) + 1].isOpen = true;
        }
      }
    }
  }
}

export const lessonsModel = new LessonsModel();
