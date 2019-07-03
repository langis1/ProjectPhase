import { Component, OnInit, Input } from '@angular/core';
import { SingleWeatherComponent } from '../single-weather/single-weather.component';
import { Weather } from 'src/app/models/weather';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  weathers:  Weather[]; //any[]; //Weather[];


  //log(val) {
  //  console.log(val);
  //}

  constructor(private apiService: ApiService) {  
   
  }

  getCitiesInList(): void {
    this.apiService.getWeather().subscribe(weathers => 
      this.weathers = weathers
    );
  }

  ngOnInit() {
  //  this.loadWeather();
this.getCitiesInList();
    }
  }
 // async loadWeather() {
 //   this.weathers = await this.apiService.getWeatherForCities([1,2,3]);
 // }

