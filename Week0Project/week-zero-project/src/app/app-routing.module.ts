import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SingleWeatherComponent } from './components/single-weather/single-weather.component';
import { DetailWeatherComponent } from './components/detail-weather/detail-weather.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'city/:name', component: SingleWeatherComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
