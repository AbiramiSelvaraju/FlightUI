import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { AddAirlineComponent } from './add-airline/add-airline.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { AddScheduleComponent } from './add-schedule/add-schedule.component';
import { AirlineComponent } from './airline/airline.component';
import { FlightComponent } from './flight/flight.component';
import { SchedulesComponent } from './schedules/schedules.component';

const appRoutes: Routes = [
  { path: 'airline', component: AirlineComponent },
  { path: '', component: LoginComponent },
  { path: 'addairline', component: AddAirlineComponent },
  { path: 'addflight', component: AddFlightComponent },
  { path: 'flight', component: FlightComponent },
  { path: 'addschedule', component: AddScheduleComponent },
  { path: 'schedule', component: SchedulesComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ]
})
export class AdminModule { }
