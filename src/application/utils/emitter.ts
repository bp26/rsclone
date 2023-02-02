import { EmitterEvents } from '../types/interfaces';
import { EmitterCallback } from '../types/types';

class Emitter {
  events: EmitterEvents = {};

  public subscribe(key: string, callback: EmitterCallback): void {
    if (!this.events[key]) {
      this.events[key] = [];
    }
    this.events[key].push(callback);
  }

  public unsubscribe(key: string): void {
    delete this.events[key];
  }

  public emit<T>(key: string, arg?: T): void {
    if (this.events[key]) {
      this.events[key].forEach((callback) => {
        callback(arg);
      });
    }
  }
}

export const emitter = new Emitter();
