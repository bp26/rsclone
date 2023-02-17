export interface IUser {
  login: string;
  password: string;
  coins: number;
  lessons: string[];
}

export interface Tutorial {
  selector: string;
  text: string;
}

export interface ResponceError {
  type: string;
  message: string;
}

export interface Task {
  id: number;
  title: string;
  description: string;
  price: string;
  buttonsArray: Array<string>;
  answer: string;
  answerBlock: () => void;
  selector: string;
}

interface TypeTask {
  Write?: number[];
  Drag?: number[];
  Boolean?: number[];
}

export interface LessonsContent {
  [key: string]: {
    theory: string;
    tasks: TypeTask[];
  };
}

interface Lesson {
  coins: number;
  tasks: Array<string>;
  isSolved: boolean;
  isOpen: boolean;
}

export interface LessonAvalailability {
  isOpen: boolean;
  isSolved: boolean;
}

export interface Lessons {
  [key: string]: Lesson;
}

export interface RoadData {
  name: string;
  p1: string;
  p2: string;
  name_links: string[];
  links: string[];
}
