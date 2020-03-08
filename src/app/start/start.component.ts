import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  showInformation: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  timer() {
    if (this.showInformation == false) {
    this.showInformation = true;
    }
  }
  
  

  }

