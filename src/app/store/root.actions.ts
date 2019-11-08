import { Dog } from '../interfaces/dog.model';
export const enum DogActionType {
  DOGSLOADED = '[DOG] images has been loaded',
  EMPTY = 'Making Store Empty',
  FAVOURITESLOADED = '[FAVOURITEDOG] images has been loaded ',
  SETLOCALSTORAGE = '[FAVOURITEDOG] images has been pushed into local storage',
  AddToFavourites = '[DOG] is add to favourite',
  RemoveFromFavourites = '[DOG] is removed from favourite',
  EditDogDetails = '[DOG] details has been edited',
  EditFavDogDetails = '[FAVOURITEDOG] details has been edited'
}

export class DogsLoaded {
  static readonly type = DogActionType.DOGSLOADED;

  constructor(public dog: Dog) {
  }
}

export class EmptyStore {
  static readonly type = DogActionType.EMPTY;
}

export class FavouriteDogsLoaded {
  static readonly type = DogActionType.FAVOURITESLOADED;

  constructor(public favouriteDogs: {}) {
  }
}

export class  SetLocalStorage {
  static readonly type = DogActionType.SETLOCALSTORAGE;
}

export class  AddToFavourites {
  static readonly type = DogActionType.AddToFavourites;

  constructor(public favouriteDog: Dog) {
  }
}

export class  RemoveFromFavourites {
  static readonly type = DogActionType.RemoveFromFavourites;

  constructor(public favouriteDog: Dog) {
  }
}

export class EditDogDetails {

  static readonly type = DogActionType.EditDogDetails;

  constructor(public dog: Dog) {
  }
}

export class EditFavDogDetails {

  static readonly type = DogActionType.EditFavDogDetails;

  constructor(public favouriteDog: Dog) {
  }
}
