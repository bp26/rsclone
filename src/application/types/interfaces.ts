export interface IUser {
  login: string;
  password: string;
}

export interface Tutorial {
  selector: string;
  text: string;
}

export interface ResponceError {
  type: string;
  message: string;
}

export interface Lessons {
  id: number;
  title: string;
  description: string;
  price: string;
  buttonsArray: Array<string>;
  answer: string;
  answerBlock: () => void;
  selector: string;
}

export interface IMessage {
  user: string;
  content: string;
  time: string;
}
