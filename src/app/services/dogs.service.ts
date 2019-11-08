import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Store } from '@ngxs/store';
import { DogsLoaded, EmptyStore } from '../store/root.actions';
import { DogApiResponse, DogApiStatus } from '../interfaces/dog.model';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DogsService {

  dogUrl = 'https://dog.ceo/api/breeds/image/random';


  constructor(private http: HttpClient,
              private store: Store) {
   }

  retrieveDog() {
    this.http.get(this.dogUrl)
      .pipe(
        filter((dogResponse: DogApiResponse) => dogResponse.status === DogApiStatus.success),
        map((dogResponse: DogApiResponse) => {
          return { message : dogResponse.message , breed : 'DogBreed' , name: 'Name', description : 'Description'};
        }),
      ).subscribe(dog => {
          this.store.dispatch(new DogsLoaded(dog));
        });
  }

  loadDogs() {
    for ( let i = 0; i < 9 ; i++) {
      if (i === 0) {
        this.store.dispatch(new EmptyStore());
        this.retrieveDog();
      } else {
        this.retrieveDog();
      }

    }
  }


}



