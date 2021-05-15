import { Component, OnChanges, OnInit } from "@angular/core";
import { MainComponentServiceService } from "./main-component-service.service";

@Component({
  selector: "app-main-component",
  templateUrl: "./main-component.component.html",
  styleUrls: ["./main-component.component.css"],
})
export class MainComponentComponent implements OnInit {
  weatherData: any;
  citysArr = ["Barcelona", "Helsinki", "Florence", "Prague", "Paris"];
  cityName = "";
  show: boolean;

  constructor(
    private mainComponentServiceService: MainComponentServiceService
  ) { }

  ngOnInit() {
    this.cityName = this.mainComponentServiceService.cityName;
    this.getDataByCityName();
  }

  getDataByCityName() {
    this.mainComponentServiceService.cityName = this.cityName;
    this.mainComponentServiceService
      .getCityWiseWetherData(this.cityName)
      .subscribe((res) => {
        this.weatherData = res;
        this.show = true;
      });
  }
}
