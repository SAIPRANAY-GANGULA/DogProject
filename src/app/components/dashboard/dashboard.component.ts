import { Component, OnInit } from '@angular/core';
import { DogsService } from 'src/app/services/dogs.service';
import { Dog } from 'src/app/interfaces/dog';
import { FavouriteService } from 'src/app/services/favourite.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dog : Dog;
  favouriteDog : Dog;
  dogs : Dog[] = [];
  favouriteDogs : Dog[] = [];
  breed : string = "DogBreed";
  name : string = "Name";
  description : string = "Description";

  constructor(private dogService : DogsService,private favService : FavouriteService) { }

  ngOnInit() {
    this.getDogs();
    this.getFavourites();
  }

  getDogs(){
    
    for( let i: number = 0; i<9 ; i++){
      this.dogService.retrieveDogObj().subscribe(dog =>
        {
          this.dog = dog;
          this.dog.breed =this.breed ;
          this.dog.name =this.name ;
          this.dog.description =this.description ;
          this.dogs.push(this.dog);
        });

    }

  }

  refresh(){
    this.dogs = [];
    this.getDogs();
  }


  getFavourites(){
    this.favouriteDogs= this.favService.getFavouriteDogs();
  }



  addFavourite(favdog : Dog){
    this.favouriteDog = favdog ;
    this.favouriteDog.id = this.favouriteDogs.length;
    this.favouriteDogs.push(this.favouriteDog);

    localStorage.setItem(
      'favouriteDogs',
      JSON.stringify(this.favouriteDogs)
    );

    if (confirm('Would you like to Add to Favourites?')) {
      this.dogs.forEach((current, index) => {
        if (favdog.id === current.id) {
          this.dogs.splice(index, 1);
        }
      });
    }
  }


}
