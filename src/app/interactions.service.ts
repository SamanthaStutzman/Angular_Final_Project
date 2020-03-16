import { Injectable, Output } from '@angular/core';
import { HttpClient } from "@angular/common/http";
// require('dotenv').config()

@Injectable({
  providedIn: 'root'
})
export class InteractionsService {


  private queryPotholeUrl: string = "https://data.grandrapidsmi.gov/resource/kxix-u7si.json?Script%20Used=PUBLIC%20SERVICES%20-%20Pothole&$select=Coordinates";

  constructor(private http: HttpClient) {

    }

  getPotholeUrl(){
    return this.http.get(this.queryPotholeUrl)
    
  }
  

  
  // getUrl(){
  //   let response = this.cityUrl;
  //   return response;
  // }
  
  // getCityData(){
  //   return this.http.get(this.getUrl())
  // }
  
}
