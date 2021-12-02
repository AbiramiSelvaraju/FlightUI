import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalhostService } from 'src/app/localhost.service';

@Component({
  selector: 'app-update-airline',
  templateUrl: './update-airline.component.html',
  styleUrls: ['./update-airline.component.css']
})
export class UpdateAirlineComponent implements OnInit {

  pageTitle: string = 'Update Airline';

  airlineFormGroup: FormGroup;

  constructor(private service: LocalhostService, private route: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getAirlineById(this.activatedRoute.snapshot.params['airlineId']).subscribe(result => {
      this.airlineFormGroup = new FormGroup({
        id: new FormControl(this.activatedRoute.snapshot.params['airlineId']),
        name: new FormControl(result['name'], Validators.required),
        contactAddress: new FormControl(result['contactAddress'], Validators.required),
        contactNumber: new FormControl(result['contactNumber'], Validators.required)
      });
    });
  }

  updateAirline(){
    if (this.airlineFormGroup.valid) {
      console.log(this.airlineFormGroup.value);
      this.service.updateAirline(this.airlineFormGroup.value).subscribe(result => {
          this.route.navigate(['airline']); 
      });
    }

  }

}
