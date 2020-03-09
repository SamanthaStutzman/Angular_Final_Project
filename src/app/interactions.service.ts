import { Injectable, Output } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class InteractionsService {

  private googleApiKey: string = "AIzaSyDZnC2DeWiqSRv6RDEQSl8VkjXr-HvKtGY";
  private baseQueryUrl: string = "https://data.grandrapidsmi.gov/resource/ybyy-b267.json";

  private baseFilterUrl: string = `${this.baseQueryUrl}//maps.googleapis.com/maps/api/js?key=${this.googleApiKey}`;


  constructor(private http: HttpClient) {


   }

   getGoogleMap() {
    let queryString = `${this.baseFilterUrl}`
    return this.http.get(queryString);
  }
}
