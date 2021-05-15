import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CityDetailsService } from "./city-details.service";

@Component({
  selector: "app-city-details",
  templateUrl: "./city-details.component.html",
  styleUrls: ["./city-details.component.css"],
})
export class CityDetailsComponent implements OnInit {
  cityDetailsData: any;
  city: string;
  cityDetailList: any[] = [];

  constructor(private cityDetailsService: CityDetailsService, private route: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.activatedRoute.snapshot.params.id);
    this.city = this.activatedRoute.snapshot.params.id;
    this.getCityDetailsData(this.city);

  }
  getCityDetailsData(city) {
    this.cityDetailsService
      .getWeatherDetailsOf5daysByCityName(city)
      .subscribe((res) => {

        res.list.forEach(obj => {
          this.cityDetailList.push(this.setData(obj));
        });

      });
  }

  setData(obj) {
    let _tempObj = {};
    const dt = new Date(obj.dt * 1000)
    _tempObj['date'] = `${dt.getDate()}/${dt.getMonth()}/${dt.getFullYear()} `;

    _tempObj['temp_max'] = (obj.temp.max - 273.15).toFixed(0);
    _tempObj['temp_min'] = (obj.temp.min - 273.15).toFixed(0);
    _tempObj['pressure'] = obj.pressure;

    return _tempObj;

  }



  navBack() {
    this.route.navigate(["/"])
  }

}
