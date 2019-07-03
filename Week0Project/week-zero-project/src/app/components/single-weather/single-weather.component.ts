import { Component, OnInit, Input } from '@angular/core';
import { Weather } from 'src/app/models/weather';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute } from '@angular/router';
import { SearchBarComponent } from '../search-bar/search-bar.component';

@Component({
  selector: 'app-single-weather',
  templateUrl: './single-weather.component.html',
  styleUrls: ['./single-weather.component.css']
})
export class SingleWeatherComponent implements OnInit {
  
  @Input() //weather: any;
  weather: Weather;

  singleCity: any;

  constructor(private apiService: ApiService,
    private route: ActivatedRoute) { }



  getSingleCity() {
    
    //console.log(this.route.snapshot.params.name);
    this.apiService.getCity().subscribe(singleCity =>
      this.singleCity = singleCity
    );
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      // params.name;
      this.getSingleCity();
    });
  }
}
