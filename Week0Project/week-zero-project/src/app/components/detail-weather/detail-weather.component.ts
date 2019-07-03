import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-weather',
  templateUrl: './detail-weather.component.html',
  styleUrls: ['./detail-weather.component.css']
})
export class DetailWeatherComponent implements OnInit {
  

  constructor(private apiService: ApiService,
    private route: ActivatedRoute) { }
singleCity: any;

  getSingleCity() {
    //const name = +this.route.snapshot.paramMap.get('name');
    this.apiService.getCity('s').subscribe(singleCity => 
      this.singleCity = singleCity
    );
  }

  ngOnInit() {
    this.getSingleCity;
  }

}
