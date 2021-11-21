import { Component, OnInit } from '@angular/core';
import { LocalhostService } from 'src/app/localhost.service';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent {

  pageTitle: string = 'Flight List';
  flights: any[] = [];

  constructor(private service: LocalhostService){}

  public ngOnInit(){
    this.service.getFlight().subscribe(result=>
      this.flights = result);
    console.log(this.flights); 
  }

}
