import { Component, OnInit } from "@angular/core";
import { InteractionsService } from "../../interactions.service";

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
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  }



  // latitude = 42.963795;
  // longitude = -85.670006;
  // zoom =14;
  // reply: any
  // mapType = 'roadmap';
  // markers = [
  //   { lng: -85.6797945188957, lat: 42.95149365769928, alpha: 1 },
  //   { lng: -85.67888678898416, lat: 42.95148546359977, alpha: 1 },
  //   { lng: -85.67888678898416, lat: 42.95148546359977, alpha: 1 },
  //   { lng: -85.67830904924729, lat: 42.95147479890077, alpha: 1 },
  //   { lng: -85.67817861892253, lat: 42.951463101490894, alpha: 1 },
  //   { lng:  -85.67794840391285, lat:  42.95140308170747, alpha: 1 },
  //   { lng:  -85.67730775795953, lat:  42.951190967442535, alpha: 1 }
  // ];
 

  constructor(private Html: InteractionsService) {}

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

   flightPlanCoordinates = [
    {lat: 37.772, lng: -122.214},
    {lat: 21.291, lng: -157.821},
    {lat: -18.142, lng: 178.431},
    {lat: -27.467, lng: 153.027}
  ];
   flightPath = new google.maps.Polyline({
    path: this.flightPlanCoordinates,
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 2
  });


  click(event: google.maps.MouseEvent) {
    this.addMarker(event.latLng.lat(),event.latLng.lng())
  }

  // display(){
  //   let reply = this.Html.getCityData().subscribe((data) => this.reply = data)
  //   console.log(reply)
  // }

//   addMarker(lat: number, lng: number) {
//  this.markers.push({ lat, lng, alpha: 0});
// }
}
 