import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';



const routes: Routes = [
  { path:'', component:HomeComponent},
  { path:'home',loadChildren:'./module/home.module#HomeModule'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
