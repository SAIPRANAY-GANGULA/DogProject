import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dog } from '../interfaces/dog';

@Injectable({
  providedIn: 'root'
})
export class DogsService {

  dogUrl: string = "https://dog.ceo/api/breeds/image/random";

  // dogFavObj : Dog;

  constructor(private http:HttpClient) {
   }

  retrieveDogObj(): Observable<Dog> {
    return this.http.get<Dog>(this.dogUrl);
  }

  // addFavLocal(favdog : Dog){
  //   favdog
  // }
}
