import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AHeaderComponent } from './admin/a-header/a-header.component';
import { AFooterComponent } from './a-footer/a-footer.component';
import { AirlineComponent } from './admin/airline/airline.component';
import { RouterModule, Routes } from '@angular/router';
import { AddAirlineComponent } from './admin/add-airline/add-airline.component';
import { FlightComponent } from './admin/flight/flight.component';
import { AddFlightComponent } from './admin/add-flight/add-flight.component';
import { SchedulesComponent } from './admin/schedules/schedules.component';
import { AddScheduleComponent } from './admin/add-schedule/add-schedule.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS,HttpClientModule } from '@angular/common/http';
import { TokenService } from './token.service';

import { AdminModule } from './admin/admin.module';

// const appRoutes: Routes = [
//   { path: 'airline', component: AirlineComponent },
//   { path: 'login', component: LoginComponent },
//   { path: 'addairline', component: AddAirlineComponent },
//   { path: 'addflight', component: AddFlightComponent },
//   { path: 'flight', component: FlightComponent },
//   { path: 'addschedule', component: AddScheduleComponent },
//   { path: 'schedule', component: SchedulesComponent }
// ];

@NgModule({
  declarations: [
    AppComponent,
    AHeaderComponent,
    AFooterComponent,
    AirlineComponent,
    AddAirlineComponent,
    FlightComponent,
    AddFlightComponent,
    SchedulesComponent,
    AddScheduleComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AdminModule
    // RouterModule.forRoot(appRoutes)
  ],
  providers: [ {provide: HTTP_INTERCEPTORS, useClass: TokenService, multi: true}],
  bootstrap: [AppComponent]
})




export class AppModule { 
}
