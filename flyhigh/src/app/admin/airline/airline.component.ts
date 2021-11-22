import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalhostService } from 'src/app/localhost.service';
import { Airline } from 'src/app/model/airline.model';

@Component({
  selector: 'app-airline',
  templateUrl: './airline.component.html',
  styleUrls: ['./airline.component.css']
})
export class AirlineComponent implements OnInit{

  constructor(private service: LocalhostService, private route: Router){}
  airlines: any[] = [];

  public ngOnInit(){
    this.service.getAirline().subscribe(result=>
      this.airlines = result);
    console.log(this.airlines); 
  }

  pageTitle: string = 'Airline List';

  blockAirline(data: any){
    this.service.blockAirline(data).subscribe(result=>{
    console.log(result);
    this.reloadComponent();
  });
    }

    unBlockAirline(data: any){
      this.service.unBlockAirline(data).subscribe(result=>{
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

