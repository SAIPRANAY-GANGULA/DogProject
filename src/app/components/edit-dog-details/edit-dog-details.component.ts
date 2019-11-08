import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router , ParamMap } from '@angular/router';
import { Store } from '@ngxs/store';
import { EditDogDetails, EditFavDogDetails } from 'src/app/store/root.actions';
import { Dog } from 'src/app/interfaces/dog.model';

@Component({
  selector: 'app-edit-dog-details',
  templateUrl: './edit-dog-details.component.html',
  styleUrls: ['./edit-dog-details.component.css']
})
export class EditDogDetailsComponent implements OnInit {

   theDog: Dog = {
    id: '',
    name: '',
    breed: '',
    description: '',
    message: '',
  };
  selectedId = '';
  name = '';
  breed = '';
  description = '';
  selectedMsg: string;
  selectedComponent: string;

  constructor(private route: ActivatedRoute, private store: Store,
              private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      // tslint:disable-next-line: radix
      const id = params.get('id');
      this.selectedId = id;
      const msg = params.get('msg');
      this.selectedMsg = msg;
      const component = params.get('component');
      this.selectedComponent = component;
    });
  }

  editDogDetails() {
    this.theDog.id = this.selectedId;
    this.theDog.message = this.selectedMsg;
    this.theDog.breed = this.breed;
    this.theDog.name = this.name;
    this.theDog.description = this.description;


    if (this.selectedComponent === 'dashboard') {
      this.store.dispatch(new EditDogDetails(this.theDog));
      this.router.navigate(['/home/dashboard']);
    } else if (this.selectedComponent === 'favourites') {
      this.store.dispatch(new EditFavDogDetails(this.theDog));
      this.router.navigate(['/home/favourites']);
    }

  }



}
