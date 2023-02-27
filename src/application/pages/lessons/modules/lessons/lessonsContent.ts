import { theory1, theory2, theory3 } from './lessons';
import { LessonsContent } from '../../../../types/interfaces';

export const lessonsContent: LessonsContent = {
  lesson1: {
    theory: theory1,
    tasks: [{ Write: [1] }, { Drag: [1] }],
  },
  lesson2: {
    theory: theory2,
    tasks: [{ Boolean: [1, 2, 3] }],
  },
  lesson3: {
    theory: theory3,
    tasks: [{ Write: [2] }, { Drag: [2, 3] }],
  },
};
