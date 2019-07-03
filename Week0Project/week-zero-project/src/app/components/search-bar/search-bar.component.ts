import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import { Subject } from 'rxjs';
import { FormControl } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']

})
export class SearchBarComponent implements OnInit {

 // @Output() newItemEvent = new EventEmitter<string>();

  constructor(private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  selectedCity = new FormControl('');

  getCity() {
    return this.apiService.getCity(this.selectedCity);
  }

  goToSingleWeather() {
    console.log(this.selectedCity);
    //const name = +this.route.snapshot.paramMap.get('selectedCity');
    this.router.navigate(['/city/'+ this.selectedCity.value]);
  }

  //addNewItem(value: string) {
  //  this.newItemEvent.emit(value);
  //}


  ngOnInit() {
  }
}
