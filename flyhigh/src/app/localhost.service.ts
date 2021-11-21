import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocalhostService {

  constructor(private http: HttpClient) { }

      login(data: any): Observable<any>{
        return this.http.post(`${baseUrl}/authenticate`, data);
      }

      getAirline(): Observable<any>{
        return this.http.get(`${baseUrl}/v1/api/airline`);
    }

    getFlight(): Observable<any>{
      return this.http.get(`${baseUrl}/v1/api/flight`);
  }

  getFlightSchedule(): Observable<any>{
    return this.http.get(`${baseUrl}/v1/api/flightTravelDetail`);
}

  

    addAirline(data: any): Observable<any>{
        return this.http.post(`${baseUrl}/v1/api/airline`, data);
    }

    addFlight(data: any): Observable<any>{
        return this.http.post(`${baseUrl}/v1/api/flight`, data);
    }

    addFlightSchedule(data: any): Observable<any>{
      return this.http.post(`${baseUrl}/v1/api/flightTravelDetail`, data);
  }
}
