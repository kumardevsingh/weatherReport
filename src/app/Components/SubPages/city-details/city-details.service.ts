import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CityDetailsService {
  constructor(private http: HttpClient) { }

  getWeatherDetailsOf5daysByCityName(city): Observable<any> {
    const url = `http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=5&appid=3d8b309701a13f65b660fa2c64cdc517`;
    return this.http.get(url);
  }
}
