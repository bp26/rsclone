import EventEmitter from 'eventemitter3';
import TypedEmitter from 'typed-emitter';
import { EmitterEvents } from '../types/types';

export const emitter = new EventEmitter() as TypedEmitter<EmitterEvents>;
