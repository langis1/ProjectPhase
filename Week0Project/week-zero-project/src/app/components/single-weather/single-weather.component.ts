import { Component, OnInit, Input } from '@angular/core';
import { Weather } from 'src/app/models/weather';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-single-weather',
  templateUrl: './single-weather.component.html',
  styleUrls: ['./single-weather.component.css']
})
export class SingleWeatherComponent implements OnInit {
@Input() weather: Weather;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    }
}
