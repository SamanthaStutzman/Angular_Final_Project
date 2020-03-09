import { Injectable, APP_ID } from '@angular/core';
import { HttpClient } from "@angular/common/http";
require('dotenv').config()

@Injectable({
  providedIn: 'root'
})
export class InteractionsService {
 api_key = process.env.API_KEY

   url : string =  `https://maps.googleapis.com/maps/api/js?${this.api_key}&callback=initMap`;
   cityUrl :string = 'https://data.grandrapidsmi.gov/resource/ce3k-dxxd.json/';
  private googleApiKey: string = "AIzaSyDZnC2DeWiqSRv6RDEQSl8VkjXr-HvKtGY";
  private baseQueryUrl: string = "INSERTURL1";
  private baseFilterUrl: string = "INSERTURL2";




  constructor(private http: HttpClient) {

  

    // Example of a method that gets a filtered api
    // getFilteredSOMETHING() {
    //   return this.http.get(
    //     `${this.baseFilterUrl}&category=${category.category}&difficulty=${category.difficulty}&type=multiple`
    //   );
    //}
   }  
   getMapUrl(){
      let call = this.url
      return call
    }

    returnMap(){
      return this.http.get(this.getMapUrl())
    }

    getCityData(){
      let response = this.cityUrl
      return response
    }
}
