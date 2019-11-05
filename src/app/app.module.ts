import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SohoComponentsModule } from 'ids-enterprise-ng';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SohoLocaleInitializerModule } from './locale/soho-locale-initializer.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './module/home.module';
import { DogsService } from './services/dogs.service';
import { FavouriteService } from './services/favourite.service';
import { HeaderComponent } from './components/header/header.component';
import { AppliactionMenuComponent } from './components/appliaction-menu/appliaction-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AppliactionMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SohoComponentsModule,
    SohoLocaleInitializerModule,
    FormsModule,
    HttpClientModule,
    HomeModule
  ],
  providers: [DogsService,FavouriteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
