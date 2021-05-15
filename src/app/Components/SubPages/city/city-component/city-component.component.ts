import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-city-component",
  templateUrl: "./city-component.component.html",
  styleUrls: ["./city-component.component.css"],
})
export class CityComponentComponent implements OnInit, OnChanges {
  @Input() weatherData: any;
  weatherDataMod: any;

  constructor(private route: Router) { }

  ngOnInit() {
    this.setweatherData(this.weatherData);
  }
  ngOnChanges() {
    this.setweatherData(this.weatherData);
  }

  gotoCityDetails(id) {
    console.log("City id==", id);
    this.route.navigate(["city/" + id]);
  }

  setweatherData(data) {
    this.weatherDataMod = data;
    let sunRiseTime = new Date(data.sys.sunrise * 1000 - (data.timezone * 1000));
    this.weatherDataMod.sunrise_time = sunRiseTime.toLocaleTimeString();

    let sunsetTime = new Date(data.sys.sunset * 1000 - (data.timezone * 1000));
    this.weatherDataMod.sunset_time = sunsetTime.toLocaleTimeString();

    let currentDate = new Date();
    this.weatherDataMod.isDay = currentDate.getTime() < sunsetTime.getTime();
    this.weatherDataMod.temp_celcius = (data.main.temp - 273.15).toFixed(0);
    this.weatherDataMod.temp_min = (data.main.temp_min - 273.15).toFixed(0);
    this.weatherDataMod.temp_max = (data.main.temp_max - 273.15).toFixed(0);
    this.weatherDataMod.temp_feels_like = (
      data.main.feels_like - 273.15
    ).toFixed(0);
    this.weatherDataMod.cloudType = data.weather[0].main;
  }
}
