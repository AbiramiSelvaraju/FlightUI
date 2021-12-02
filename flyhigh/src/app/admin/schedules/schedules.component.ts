import { Component, OnInit } from '@angular/core';
import { LocalhostService } from 'src/app/localhost.service';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.css']
})
export class SchedulesComponent {

  pageTitle: string = 'Schedule List';
  flightSchedules: any[] = [];

  places = [
    { id: 1, name: "Coimbatore" },
    { id: 2, name: "Chennai"},
    { id: 3, name: "Mumbai" },
    { id: 4, name: "Pune" },
    { id: 5, name: "Kochi" }
  ];

  tripTypes =[
    { id: 1, name: "one-way" },
    { id: 2, name: "round-trip"},
  ];

  flights: any[] = [];

  constructor(private service: LocalhostService){}

  public ngOnInit(){
    this.service.getFlightSchedule().subscribe(result=>
      this.flightSchedules = result);
    console.log(this.flightSchedules); 
  }

}
