import { Injectable } from '@angular/core';
import { Dog } from '../interfaces/dog.model';
import { Store } from '@ngxs/store';
import { FavouriteDogsLoaded } from '../store/root.actions';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {
  favDogs : {};

  constructor(private store : Store) {
    this.loadFavouriteDogs();
  }

  loadFavouriteDogs() {
    if (localStorage.getItem('favourite-dogs') === null) {
      this.favDogs = {};
    } else {
      this.favDogs = JSON.parse(
        localStorage.getItem('favourite-dogs')
      );
    }
    this.store.dispatch(new FavouriteDogsLoaded(this.favDogs)) ;

  }

}

