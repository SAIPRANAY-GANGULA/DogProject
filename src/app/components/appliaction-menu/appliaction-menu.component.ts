import { Component, OnInit } from '@angular/core';
import { DogsService } from 'src/app/services/dogs.service';

@Component({
  selector: 'app-appliaction-menu',
  templateUrl: './appliaction-menu.component.html',
  styleUrls: ['./appliaction-menu.component.css']
})
export class AppliactionMenuComponent implements OnInit {

  constructor(private dogService: DogsService) { }

  ngOnInit() {
  }

  loadDogs() {
    this.dogService.loadDogs();
  }

}
