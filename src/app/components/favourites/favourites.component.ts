import { Component, OnInit } from '@angular/core';
import { FavouriteService } from 'src/app/services/favourite.service';
import { Dog } from 'src/app/interfaces/dog.model';
import { Observable } from 'rxjs';
import { DogState } from 'src/app/store/root.state';
import { Select, Store } from '@ngxs/store';
import { RemoveFromFavourites } from 'src/app/store/root.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

  @Select(DogState.getFavouriteDogs) favouriteDogs$: Observable<Dog[]>;

  filteredFavouriteDogs: Dog [];
  favouriteDogs: Dog [];
  private _searchDog: string;
  get searchDog(): string {
      return this._searchDog;
  }
  set searchDog(value: string ) {
    this._searchDog = value;
    console.log('work');
    this.filteredFavouriteDogs = this.filterFavouriteDogs(value);
  }
  constructor(private favService: FavouriteService,
              private store: Store,
              private router: Router) { }

  ngOnInit() {
    this.favService.loadFavouriteDogs();
    this.getFavouriteDogs();
  }

  removeFavourite(theDog: Dog) {
    if (confirm('Would you like to remove from Favourites?')) {
         this.store.dispatch(new RemoveFromFavourites(theDog));
      }
  }

  gotoEditComponent(id: string, msg: string) {
    const selectedId = id;
    const message = msg;
    this.router.navigate(['/home/editDogDetails', {id : selectedId , msg : message , component : 'favourites'}]);

  }

  getFavouriteDogs() {
    this.store.select(DogState.getFavouriteDogs)
      .subscribe( favouriteDogs => {
        this.filteredFavouriteDogs = favouriteDogs;
        this.favouriteDogs = favouriteDogs; });
  }

  filterFavouriteDogs(searchDog: string) {

    return this.favouriteDogs.filter(favDog =>
      favDog.name.toLowerCase().indexOf(searchDog.toLowerCase()) !== -1);

  }

}
