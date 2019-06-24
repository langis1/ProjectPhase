import { Component, OnInit, Input } from '@angular/core';
import { Weather } from 'src/app/models/weather';

@Component({
  selector: 'app-single-weather',
  templateUrl: './single-weather.component.html',
  styleUrls: ['./single-weather.component.css']
})
export class SingleWeatherComponent implements OnInit {
@Input() weather: Weather;

  constructor() { }

  ngOnInit() {
  }



}
