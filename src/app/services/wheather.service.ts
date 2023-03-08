import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WheatherService {

  constructor(private http: HttpClient) {}
  
  getWeatherData(cityName: string): Observable<WeatherData>{
    
    const apiUrl = `${environment.wheatherApiBaseUrl}/${cityName}`;

    return this.http.get<WeatherData>(apiUrl, {
      headers: new HttpHeaders()
      .set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostHeaderValue)
      .set(environment.XRapidAPIKeyHeaderName, environment.XRapidAPIKeyHeaderValue)
    })
  }   
}
