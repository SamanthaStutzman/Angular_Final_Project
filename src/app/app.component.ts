import { Component } from '@angular/core';
import { Api311Service } from './api-311.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularFinalProject';

  constructor (private myAPI : Api311Service) { 
    //this.myAPI.retrieveData();
    //this.myData = this.myAPI.data;
  }

  myData = this.myAPI.processCoordinates('January 1, 2019');
}
