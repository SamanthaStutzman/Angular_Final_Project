import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StartComponent } from './start/start.component';
import { InterfaceComponent } from './interface/interface.component';
import { RoadComponent } from './start/road/road.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StartComponent,
    InterfaceComponent,
    RoadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
