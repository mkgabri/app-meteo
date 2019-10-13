import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiKey: string = 'a10e2b304a8e0f35736d1e73132248eb';
  URI: string = '';

  constructor(private http: HttpClient) {
    this.URI = `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&units=metric&q=`;
  }

  getWeather(cityName: string, countryCode?: string){
    if(!!countryCode){
      return this.http.get(`${this.URI}${cityName},${countryCode}`);  //daformulare meglio con più tempo
    }
    return this.http.get(`${this.URI}${cityName}`);
  }

}