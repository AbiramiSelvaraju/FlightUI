import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { TicketSummaryComponent } from './ticket-summary/ticket-summary.component';
import { BookTicketComponent } from './book-ticket/book-ticket.component';
import { UHeaderComponent } from './u-header/u-header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserAuthGuard } from '../user-guard.service';


const appRoutes: Routes = [
  { path: 'flightSearch', canActivate:[UserAuthGuard], component: FlightSearchComponent },
  { path: 'ticketSummary', canActivate:[UserAuthGuard], component: TicketSummaryComponent },
  { path: 'bookTicket/:flightScheduleId', canActivate:[UserAuthGuard], component: BookTicketComponent }
];

@NgModule({
  declarations: [
    FlightSearchComponent,
    TicketSummaryComponent,
    BookTicketComponent,
    UHeaderComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
