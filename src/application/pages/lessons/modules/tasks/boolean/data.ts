import { Lessons } from '../../../../../types/interfaces';

export const lessonsBoolean: Lessons[] = [
  {
    id: 1,
    title: 'Boolean1',
    description: `String(true)`,
    price: '2',
    buttonsArray: ['true', 'false', '"true"', 'string'],
    answer: '"true"',
    answerBlock: () => {
      return ``;
    },
    selector: '.lesson-practice',
  },
  {
    id: 2,
    title: 'Boolean2',
    description: `Boolean (undefined)`,
    price: '2',
    buttonsArray: ['true', 'false', 'undefined', '0', '1'],
    answer: 'false',
    answerBlock: () => {
      return ``;
    },
    selector: '.lesson-practice',
  },
  {
    id: 3,
    title: 'Boolean3',
    description: `!!' '`,
    price: '2',
    buttonsArray: ['true', 'false'],
    answer: 'true',
    answerBlock: () => {
      return ``;
    },
    selector: '.lesson-practice',
  },
];
