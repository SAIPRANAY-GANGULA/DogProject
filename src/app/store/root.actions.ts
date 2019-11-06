import { Dog } from '../interfaces/dog.model';
export const enum DogActionType {
  LOADED = '[DOG] images has been loaded',
  EMPTY = 'Making Store Empty'
}

export class DogsLoaded {
  static readonly type = DogActionType.LOADED;

  constructor(public dog: Dog) {
  }
}

export class EmptyStore {
  static readonly type = DogActionType.EMPTY;
}

