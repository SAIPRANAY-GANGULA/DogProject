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
  dogObj : Dog;
  dogObjFav : Dog;
  dogObjArr : Dog[] = [];
  dogFavArr : Dog[] = [];
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

      this.dogService.retrieveDogObj().subscribe(dogObj =>
        {
          this.dogObj = dogObj;
          this.dogObj.breed =this.breed ;
          this.dogObj.name =this.name ;
          this.dogObj.description =this.description ;

          this.dogObjArr.push(this.dogObj);
        });

    }
  }


  getFavourites(){
    this.dogFavArr = this.favService.getFavouriteDogs();
  }



  addFavourite(favdog : Dog){
    this.dogObjFav = favdog ;
    this.dogObjFav.id = this.dogFavArr.length;
    this.dogFavArr.push(this.dogObjFav);

    localStorage.setItem(
      'favouriteDogs',
      JSON.stringify(this.dogFavArr)
    );
  }


}
