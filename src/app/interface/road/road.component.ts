import { Component, OnInit } from "@angular/core";
import { Api311Service } from "../.././api-311.service";
import { ApiPaserService } from "../.././api-paser.service";
import { mapToMapExpression } from '@angular/compiler/src/render3/util';
import { SearchLocationService } from 'src/app/search-location.service';


@Component({
  selector: "app-road",
  styleUrls: ["./road.component.css"],
  templateUrl: "./road.component.html"
})
export class RoadComponent implements OnInit {
  
  address: string;
  width = "100%";
  height = "100%";
  Geocoder = new google.maps.Geocoder
  zoom = 12;
  center = new google.maps.LatLng({ lng: -85.6681, lat: 42.9634 });
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
    private apiPaser: ApiPaserService,
    private searchLocation: SearchLocationService
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
    
    // onClick(road, pothole) {
    //   if (this.filter === "pothole") {
    //     this.polylines = [];
    //     for (let place of this.api311.processCoordinates("January 1 2019")) {
    //       this.addMarker(place.lat, place.lng);
    //     }
    //   } else if (this.filter != "pothole") {
    //     this.markers = [];
    //     for (let lineyboi of this.apiPaser.processPolylines()) {
    //       this.polylines.push(lineyboi);
    //     }
    //   }
    // }
    
    toggleOnRoad:boolean = true;
    toggleOnPothole:boolean = true;
    radioRoad:boolean = true;
    radioPothole:boolean = true;
    
    onClickRoad() {
      if (this.toggleOnRoad) {
        for (let lineyboi of this.apiPaser.processPolylines()) {
          this.polylines.push(lineyboi);
          this.radioRoad = false;
        }
        this.toggleOnRoad = false;
      } else {
        this.polylines = [];
        this.toggleOnRoad = true;
        this.radioRoad = true;
      }
    }
    
    onClickPothole() {
      if (this.toggleOnPothole) {
        for (let place of this.api311.processCoordinates("January 1 2019")) {
          this.addMarker(place.lat, place.lng);
        }
        this.toggleOnPothole = false;
        this.radioPothole = false;
      } else {
        this.markers = [];
        this.toggleOnPothole = true;
        this.radioPothole = true;
      }
    }
  }
  
  findAddress(){
    this.searchLocation.getAddress(this.address).subscribe((data:any) => {
      this.center= data.results[0].geometry.location
      this.zoom = 16
    })
  }
}
