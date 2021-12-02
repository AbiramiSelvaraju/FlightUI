import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalhostService } from 'src/app/localhost.service';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent {

  pageTitle: string = 'Flight List';
  flights: any[] = [];

  constructor(private service: LocalhostService, private route: Router){}

  public ngOnInit(){
    this.service.getFlight().subscribe(result=>
      this.flights = result);
    console.log(this.flights); 
  }

  blockFlight(data: any) {
    this.service.blockFlight(data).subscribe(result => {
      console.log(result);
      this.reloadComponent();
    });
  }

  reloadComponent() {
    let currentUrl = this.route.url;
    this.route.routeReuseStrategy.shouldReuseRoute = () => false;
    this.route.onSameUrlNavigation = 'reload';
    this.route.navigate([currentUrl]);
  }

}
