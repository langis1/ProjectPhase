import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Weather } from '../models/weather';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  weathersUrl: string = 'http://api.openweathermap.org/data/2.5/group?id=3067696,703448,2643743&units=metric&APPID=50052f3a89d319788df549fe8d835d8d';
  apiCode: string = '&APPID=50052f3a89d319788df549fe8d835d8d'
  cityUrl: string = 'api.openweathermap.org/data/2.5/weather?q='
  route: any;

  constructor(private http: HttpClient) { }

  private openWeatherCityWeatherToWeather (cityWeather) {
    return {
      temperature: cityWeather.main.temp
    }
  }

  getWeather(): Observable<Weather[]> {
    return this.http.get<Weather[]>(this.weathersUrl).pipe(map((data: any) => data.list)); 
  }

  // O

  async getWeatherForCities(cities: number[]): Promise<Weather[]> {
    const response = await fetch(this.weathersUrl);
    const dataFromApi = await response.json();
    return dataFromApi.list.map(this.openWeatherCityWeatherToWeather);
  }

  async getWeatherForCity(city: number) {
    const response = await fetch(this.weathersUrl);
    const dataFromApi = await response.json();
    return this.openWeatherCityWeatherToWeather(dataFromApi)
  }

  getCity() {
    const url = this.cityUrl + this.route.snapshot.params.name + this.apiCode;
    return this.http.get<Weather>(url).pipe(map((data: any) => data.list));
  }

  // searchCity(term: string): Observable<Weather[]> {
  //   if (!term.trim()) {
  //     // if not search term, return empty hero array.
  //     return of ([]);
  //   }
  //   return this.http.get<Weather[]>(this.cityUrl+term+this.apiCode).pipe();
  // }

//  async getWeather(){const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Prague,cz&APPID=50052f3a89d319788df549fe8d835d8d');
//const data = await response.json();}
}
