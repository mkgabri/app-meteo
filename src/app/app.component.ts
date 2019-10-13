import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  // name = 'Angular';
  weather;
  iconType;
  imageBox;
  imgURL;
  sunRise;
  sunSet;

  constructor( private weatherService: WeatherService){
  }

  ngOnInit() {
  }

  getWeather(cityName: string, countryCode?: string) {
    //chiamata al metodo weather con cityName e countryCode
    this.weatherService.getWeather(cityName, countryCode).subscribe(
      res => {this.weather = res},
      err => console.log(err)
    )
    //chiamata al metodo weather con solo il cityName
    this.weatherService.getWeather(cityName).subscribe(
      // res => console.log(res),
      res => {
                this.weather = res,
                this.iconType = this.weather.weather[0].icon,
                console.log(this.iconType);
              },
      err => console.log(err)
    )

    

  }

  submitLocation(cityName: HTMLInputElement, countryCode: HTMLInputElement){
    console.log(cityName.value, countryCode.value); //stampa nome citta e paese

    if(cityName.value){
      this.getWeather(cityName.value, countryCode.value);
      cityName.value = '';
      countryCode.value = '';
    }else {
      alert('inserisci almeno il nome della città');
    }
    
    // console.log("icona meteo "+this.iconType);
    // this.imgURL = `http://openweathermap.org/img/wn/${this.iconType}@2x.png`;
    // console.log("link icona meteo "+this.imgURL);

    // this.imageBox = document.getElementById('imagebox') as HTMLImageElement;
    // this.imageBox.src = `http://openweathermap.org/img/wn/${this.iconType}@2x.png`;;

    cityName.focus();
    return false;
  }

}
