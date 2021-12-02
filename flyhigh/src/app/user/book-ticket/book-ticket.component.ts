import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalhostService } from 'src/app/localhost.service';

@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  styleUrls: ['./book-ticket.component.css']
})
export class BookTicketComponent implements OnInit {

  pageTitle = "Book Ticket";
  bookTicketFormGroup: FormGroup;

  flightSchedules: any[] = [];
  mealTypes = [
    { id: 1, name: "Veg" },
    { id: 2, name: "Non-Veg" }
  ];

  gender = [
    { id: 1, name: "Male" },
    { id: 2, name: "Female" },
    { id: 2, name: "Trans" }
  ];

  flightSeats = [
    { id: 1, number: 1 },
    { id: 2, number: 2 },
    { id: 3, number: 3 },
    { id: 4, number: 4 },
    { id: 5, number: 5 },
    { id: 6, number: 6 }
  ];
  route: any;

  constructor(private service: LocalhostService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formbuilder: FormBuilder) { }

  ngOnInit(): void {

    this.service.getFlightScheduleById(this.activatedRoute.snapshot.params['flightScheduleId'])
      .subscribe(result => {
        console.log(result);
        this.flightSchedules = result;
      });
    this.init();
  }

  init() {
    this.bookTicketFormGroup = this.formbuilder.group({
      totalSeatsBooked: new FormControl(" ", [Validators.required]),
      username: new FormControl(" ", [Validators.required]),
      emailId: new FormControl(" ", [Validators.required]),
      journeyDate: new FormControl(" ", [Validators.required]),
      mealType: new FormControl(" ", [Validators.required]),
      flightTravelDetails: new FormGroup({
        "id": new FormControl(this.activatedRoute.snapshot.params['flightScheduleId'])
      }),
      passengers: new FormArray([

      ])
    });
  }

  bookTicket() {
    this.service.bookFlight(this.bookTicketFormGroup.value).subscribe(result => {

      this.router.navigate(['ticketSummary']);

    })
  }

  addPassenger() {

    console.log("Inside Of add Passenger");
    const fa = new FormGroup({
      name: new FormControl(" ", [Validators.required]),
      gender: new FormControl(" ", [Validators.required]),
      age: new FormControl(" ", [Validators.required]),
      seatNumber: new FormControl(" ", [Validators.required])
    });

    (<FormArray>this.bookTicketFormGroup.get('passengers')).push(fa);

  }

  get passengers() {
    return (<FormArray>this.bookTicketFormGroup.get('passengers')).controls;
  }

}
