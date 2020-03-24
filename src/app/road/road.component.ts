import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';
import { GeocodeService } from '../geocode.service';

@Component({
  selector: 'app-road',
  styleUrls: ['./road.component.css'],
  templateUrl: './road.component.html'
})

export class RoadComponent implements OnInit {

  @ViewChild('googleMap') gMap: GoogleMap;
  @ViewChild('searchError') searchError: ElementRef;
  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow;
  @ViewChild('infoWindowContent') infoWindowContent: ElementRef;
  
  latitude : number = 42.963795;
  longitude : number = -85.670006;
  zoom : number = 14;
  reply: any;
  mapType : string = 'roadmap';
  center : any = {lng: this.longitude, lat: this.latitude}
  markerOptions : any = {icon: 'http://maps.google.com/mapfiles/kml/paddle/red-circle-lv.png'}

  showMarkers = true;
  markerPositions: google.maps.LatLng[] = this.geocodeService.getGeolocations();
  visibleMarkers: google.maps.LatLng[] = [];

  LatLng = new google.maps.LatLng({ lng: -85.6681, lat: 42.9634 });
  geocoder = new google.maps.Geocoder();
  initZoom = 11;
  GR = "grand rapids, michigan";
  showSearchError: Boolean = false;
  
  markers = [
    { lng: -85.6797945188957, lat: 42.95149365769928, alpha: 1 },
    { lng: -85.67888678898416, lat: 42.95148546359977, alpha: 1 },
    { lng: -85.67888678898416, lat: 42.95148546359977, alpha: 1 },
    { lng: -85.67830904924729, lat: 42.95147479890077, alpha: 1 },
    { lng: -85.67817861892253, lat: 42.951463101490894, alpha: 1 },
    { lng: -85.67794840391285, lat:  42.95140308170747, alpha: 1 },
    { lng: -85.67730775795953, lat:  42.951190967442535, alpha: 1 }
  ];
  
  
  constructor(private geocodeService: GeocodeService) { }

  searchAddress(address: string) {
    this.geocoder.geocode({ 'address': address }, (results, status) => {
      if (status == 'OK') {
        if (this.gMap === undefined) {
          console.log('gMap is undefined');
        } else {
          this.searchError.nativeElement.innerText = "";
          this.gMap.center = results[0].geometry.location;
          this.gMap.zoom = 16;
        }
      } else {
        console.log('Geocode was not successful for the following reason: ' + status);
        this.showSearchError = true;

        //ERRORS
        let errStr = 'ERROR';
        if (address == "") {
          errStr = "Please re-enter an address and try again."
        } else if (status === 'INVALID_REQUEST' ||
          status === 'UNKNOWN_ERROR' ||
          status === 'REQUEST_DENIED') {
          errStr = "Something went wrong. Please try again.";
        } else if (status === 'OVER_QUERY_LIMIT') {
          errStr = "Please wait then try again.";
        } else if (status === 'ZERO_RESULTS') {
          errStr = "No results were found. Please try again.";
        }
        this.searchError.nativeElement.innerText = errStr;
      }
    });
  }
  
  ngOnInit() {  
  } 

  
  
}