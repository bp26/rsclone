import { Lessons } from './../../../types/interfaces';
export const lessonsDrag: Lessons[] = [
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
    selector: 'body',
  },
  {
    id: 2,
    title: 'Drag2',
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
    selector: 'body',
  },
  {
    id: 3,
    title: 'Drag3',
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
    selector: 'body',
  },
];
