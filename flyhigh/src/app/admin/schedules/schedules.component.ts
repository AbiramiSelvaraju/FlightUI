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

  constructor(private service: LocalhostService){}

  public ngOnInit(){
    this.service.getFlightSchedule().subscribe(result=>
      this.flightSchedules = result);
    console.log(this.flightSchedules); 
  }

  // airlines: any[] = [
  //   {
  //     "name": "Indigo",
  //     "contactAddress": "CBE",
  //     "contactNumber": "986432",
  //     "status": true
  //   },
  //   {
  //     "name": "Deccan Air",
  //     "contactAddress": "CN",
  //     "contactNumber": "776432",
  //     "status": false
  //   }
  // ];

}
