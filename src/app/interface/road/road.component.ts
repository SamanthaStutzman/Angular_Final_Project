import { Component, OnInit } from '@angular/core';
import {InteractionsService} from '../../interactions.service'
@Component({
  selector: 'app-road',
  styles: ['agm-map { height: 300px; /* height is required */ }'],
  template: `
    <agm-map [latitude]='latitude' [longitude]='longitude' 
      [mapTypeId]='mapType'>
    </agm-map>
  `
})



export class RoadComponent implements OnInit {

  latitude = 42.963795;
  longitude = -85.670006;
  zoom =0;
  
  mapType = 'roadmap';

  constructor(private Html : InteractionsService) { }

  ngOnInit() {
// this.Html.returnMap().subscribe((data: any) => this.map = data)
}
   
  
    
   
  
   
  
}
