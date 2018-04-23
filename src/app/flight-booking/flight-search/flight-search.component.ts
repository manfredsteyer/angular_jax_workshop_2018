import { FlightService } from './../flight.service';
import { Flight } from './../../entities/flight';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHandler, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  providers: [FlightService]
})
export class FlightSearchComponent implements OnInit {

  from: string;
  to: string;
  flights: Array<Flight> = [];
  selectedFlight: Flight;

  basket: object = {
    "3": true,
    "4": false,
    "5": true
  };

  //private http: HttpClient;

  constructor(
    private flightService: FlightService) {
    //this.http = http;
  }

  ngOnInit() {
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
          console.error('Error loading flights', err);
        }
      );
  }

  select(f: Flight): void {
    this.selectedFlight = f;
  }

}
