import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { Flight } from '../../model/flight';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { FlightService, DummyFlightService, DefaultFlightService } from './flight.service';
import { FLIGHT_SERVICE_PREMIUM } from '../../app.providers';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  providers: [
    { provide: FlightService, useClass: DefaultFlightService }
  ]
})
export class FlightSearchComponent implements OnInit {

  from: string;
  to: string;
  flights: Array<Flight> = [];
  selectedFlight: Flight;

  @ViewChild('f')  // #f
  f: NgForm;

  basket: object = {
    "3": true,
    "5": true
  }

  // private http: HttpClient;

  constructor(private flightService: FlightService) {
  }

  ngOnInit(): void {
  }

  search(): void {

    this
    .flightService
    .find(this.from, this.to)
    .subscribe(
      flights => {
        this.flights = flights;
      },
      err => {
        console.error('Err', err);
      }
    );

    // this.flights = [
    //   { id: 1, from: 'Frankfurt', to: 'Flagranti', date: '2020-05-25T18:00+02:00', delayed: false },
    //   { id: 2, from: 'Frankfurt', to: 'Kognito', date: '2020-05-25T19:00+02:00', delayed: false },
    //   { id: 3, from: 'Frankfurt', to: 'Mallorca', date: '2020-05-25T20:00+02:00', delayed: false }
    // ];
  }

  select(f: Flight): void {
    this.selectedFlight = f;
  }

}
