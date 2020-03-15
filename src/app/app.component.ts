import { Component } from '@angular/core';
import { Api311Service } from './api-311.service';
import { ApiPaserService } from './api-paser.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularFinalProject';

  constructor (private myAPI : ApiPaserService) { 
    //this.myAPI.retrieveData();
    //this.myData = this.myAPI.data;
  }

  myData = this.myAPI.processPolylines(2019);
}
