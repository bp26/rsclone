import { AuthErrorMessage, MessageType } from './enums';

export interface IUser {
  _id: string;
  login: string;
  password: string;
  coins: number;
  lessons: string[];
  chat: IChatSettings;
  avatar: IAvatar;
}

interface IAvatar {
  secure_url: string;
  public_id: string;
}

interface IChatSettings {
  color: string;
  notifications: boolean;
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

export interface IMessage {
  user: string;
  color: string;
  content: string;
  time: string;
}

export interface INotification {
  user: string;
  color: string;
}

export interface INotificationData {
  type: MessageType;
  data: INotification;
}

export interface IMessageData {
  type: MessageType;
  data: IMessage;
}

export interface RoadData {
  name: string;
  p1: string;
  p2: string;
  name_links: string[];
  links: string[];
}

export interface IValidation {
  isValid: boolean;
  message: AuthErrorMessage;
}

export interface IFormatedUser {
  login: string;
  avatar: string;
  coins: number;
  rank: number;
  progress: string;
  chat: IChatSettings;
}
