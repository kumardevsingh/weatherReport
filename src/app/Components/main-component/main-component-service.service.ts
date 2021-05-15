import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class MainComponentServiceService {
  constructor(private http: HttpClient) { }
  cityName = "Paris";
  getCityWiseWetherData(cityName): Observable<any> {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=3d8b309701a13f65b660fa2c64cdc517`;
    return this.http.get(url);
  }
}
