import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalhostService } from 'src/app/localhost.service';

@Component({
  selector: 'app-add-airline',
  templateUrl: './add-airline.component.html',
  styleUrls: ['./add-airline.component.css']
})
export class AddAirlineComponent {

  pageTitle: string = 'Add Airline';

  airlineFormGroup: FormGroup;

  constructor(private service: LocalhostService, private route: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.airlineFormGroup = new FormGroup({
      name: new FormControl('', Validators.required),
      contactAddress: new FormControl('', Validators.required),
      contactNumber: new FormControl('', Validators.required)
    });
  }

  addAirline() {
    if (this.airlineFormGroup.valid) {
      console.log(this.airlineFormGroup.value);
      this.service.addAirline(this.airlineFormGroup.value).subscribe(result => {
        this.route.navigate(['airline']); 
      });
    }
  }
}



