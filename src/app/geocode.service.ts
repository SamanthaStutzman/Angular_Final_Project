import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CityData } from './cityData';
import * as geocodedCityData from '../assets/gr_geocoded.json';

@Injectable({
  providedIn: 'root'
})
export class GeocodeService {

  private geoCity: CityData[] = [];
  private hardData = (geocodedCityData as any).default;

  constructor(private http: HttpClient) {
    for (const residence of this.hardData) {
      this.geoCity.push(new CityData(residence));
    }
   }


  getGeolocations(): google.maps.LatLng[] {
    let geolocs: google.maps.LatLng[] = [];
    for (const residence of this.geoCity) {
      geolocs.push(residence.geolocation);
    }
    return geolocs;
  }

  getParcelByLatLng(targetGeoloc: google.maps.LatLng) {
    return this.geoCity.find(a => a.geolocation.equals(targetGeoloc));
  }

}
