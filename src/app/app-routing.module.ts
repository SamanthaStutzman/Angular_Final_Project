import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StartComponent } from './start/start.component';

import { RoadComponent } from './road/road.component';



const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'start',
    component: StartComponent
  },
  
  {
    path: 'road',
    component: RoadComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '*',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
