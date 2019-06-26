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
  weathers: Weather[];
  

  constructor(private apiService: ApiService) {  
  //   this.weathers = [{
  //     id:2,
  //     name:"ahij",
  //     country:"uhjk",
  //     temp:3
  //   },
  // {id:3,
  //   name:"ahij",
  //   country:"uhjk",
  //   temp:4}]
   
  }
  ngOnInit() {
    this.apiService.getWeather().subscribe(weathers => 
      this.weathers = weathers);
    }
}
