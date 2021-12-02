import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalhostService } from 'src/app/localhost.service';

@Component({
  selector: 'app-ticket-summary',
  templateUrl: './ticket-summary.component.html',
  styleUrls: ['./ticket-summary.component.css']
})
export class TicketSummaryComponent implements OnInit {

  pageTitle = "Ticket Summary";
  tickets: any[] = [];

  constructor(private service: LocalhostService, private route: Router) { }


  ngOnInit() {
    this.service.getTicketSummary().subscribe(result =>
      this.tickets = result);
  }

  cancelTicket(data: any) {
    this.service.cancelTicket(data).subscribe(result => {
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
