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
 

  constructor(private Html : InteractionsService) { }

  ngOnInit() {

} 

// display(){
//   let reply = this.Html.getCityData().subscribe((data) => this.reply = data)
//   console.log(reply)
// }
   
  
    
   
  
   
  
}
