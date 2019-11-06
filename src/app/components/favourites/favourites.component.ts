import { Component, OnInit } from '@angular/core';
import { FavouriteService } from 'src/app/services/favourite.service';
import { Dog } from 'src/app/interfaces/dog.model';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

  favouriteDogs : Dog[] = [];
  

  constructor(private favService : FavouriteService) { }

  ngOnInit() {
    this.getFavourites();
  }

  getFavourites(){
    this.favouriteDogs = this.favService.getFavouriteDogs();
    this.favouriteDogs.forEach((current, index) => {
        this.favouriteDogs[index].id = index;
    });
    
  }

  removeFavourite(theDog : Dog){
    if (confirm('Would you like to remove from Favourites?')) {
      this.favouriteDogs.forEach((current, index) => {
        if (theDog.id === current.id) {
          this.favouriteDogs.splice(index, 1);
        }
      });
    }
    
    // Add to LS
    localStorage.setItem(
      'favouriteDogs',
      JSON.stringify(this.favouriteDogs)
    );
  }

}


