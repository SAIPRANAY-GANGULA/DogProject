import { Component, OnInit } from '@angular/core';
import { FavouriteService } from 'src/app/services/favourite.service';
import { Dog } from 'src/app/interfaces/dog.model';
import { Observable } from 'rxjs';
import { DogState } from 'src/app/store/root.state';
import { Select, Store } from '@ngxs/store';
import { RemoveFromFavourites } from 'src/app/store/root.actions';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {
  
  @Select(DogState.getFavouriteDogs) favouriteDogs$: Observable<Dog[]>;
  
  constructor(private favService : FavouriteService,
              private store : Store) { }

  ngOnInit() {
    this.favService.loadFavouriteDogs();
  }

  removeFavourite(theDog : Dog){
    if (confirm('Would you like to remove from Favourites?')) {
         this.store.dispatch(new RemoveFromFavourites(theDog));
      }
  }
    
}

  



