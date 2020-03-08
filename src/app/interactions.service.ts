import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class InteractionsService {

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
}
