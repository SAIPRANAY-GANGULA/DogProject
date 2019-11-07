import { Component, OnInit , OnDestroy} from '@angular/core';
import { DogsService } from 'src/app/services/dogs.service';
import { Select, Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { Dog } from 'src/app/interfaces/dog.model';
import { FavouriteService } from 'src/app/services/favourite.service';
import { DogState } from 'src/app/store/root.state';
import { EmptyStore, AddToFavourites } from 'src/app/store/root.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit,OnDestroy {

  // dog : Dog;
  dogs : Dog[]= [];
  favouriteDog : Dog;
  
  favouriteDogs : Dog[] = [];


  @Select(DogState.getDogs) dogs$: Observable<Dog[]>;

  private readonly subscriptions: Subscription = new Subscription();

  constructor(private dogService : DogsService,
              private store : Store) { }

  ngOnInit() {
    this.loadDogs();
    // this.getDogs();
    // this.getFavourites();
  }

  ngOnDestroy(): void {
    console.log('on destroy called');
    this.subscriptions.unsubscribe();
  }

  loadDogs(){
    this.dogService.loadDogs();
  }

  // getDogs(){
  //   this.store.select(DogState.getDogs).subscribe(dogs => this.dogs = [...dogs]);
  // }


  refresh(){
    this.store.dispatch(new EmptyStore())
    this.loadDogs();
    // this.getDogs();
  }


  // getFavourites(){
  //   this.store.select(DogState.getFavouriteDogs).subscribe(favdogs => this.favouriteDogs = [...favdogs]);
  // }



  addFavourite(favdog : Dog){
    
    console.log(favdog);
    console.log(this.dogs)

    if (confirm('Would you like to Add to Favourites?')) {

    this.store.dispatch(new AddToFavourites(favdog));
    // this.store.dispatch(new RemoveDog(favdog))    
    }

  }

}






