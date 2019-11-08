import { Component, OnInit , OnDestroy} from '@angular/core';
import { DogsService } from 'src/app/services/dogs.service';
import { Select, Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { Dog } from 'src/app/interfaces/dog.model';
import { DogState } from 'src/app/store/root.state';
import { EmptyStore, AddToFavourites } from 'src/app/store/root.actions';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  dogs: Dog[] = [];
  favouriteDog: Dog;

  favouriteDogs: Dog[] = [];


  @Select(DogState.getDogs) dogs$: Observable<Dog[]>;

  private readonly subscriptions: Subscription = new Subscription();

  constructor(private dogService: DogsService,
              private store: Store,
              private router: Router) { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    console.log('on destroy called');
    this.subscriptions.unsubscribe();
  }

  loadDogs() {
    this.dogService.loadDogs();
  }

  refresh() {
    this.store.dispatch(new EmptyStore());
    this.loadDogs();
  }

  addFavourite(favdog: Dog) {

    if (confirm('Would you like to Add to Favourites?')) {

    this.store.dispatch(new AddToFavourites(favdog));
    }

  }

  gotoEditComponent(id: number, msg: string) {
    const selectedId = id;
    const message = msg;
    this.router.navigate(['/home/editDogDetails', {id : selectedId , msg : message , component : 'dashboard'}]);

  }

}






