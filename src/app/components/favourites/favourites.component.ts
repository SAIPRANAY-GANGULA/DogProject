import { Component, OnInit } from '@angular/core';
import { FavouriteService } from 'src/app/services/favourite.service';
import { Dog } from 'src/app/interfaces/dog';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

  dogFavArr : Dog[] = [];

  constructor(private favService : FavouriteService) { }

  ngOnInit() {
    this.getFavourites();
  }

  getFavourites(){
    this.dogFavArr = this.favService.getFavouriteDogs();
    this.dogFavArr.forEach((current, index) => {
        this.dogFavArr[index].id = index;
    });
    
  }

  removeFavourite(theDog : Dog){
    if (confirm('Would you like to remove from Favourites?')) {
      this.dogFavArr.forEach((current, index) => {
        if (theDog.id === current.id) {
          this.dogFavArr.splice(index, 1);
        }
      });
    }
    
    // Add to LS
    localStorage.setItem(
      'favouriteDogs',
      JSON.stringify(this.dogFavArr)
    );
  }

}
