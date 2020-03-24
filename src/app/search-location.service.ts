import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

 

export class SearchLocationService {
  address : string = ''
  key: string = 'AIzaSyDZnC2DeWiqSRv6RDEQSl8VkjXr-HvKtGY'
  api = `https://maps.googleapis.com/maps/api/geocode/json?key=${this.key}&address=`
  

  constructor(private myHTTP : HttpClient) { }
  getAddress(address){
    return this.myHTTP.get(`${this.api} + ${address}`)
  }
}
