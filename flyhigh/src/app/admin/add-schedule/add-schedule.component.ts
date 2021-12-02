import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalhostService } from 'src/app/localhost.service';
import { Flight } from 'src/app/model/flight.model';
import { FlightSchedule } from 'src/app/model/flightSchedule.model';

@Component({
  selector: 'app-add-schedule',
  templateUrl: './add-schedule.component.html',
  styleUrls: ['./add-schedule.component.css']
})
export class AddScheduleComponent {

  pageTitle: string = 'Add Schedule';
  flightScheduleFormGroup: FormGroup;
  
  constructor(private service: LocalhostService, private route: Router) { }

  places = [
    { id: 1, name: "Coimbatore" },
    { id: 2, name: "Chennai"},
    { id: 3, name: "Mumbai" },
    { id: 4, name: "Pune" },
    { id: 5, name: "Kochi" }
  ];

  schedules =[
    { id: 1, days: "Daily" },
    { id: 2, days: "Weekends"},
    { id: 3, days: "Weekdays" },
    { id: 4, days: "Monday" },
    { id: 5, days: "Tuesday" }
  ];

  tripTypes =[
    { id: 1, name: "one-way" },
    { id: 2, name: "round-trip"},
  ];

  flights: any[] = [];


  ngOnInit(): void {
    this.initForm();

    this.service.getFlight().subscribe(result=> this.flights = result);
   }

  initForm(){
    this.flightScheduleFormGroup = new FormBuilder().group({
      id: null,
      fromTime: new FormControl('', Validators.required),
      toTime: new FormControl('', Validators.required),
      fromPlace: new FormControl('', Validators.required),
      toPlace: new FormControl('', Validators.required),
      tripType: new FormControl('', Validators.required),
      schedule: new FormControl('', Validators.required),
      flight :new FormControl('', Validators.required)
      });
  }

  addFlightSchedule(){
    if(this.flightScheduleFormGroup.valid){

      console.log(this.flightScheduleFormGroup.value);

      console.log(new FlightSchedule().deserialize(this.flightScheduleFormGroup.value));

      const flightSchedule = new FlightSchedule().deserialize(this.flightScheduleFormGroup.value);

      this.service.addFlightSchedule(flightSchedule).subscribe(result=>{
        this.route.navigate(['/schedule']);
      });
      
    }
  }

}
