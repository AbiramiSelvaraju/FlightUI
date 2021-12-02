import { Component, OnInit } from '@angular/core';
import { LocalhostService } from 'src/app/localhost.service';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SearchReq } from 'src/app/model/searchReq.model';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {
  pageTitle = "Flights";

  flightSearchFormGroup: FormGroup;

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

  constructor(private service: LocalhostService){}

  public ngOnInit(){
  
    this.flightSearchFormGroup = new FormBuilder().group({
      fromPlace: new FormControl('', Validators.required),
      toPlace: new FormControl('', Validators.required),
      tripType: new FormControl('', Validators.required),
      departOn: new FormControl('', Validators.required)
      });
  }

  getFlightSchedules(){

    if(this.flightSearchFormGroup.valid){

      // console.log(this.flightSearchFormGroup.value);
      const flightSchedule = new SearchReq().deserialize(this.flightSearchFormGroup.value);

      this.service.getFlightScheduleForBooking(flightSchedule).subscribe(result=>{
        if(result!=null){
            // console.log(result);
            this.flightSchedules = result;
        }else{
          console.log("flightSchedule get fails");
        }
      });
      
    }
  }


}
