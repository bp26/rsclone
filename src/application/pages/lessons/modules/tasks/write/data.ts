import { Lessons } from '../../../../../types/interfaces';

export const lessonsWrite: Lessons[] = [
  {
    id: 1,
    title: 'Working with variables',
    description: `    1. Declare a variables: admin. <br />
  2. Declare a variable:  name <br />
    3. Assign the value "John" to name.<br />
    4. Copy the value from name to admin.<br />
    5. Show the value of admin using alert (must output “John”).`,
    price: '2',
    buttonsArray: ['let ', 'const ', 'admin ', 'name ', '"John";', 'alert', '= ', '(', ')', 'space', 'delete', 'white-space', ';', 'clear', '{', '}', 'function()', 'if'],
    answer: `
let admin;
let name;
name = "John";
admin = name;
alert(admin);
`,
    answerBlock: () => {
      return `
  <div>let admin;</div>
  <div>let name;</div>
<div>name = "John";</div>
<div>admin = name;</div>
<div>alert(admin);</div>
  `;
    },
    selector: '.lesson-practice',
  },
  {
    id: 2,
    title: 'Working with variables2',
    description: ` 1. Declare a arrow function`,
    price: '2',
    buttonsArray: ['let ', 'fn ', '= ', '( ', ') ', '=> ', '{', '}'],
    answer: `
let fn = () => {}
`,
    answerBlock: () => {
      return `
let fn = () => {}
  `;
    },
    selector: '.lesson-practice',
  },
  {
    id: 3,
    title: 'Working with variables3',
    description: ` 1. Declare a variables: admin. <br />
  2. Declare a variable:  name <br />
    3. Assign the value "John" to name.<br />
    4. Copy the value from name to admin.<br />
    5. Show the value of admin using alert (must output “John”).`,
    price: '2',
    buttonsArray: ['let ', 'const ', 'admin ', 'name ', 'John;', 'alert', '= ', '(', ')', 'space', 'delete', 'white-space', ';', 'clear'],
    answer: `let admin;
  let name;
name = John;
admin = name;
alert(admin);
`,
    answerBlock: () => {
      return `
  <div>let admin;</div>
  <div>let name;</div>
<div>name = John;</div>
<div>admin = name;</div>
<div>alert(admin);</div>
  `;
    },
    selector: '.lesson-practice',
  },
];
