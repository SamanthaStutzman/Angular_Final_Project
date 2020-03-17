import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StartComponent } from './start/start.component';
import { InterfaceComponent } from './interface/interface.component';
import { RoadComponent } from './interface/road/road.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StartComponent,
    InterfaceComponent
  ],
  imports: [
    BrowserModule,
    GoogleMapsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
