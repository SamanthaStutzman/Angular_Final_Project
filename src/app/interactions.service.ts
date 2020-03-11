import { Injectable, Output } from '@angular/core';
import { HttpClient } from "@angular/common/http";
// require('dotenv').config()

@Injectable({
  providedIn: 'root'
})
export class InteractionsService {

   cityUrl :string = 'https://data.grandrapidsmi.gov/resource/ce3k-dxxd.json/';
  private googleApiKey: string = "AIzaSyDZnC2DeWiqSRv6RDEQSl8VkjXr-HvKtGY";
  private baseQueryUrl: string = "https://data.grandrapidsmi.gov/resource/ybyy-b267.json";

  private baseFilterUrl: string = `${this.baseQueryUrl}//maps.googleapis.com/maps/api/js?key=${this.googleApiKey}`;


  constructor(private http: HttpClient) {

    }
 getUrl(){
      let response = this.cityUrl
      return response
   }

   getCityData(){
     return this.http.get(this.getUrl())
     
   }
  
  }
