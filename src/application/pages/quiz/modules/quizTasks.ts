import { Quiz } from './../../../types/interfaces';

export const tasks: Quiz[] = [
  {
    id: 1,
    description: "' ' + 1 + 0",
    answerBlocks: [10, "'10'", 'NaN'],
    answer: "'10'",
  },
  {
    id: 2,
    description: 'String (null)',
    answerBlocks: [0, "'0'", 'string', "'null'"],
    answer: "'null'",
  },
  {
    id: 3,
    description: "true + 'test'",
    answerBlocks: ["'truetest'", 'Error', 'NaN', 'null'],
    answer: "'truetest'",
  },
  {
    id: 4,
    description: "undefined + '123'",
    answerBlocks: ['undefined', "'undefinded123'", 'NaN'],
    answer: "'undefinded123'",
  },
  {
    id: 5,
    description: 'String (-12.3)',
    answerBlocks: ['-12.3', 'NaN', "'-12.3'"],
    answer: "'-12.3'",
  },
  {
    id: 6,
    description: "4 + 5 + 'px'",
    answerBlocks: ['45px', "'9px'", 'NaN'],
    answer: "'9px'",
  },
  {
    id: 7,
    description: 'NaN === NaN',
    answerBlocks: ['false', 'true', 'NaN', 'undefined'],
    answer: 'false',
  },
  {
    id: 8,
    description: 'Number (false)',
    answerBlocks: ['false', 'true', 'NaN', '0'],
    answer: '0',
  },
  {
    id: 9,
    description: "4 > '5'",
    answerBlocks: ['false', 'true', 'NaN', 'undefined'],
    answer: 'false',
  },
  {
    id: 10,
    description: "123 != '456'",
    answerBlocks: ['false', 'true', 'NaN', 'undefined'],
    answer: 'true',
  },
];
