import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalhostService } from 'src/app/localhost.service';
import { Airline } from 'src/app/model/airline.model';
import { Flight } from 'src/app/model/flight.model';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent {
  pageTitle: string = 'Add Flight';

  flightFormGroup: FormGroup;

  constructor(private service: LocalhostService, private route: Router) { }
  airlines: any[] = [];

  ngOnInit(): void {
    this.initForm();
  
    this.service.getAirline().subscribe(result=> this.airlines = result);
   }

  initForm(){
    this.flightFormGroup = new FormBuilder().group({
      id: null,
      number: new FormControl('', Validators.required),
      instrumentUsed: new FormControl('', Validators.required),
      totalBusinessSeats: new FormControl('', Validators.required),
      totalNonBusinessSeats: new FormControl('', Validators.required),
      numberOfRows: new FormControl('', Validators.required),
      airline :new FormControl('', Validators.required)
      });
  }

  addFlight(){
    if(this.flightFormGroup.valid){

      console.log(this.flightFormGroup.value);

      console.log(new Flight().deserialize(this.flightFormGroup.value));

      const flight = new Flight().deserialize(this.flightFormGroup.value);

      this.service.addFlight(flight).subscribe(result=>{
        this.route.navigate(['flight']);
      });
      
      
    }
  }

}
