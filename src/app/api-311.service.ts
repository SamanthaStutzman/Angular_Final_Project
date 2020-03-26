import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';

const apiKeyID : string = "3ry4ygcl2jyzl46n04drlowbh";
const apiKeySecret : string = "3ja8i8umxx54fpuhifop926h17fcxpu89ss6fapbvft01lxptv";

//http://grand-rapids-proxy.herokuapp.com/proxy/resource/ykbs-97kp.json

//this is the URL for the 311 dataset, filtered to only return pothole reports and sort in order of date descending (most recent first)
//const apiTarget : string = "https://grand-rapids-proxy.herokuapp.com/proxy/resource/kxix-u7si.json?Script%20Used=PUBLIC%20SERVICES%20-%20Pothole&$order=date_and_time%20DESC";
const apiTarget : string = "https://grand-rapids-proxy.herokuapp.com/proxy/resource/kxix-u7si.json";

const apiAuthString : string = window.btoa(`${apiKeyID}:${apiKeySecret}`);

const getHeaders = {
  headers: new HttpHeaders({
    'Authorization' : apiAuthString
  })
};

@Injectable({
  providedIn: 'root'
})

export class Api311Service {

  constructor(private myHTTP : HttpClient) { }

  //data is where the actual returned data would go, if we could use the API
  data;

  //pings the API to get a fresh copy of the data
  //CURRENTLY NONFUNCTIONAL DUE TO API ISSUE
  retrieveData () {
    this.myHTTP.get(apiTarget).subscribe((data : any) => {this.data = data});
  }

  //extracts coordinates from the currently stored dataset, back to the cutoff date provided
  //coordinates are as an array of pair objects - will make these the google maps latlng class later
  processCoordinates (cutoffDate : string) {
    this.retrieveData();
    let myReturn = [];
    let dateCutoff = new Date(cutoffDate); //flipping the cutoff date into a Date object
    for (let report of this.data) {
      let reportDate = new Date(report.date_and_time);
      if(reportDate >= dateCutoff && report.coordinates != null) {
        //please note that the coordinates are in socrata in lng/lat (x/y) order, so they have to be transcribed reversed. 
        let myCoords = {'lat' : report.coordinates.coordinates[1], 'lng' : report.coordinates.coordinates[0]};
        myReturn.push(myCoords);
      }
      //if you've reached reports that are too old, return
      else if (reportDate < dateCutoff ) {
        return myReturn;
      }
    }
    return myReturn;
  }
}
