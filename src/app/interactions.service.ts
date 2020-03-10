import { Injectable, Output } from '@angular/core';
import { HttpClient } from "@angular/common/http";
// require('dotenv').config()

@Injectable({
  providedIn: 'root'
})
export class InteractionsService {
//  api_key = process.env.API_KEY

  //  url : string =  `https://maps.googleapis.com/maps/api/js?key=AIzaSyDZnC2DeWiqSRv6RDEQSl8VkjXr-HvKtGY&callback=initMap`;
   cityUrl :string = 'https://data.grandrapidsmi.gov/resource/ce3k-dxxd.json/';
  private googleApiKey: string = "AIzaSyDZnC2DeWiqSRv6RDEQSl8VkjXr-HvKtGY";
  private baseQueryUrl: string = "https://data.grandrapidsmi.gov/resource/ybyy-b267.json";

  private baseFilterUrl: string = `${this.baseQueryUrl}//maps.googleapis.com/maps/api/js?key=${this.googleApiKey}`;


  constructor(private http: HttpClient) {

  

    // Example of a method that gets a filtered api
    // getFilteredSOMETHING() {
    //   return this.http.get(
    //     `${this.baseFilterUrl}&category=${category.category}&difficulty=${category.difficulty}&type=multiple`
    //   );
    //}
   }  
  //  getMapUrl(){
  //     let call = this.url
  //     return call
  //   }

  //   returnMap(){
  //     return this.http.get(this.getMapUrl())
  //   }

    getCityData(){
      let response = this.cityUrl
      return response
    }

   }

  //  getGoogleMap() {
  //   let queryString = `${this.baseFilterUrl}`
  //   return this.http.get(queryString);
  // }

