import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { GoogleMapsModule } from '@angular/google-maps'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StartComponent } from './start/start.component';
import { RoadComponent } from './road/road.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SharedDataService } from './shared-data.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StartComponent,
    RoadComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    GoogleMapsModule
  ],
  providers: [SharedDataService, SearchBarComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
