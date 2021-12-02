import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocalhostService {



  constructor(private http: HttpClient) { }

  login(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/authenticate`, data);
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  setRole(role: string): void {
    localStorage.setItem('role', role);
  }

  getRole(): string | null {
    return localStorage.getItem('role');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  isAdminLoggedIn() {
    return this.getToken() !== null && this.getRole() === "ROLE_ADMIN";
  }

  isUserLoggedIn() {
    return this.getToken() !== null && this.getRole() === "ROLE_USER";
  }


  getAirline(): Observable<any> {
    return this.http.get(`${baseUrl}/v1/api/airline`);
  }

  getFlight(): Observable<any> {
    return this.http.get(`${baseUrl}/v1/api/flight`);
  }

  getFlightSchedule(): Observable<any> {
    return this.http.get(`${baseUrl}/v1/api/flightTravelDetail`);
  }

  getFlightScheduleById(data: any): Observable<any> {
    return this.http.get(`${baseUrl}/v1/api/flightTravelDetail/${data}`);
  }

  getFlightScheduleForBooking(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/v1/api/flightSearch`, data);
  }

  getTicketSummary(): Observable<any> {
    return this.http.get(`${baseUrl}/v1/api/ticketSummary`);
  }

  bookFlight(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/v1/api/ticket`, data);
  }

  getAirlineById(data: any): Observable<any> {
    return this.http.get(`${baseUrl}/v1/api/airline/${data}`);
  }

  getFlightById(data: any): Observable<any> {
    return this.http.get(`${baseUrl}/v1/api/flight/${data}`);
  }

  addAirline(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/v1/api/airline`, data);
  }

  updateAirline(data: any): Observable<any> {
    return this.http.put(`${baseUrl}/v1/api/airline`, data);
  }

  updateFlight(data: any): Observable<any> {
    return this.http.put(`${baseUrl}/v1/api/flight`, data);
  }
  
  addFlight(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/v1/api/flight`, data);
  }

  addFlightSchedule(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/v1/api/flightTravelDetail`, data);
  }

  blockAirline(data: number): Observable<any> {
    return this.http.put(`${baseUrl}/v1/api/airline/block`, data);
  }

  unBlockAirline(data: number): Observable<any> {
    return this.http.put(`${baseUrl}/v1/api/airline/unblock`, data);
  }

  cancelTicket(data: number): Observable<any> {
    return this.http.put(`${baseUrl}/v1/api/ticket/${data}/cancel`, data);
  }

  blockFlight(data: number): Observable<any> {
    return this.http.put(`${baseUrl}/v1/api/flight/block/${data}`, data);
  }
}
