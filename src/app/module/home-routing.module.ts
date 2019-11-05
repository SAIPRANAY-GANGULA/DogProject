import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { FavouritesComponent } from '../components/favourites/favourites.component';
import { HomeComponent } from '../components/home/home.component';


const routes: Routes = [
    { path:'', component:HomeComponent,children:[

    { path:'dashboard', component:DashboardComponent},
    { path:'favourites', component:FavouritesComponent}

  ]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
