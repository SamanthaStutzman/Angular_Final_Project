import { Component, OnInit } from '@angular/core';
import {InteractionsService} from '../../interactions.service'


@Component({
  selector: 'app-road',
  styleUrls: ['./road.component.css'],
  templateUrl: './road.component.html'
})



export class RoadComponent implements OnInit {

  latitude = 42.963795;
  longitude = -85.670006;
  zoom =14;
  reply: any
  mapType = 'roadmap';
  markers = [
    { lng: -85.6797945188957, lat: 42.95149365769928, alpha: 1 },
    { lng: -85.67888678898416, lat: 42.95148546359977, alpha: 1 },
    { lng: -85.67888678898416, lat: 42.95148546359977, alpha: 1 },
    { lng: -85.67830904924729, lat: 42.95147479890077, alpha: 1 },
    { lng: -85.67817861892253, lat: 42.951463101490894, alpha: 1 },
    { lng:  -85.67794840391285, lat:  42.95140308170747, alpha: 1 },
    { lng:  -85.67730775795953, lat:  42.951190967442535, alpha: 1 }
  ];
 

  constructor(private Html : InteractionsService) { }

  ngOnInit() {

} 

// display(){
//   let reply = this.Html.getCityData().subscribe((data) => this.reply = data)
//   console.log(reply)
// }
   
  
    
   
  
   
  
}
