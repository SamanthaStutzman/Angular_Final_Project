import { Component, OnInit } from "@angular/core";
import{Api311Service} from '../.././api-311.service'
import{ApiPaserService} from '../.././api-paser.service'


@Component({
  selector: "app-road",
  styleUrls: ["./road.component.css"],
  templateUrl: "./road.component.html"
})
export class RoadComponent implements OnInit {
  zoom = 11
  // center: google.maps.LatLng
  myLatLng= new google.maps.LatLng({lng:-85.6681, lat: 42.9634})
  markers= []
  polylines=[]
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  }

  constructor(private api311: Api311Service, private apiPaser: ApiPaserService  ) {}

  ngOnInit() {

  }

  addMarker(myLat:number, myLng:number) {
    this.markers.push({
      position: {
        lat: myLat,
        lng: myLng
      },
     
      title: 'Marker title ' + (this.markers.length + 1),
      
    })
  }
  addPolyline(myLine: google.maps.Polyline) {
    this.polylines.push(myLine)
  }

  


  click(event: google.maps.MouseEvent) {
    
    for(let place of this.api311.processCoordinates("January 1 2019")){
      this.addMarker(place.lat, place.lng)
    }
    for(let place of this.apiPaser.processPolylines()){
      this.addPolyline(place)
  }}

  // draw(event: google.maps.MouseEvent){
  //   this.flightPath()
  // }


}