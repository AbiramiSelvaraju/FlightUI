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
import { UserModule } from './user/user.module';
import { UpdateAirlineComponent } from './admin/update-airline/update-airline.component';
import { UpdateFlightComponent } from './admin/update-flight/update-flight.component';


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
    LoginComponent,
    UpdateAirlineComponent,
    UpdateFlightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AdminModule,
    UserModule
    // RouterModule.forRoot(appRoutes)
  ],
  providers: [ {provide: HTTP_INTERCEPTORS, useClass: TokenService, multi: true}],
  bootstrap: [AppComponent]
})




export class AppModule { 
}
