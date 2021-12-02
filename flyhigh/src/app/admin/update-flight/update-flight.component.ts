import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LocalhostService } from 'src/app/localhost.service';

@Component({
  selector: 'app-update-flight',
  templateUrl: './update-flight.component.html',
  styleUrls: ['./update-flight.component.css']
})
export class UpdateFlightComponent implements OnInit {

  pageTitle: string = 'Update Flight';

  flightFormGroup = new FormGroup({
    id: new FormControl('', Validators.required),
    number: new FormControl('', Validators.required),
    instrumentUsed: new FormControl('', Validators.required),
    totalBusinessSeats: new FormControl('', Validators.required),
    totalNonBusinessSeats: new FormControl('', Validators.required),
    numberOfRows: new FormControl('', Validators.required)
  });

  constructor(private service: LocalhostService, private route: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.service.getFlightById(this.activatedRoute.snapshot.params['flightId']).subscribe(result => {

      console.log(result);

      this.flightFormGroup = new FormGroup({
        id: new FormControl(this.activatedRoute.snapshot.params['flightId'], Validators.required),
        number: new FormControl(result['number'], Validators.required),
        instrumentUsed: new FormControl(result['instrumentUsed'], Validators.required),
        totalBusinessSeats: new FormControl(result['totalBusinessSeats'], Validators.required),
        totalNonBusinessSeats: new FormControl(result['totalNonBusinessSeats'], Validators.required),
        numberOfRows: new FormControl(result['numberOfRows'], Validators.required)
      });
    });
  }

  updateFlight(){
    if (this.flightFormGroup.valid) {
      console.log(this.flightFormGroup.value);
      this.service.updateAirline(this.flightFormGroup.value).subscribe(result => {
          this.route.navigate(['flight']); 
      });
    }

  }
}
