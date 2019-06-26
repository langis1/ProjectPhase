import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Weather } from '../models/weather';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  weathersUrl: string = 'http://api.openweathermap.org/data/2.5/group?id=524901,703448,2643743&units=metric&APPID=50052f3a89d319788df549fe8d835d8d';

  constructor(private http: HttpClient) { }

  getWeather(): Observable<any> {
    return this.http.get<any>(this.weathersUrl);
  }

//  async getWeather(){const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Prague,cz&APPID=50052f3a89d319788df549fe8d835d8d');
//const data = await response.json();}
}
