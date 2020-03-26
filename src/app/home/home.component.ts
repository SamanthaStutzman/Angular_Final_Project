import { Component, OnInit, Input } from "@angular/core";
import { SearchLocationService } from "../search-location.service";
import { SharedDataService } from "../shared-data.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  @Input() center;

  options = {
    zoom: 12,
    center: new google.maps.LatLng({ lng: -85.6681, lat: 42.9634 })
  };

  constructor(private router: Router, private data: SharedDataService) {}

  ngOnInit() {}

  moveBottom() {
    location.href = "#link311";
    // this.data.myStuff = 2
  }

  moveTop() {
    location.href = "#home-content";
  }

  locateAddress(event) {
    this.router.navigate(["/road"], {
      queryParams: { Lat: event.results.lat, Lng: event.results.lng }
    });
  }
}
