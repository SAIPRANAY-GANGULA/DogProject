import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { FavouritesComponent } from '../components/favourites/favourites.component';
import { HomeComponent } from '../components/home/home.component';
import { SohoComponentsModule } from 'ids-enterprise-ng';
import { SohoLocaleInitializerModule } from '../locale/soho-locale-initializer.module';
import { FormsModule } from '@angular/forms';
import { EditDogDetailsComponent } from '../components/edit-dog-details/edit-dog-details.component';


@NgModule({
  declarations: [
    DashboardComponent,
    FavouritesComponent,
    HomeComponent,
    EditDogDetailsComponent,

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SohoComponentsModule,
    SohoLocaleInitializerModule,
    FormsModule,
  ]
})
export class HomeModule { }
