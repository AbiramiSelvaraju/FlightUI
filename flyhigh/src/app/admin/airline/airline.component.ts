import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalhostService } from 'src/app/localhost.service';
import { Airline } from 'src/app/model/airline.model';

@Component({
  selector: 'app-airline',
  templateUrl: './airline.component.html',
  styleUrls: ['./airline.component.css']
})
export class AirlineComponent implements OnInit{

  constructor(private service: LocalhostService){}
  airlines: any[] = [];

  public ngOnInit(){
    this.service.getAirline().subscribe(result=>
      this.airlines = result);
    console.log(this.airlines); 
  }

  pageTitle: string = 'Airline List';

}

