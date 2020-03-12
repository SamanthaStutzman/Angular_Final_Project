import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';

const apiKeyID : string = "3ry4ygcl2jyzl46n04drlowbh";
const apiKeySecret : string = "3ja8i8umxx54fpuhifop926h17fcxpu89ss6fapbvft01lxptv";

const apiTarget : string = "https://cors-anywhere.herokuapp.com/https://data.grandrapidsmi.gov/resource/kxix-u7si.json";

const apiAuthString : string = window.btoa(`${apiKeyID}:${apiKeySecret}`);

// const preflightHeaders = {
//   headers: new HttpHeaders({
//     'Access-Control-Request-Method' : 'GET',
//     'Access-Control-Request-Headers' : 'Authorization'
//   })
// };

const getHeaders = {
  headers: new HttpHeaders({
    'Authorization': `Basic M3J5NHlnY2wyanl6bDQ2bjA0ZHJsb3diaDozamE4aTh1bXh4NTRmcHVoaWZvcDkyNmgxN2ZjeHB1ODlzczZmYXBidmZ0MDFseHB0dg==`
  })
};

@Injectable({
  providedIn: 'root'
})

export class Api311Service {

  constructor(private myHTTP : HttpClient) { }

  data;

  retrieveData () {
//    this.myHTTP.options(apiTarget, preflightHeaders);
    this.myHTTP.get(apiTarget, getHeaders).subscribe((data : any) => {this.data = data});
  }
}
