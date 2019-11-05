import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { FavouritesComponent } from '../components/favourites/favourites.component';
import { HomeComponent } from '../components/home/home.component';


@NgModule({
  declarations: [
    DashboardComponent,
    FavouritesComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
