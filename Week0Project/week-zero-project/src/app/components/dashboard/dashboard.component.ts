import { Component, OnInit, Input } from '@angular/core';
import { SingleWeatherComponent } from '../single-weather/single-weather.component';
import { Weather } from 'src/app/models/weather';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  weathers: Weather[];

  constructor() { }

  ngOnInit() {
    this.weathers = [
      {id: 1,
      city: 'wherever1',
      state: 'whereverState1',
      temperature: 1},
      
      {id: 2,
      city: "wherever2",
      state: "whereverState2",
      temperature: 2},

      {id: 3,
      city: "wherever3",
      state: "whereverState3",
      temperature: 3}
    ]
  }

}
