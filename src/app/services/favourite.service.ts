import { Injectable } from '@angular/core';
import { Dog } from '../interfaces/dog.model';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {
  favDogs : Dog[] = [];

  constructor() {
    this.getFavouriteDogs();
  }

  getFavouriteDogs() {
    if (localStorage.getItem('favouriteDogs') === null) {
      this.favDogs = [];
    } else {
      this.favDogs = JSON.parse(
        localStorage.getItem('favouriteDogs')
      );
    }
    return this.favDogs;
  }

  

}
