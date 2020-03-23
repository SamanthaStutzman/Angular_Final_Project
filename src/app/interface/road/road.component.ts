import { Component, OnInit } from "@angular/core";
import { Api311Service } from "../.././api-311.service";
import { ApiPaserService } from "../.././api-paser.service";

@Component({
  selector: "app-road",
  styleUrls: ["./road.component.css"],
  templateUrl: "./road.component.html"
})
export class RoadComponent implements OnInit {
  width = "100%";
  height = "100%";

  zoom = 12;
  // center: google.maps.LatLng
  myLatLng = new google.maps.LatLng({ lng: -85.6681, lat: 42.9634 });
  markers = [];
  polylines = [];

  options: google.maps.MapOptions = {
    mapTypeId: "hybrid",
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8
  };
  road: any;
  pothole: any;
  filter: string = "road";

  visible;

  constructor(
    private api311: Api311Service,
    private apiPaser: ApiPaserService
  ) {}

  ngOnInit() {}

  addMarker(myLat: number, myLng: number) {
    this.markers.push({
      position: {
        lat: myLat,
        lng: myLng
      },
      title: "Marker title " + (this.markers.length + 1)
    });
  }

  click(event: google.maps.MouseEvent) {}

  onClick(road, pothole) {
    if (this.filter === "pothole") {
      this.polylines = [];
      for (let place of this.api311.processCoordinates("January 1 2019")) {
        this.addMarker(place.lat, place.lng);
      }
    } else if (this.filter != "pothole") {
      this.markers = [];
      for (let lineyboi of this.apiPaser.processPolylines()) {
        this.polylines.push(lineyboi);
      }
    }
  }
}
