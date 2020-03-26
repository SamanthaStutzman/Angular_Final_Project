import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  options = {
    zoom : 12,
    center: new google.maps.LatLng({ lng: -85.6681, lat: 42.9634 })
  }
  
  
  constructor() { }
  
  ngOnInit() {
  }
  
  moveBottom() {
    location.href = "#link311";
  }
  
  moveTop() {
    location.href = "#home-content";
  }

  locateAddress(event){
    this.options = event
   

  }
  
  
}
