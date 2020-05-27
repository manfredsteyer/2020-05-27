import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Flight } from '../../model/flight';


export abstract class FlightService {

  abstract find(from: string, to: string): Observable<Flight[]>;

}

@Injectable()
export class DefaultFlightService implements FlightService {

  constructor(private http: HttpClient) {
  }

  find(from: string, to: string): Observable<Flight[]> {
    const url = 'http://www.angular.at/api/flight';
    const params = new HttpParams()
                          .set('from', from)
                          .set('to', to);

    const headers = new HttpHeaders().set('Accept', 'application/json');

    return this.http.get<Flight[]>(url, { params, headers });

  }

}

@Injectable()
export class DummyFlightService {

  find(from: string, to: string): Observable<Flight[]> {
    return of([
      { id: 17, from: 'Frankfurt', to: 'Flagranti', date: '2020-05-28', delayed: false },
      { id: 18, from: 'Hamburg', to: 'Kognito', date: '2020-05-28', delayed: false}
    ]);
  }
}
