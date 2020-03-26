import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { SearchLocationService } from "../search-location.service";

@Component({
  selector: "search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.css"]
})
export class SearchBarComponent implements OnInit {
  @Output() center = new EventEmitter();
  address: string;
  zoom :number;
  constructor(private searchLocation: SearchLocationService) {}

  ngOnInit(): void {}
  findAddress() {
    this.searchLocation.getAddress(this.address).subscribe((data: any) => {
      this.center.emit({
        results: data.results[0].geometry.location,
        zoom: this.zoom = 16
      });
      //
    });
  }
}
