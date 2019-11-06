import { Component, OnInit , OnDestroy} from '@angular/core';
import { DogsService } from 'src/app/services/dogs.service';
import { Select, Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { Dog } from 'src/app/interfaces/dog.model';
import { FavouriteService } from 'src/app/services/favourite.service';
import { DogState } from 'src/app/store/root.state';
import { EmptyStore } from 'src/app/store/root.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit,OnDestroy {

  // dog : Dog;
  dogs : {};
  favouriteDog : Dog;
  
  favouriteDogs : Dog[] = [];


  // @Select(DogState.getDogs) dogs$: Observable<Dog[]>;

  private readonly subscriptions: Subscription = new Subscription();

  constructor(private dogService : DogsService,
              private favService : FavouriteService,
              private store : Store) { }

  ngOnInit() {
    this.loadDogs();
    this.getDogs();
    this.getFavourites();
  }

  ngOnDestroy(): void {
    console.log('on destroy called');
    this.subscriptions.unsubscribe();
  }

  loadDogs(){
    this.dogService.loadDogs();
  }

  getDogs(){
    this.store.select(DogState.getDogs).subscribe(dogs => this.dogs = dogs);
  }


  refresh(){
    this.store.dispatch(new EmptyStore())
    this.loadDogs();
    this.getDogs();
  }


  getFavourites(){
    this.favouriteDogs= this.favService.getFavouriteDogs();
  }



  addFavourite(favdog : Dog){

    // this.favouriteDog = favdog ;
    // this.favouriteDog.id = this.favouriteDogs.length;
    // this.favouriteDogs.push(this.favouriteDog);


    // localStorage.setItem(
    //   'favouriteDogs',
    //   JSON.stringify(this.favouriteDogs)
    // );

    
    console.log(favdog);
    console.log(this.dogs)

    if (confirm('Would you like to Add to Favourites?')) {

      for(let i : number =0 ; i<9;i++)
        if(this.dogs[i].message === favdog.message){
          console.log(this.dogs[i]);
          delete this.dogs[i];
        }     
    }

  }

}






