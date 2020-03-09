import { Component, OnInit } from '@angular/core';
import {InteractionsService} from '../../interactions.service'
@Component({
  selector: 'app-road',
  templateUrl: './road.component.html',
  styleUrls: ['./road.component.css']
})
export class RoadComponent implements OnInit {
  map;

  constructor(private Html : InteractionsService) { }

  ngOnInit() {

      this.Html.returnMap().subscribe((data: any) => this.map = data)
    
    
  }
  
  
}
