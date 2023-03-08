import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.model';
import { WheatherService } from './services/wheather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private weatherService: WheatherService){

  }
  cityName: string = 'Baku';
  weatherData?: WeatherData
  ngOnInit(): void {
    this.getWeatherData(this.cityName)
  }
  onSubmit(){
    this.getWeatherData(this.cityName)
    this.cityName = '';
  }
  
  private getWeatherData(cityName: string){
    this.weatherService.getWeatherData(cityName)
    .subscribe({
      next: (res) => {
        console.log(res);

        this.weatherData = res  
      }
    })
  } 
}
