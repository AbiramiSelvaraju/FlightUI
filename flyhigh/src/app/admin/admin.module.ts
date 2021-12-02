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
import { UpdateAirlineComponent } from './update-airline/update-airline.component';
import { UpdateFlightComponent } from './update-flight/update-flight.component';
import { AdminAuthGuard } from '../auth-guard.service';
import { UserAuthGuard } from '../user-guard.service';

const appRoutes: Routes = [
  { path: 'airline',  canActivate:[AdminAuthGuard], component: AirlineComponent },
  { path: '', component: LoginComponent },
  { path: 'addairline', canActivate:[AdminAuthGuard], component: AddAirlineComponent },
  { path: 'addflight',  canActivate:[AdminAuthGuard],component: AddFlightComponent },
  { path: 'flight', canActivate:[AdminAuthGuard], component: FlightComponent },
  { path: 'addschedule', canActivate:[AdminAuthGuard], component: AddScheduleComponent },
  { path: 'schedule', canActivate:[AdminAuthGuard], component: SchedulesComponent },
  { path: 'updateAirline/:airlineId', canActivate:[AdminAuthGuard], component: UpdateAirlineComponent },
  { path: 'updateFlight/:flightId', canActivate:[AdminAuthGuard], component: UpdateFlightComponent }
];

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ]
})
export class AdminModule { }
