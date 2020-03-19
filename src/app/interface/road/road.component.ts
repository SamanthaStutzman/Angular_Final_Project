import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-road',
  styleUrls: ['./road.component.css'],
  templateUrl: './road.component.html'
})

export class RoadComponent implements OnInit {
  
  width = "100%";
  height = "100%";

  zoom = 11;
  // center: google.maps.LatLng
  myLatLng= new google.maps.LatLng({lng:-85.6681, lat: 42.9634})
  markers= []
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  }
  
  
  
  // latitude : number = 42.963795;
  // longitude : number = -85.670006;
  // zoom : number = 14;
  // reply: any;
  // mapType : string = 'roadmap';
  
  // markers = [
  //   { lng: -85.6797945188957, lat: 42.95149365769928, alpha: 1 },
  //   { lng: -85.67888678898416, lat: 42.95148546359977, alpha: 1 },
  //   { lng: -85.67888678898416, lat: 42.95148546359977, alpha: 1 },
  //   { lng: -85.67830904924729, lat: 42.95147479890077, alpha: 1 },
  //   { lng: -85.67817861892253, lat: 42.951463101490894, alpha: 1 },
  //   { lng: -85.67794840391285, lat:  42.95140308170747, alpha: 1 },
  //   { lng: -85.67730775795953, lat:  42.951190967442535, alpha: 1 }
  // ];
  
  constructor() { }
  
  ngOnInit() {  
  } 
  
  // display(){
  //   let reply = this.Html.getCityData().subscribe((data) => this.reply = data)
  //   console.log(reply)
  // }   
  
  // changeLocation (latitude = 30, longitude = 25) {
  //   this.latitude = Number(latitude); 
  //   this.longitude = Number(longitude);
  //   console.log(this.latitude);
  //   console.log(this.longitude);
  // }
  
}