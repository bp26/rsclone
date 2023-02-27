import { Task } from '../../../../../types/interfaces';
export const lessonsDrag: Task[] = [
  {
    id: 1,
    title: 'Drag1',
    description: ` 1. Declare a variables: admin. <br />
  2. Declare a variable:  name <br />`,
    price: '2',
    buttonsArray: ['let ', 'let ', 'admin; ', 'name; '],
    answer: `
  let admin;
  let name;
`,
    answerBlock: () => {
      return `
  <div>let admin;</div>
  <div>let name;</div>
  `;
    },
    selector: '.lesson-practice',
  },
  {
    id: 2,
    title: 'Drag2',
    description: ` 1. Declare a Function Declaration`,
    price: '2',
    buttonsArray: ['Function ', 'fn ', '( ', ')', '{', '}'],
    answer: `
Function fn() {}
`,
    answerBlock: () => {
      return `
  <div>Function fn() {}</div>
  `;
    },
    selector: '.lesson-practice',
  },
  {
    id: 3,
    title: 'Drag3',
    description: ` 1. Declare a function expression`,
    price: '2',
    buttonsArray: ['let ', 'fn ', '= ', 'function', '( ', ')', '{', '}'],
    answer: `
let fn = function() {}
`,
    answerBlock: () => {
      return `
  <div>let fn = function() {}</div>
  `;
    },
    selector: '.lesson-practice',
  },
];
