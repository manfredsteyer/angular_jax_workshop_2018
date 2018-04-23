import { Flight } from './../../entities/flight';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {

  from: string;
  to: string;
  flights: Array<Flight> = [];
  selectedFlight: Flight;

  constructor() { }

  ngOnInit() {
  }

  search(): void {


    this.flights = [
      {
        id: 7,
        from: 'Frankfurt',
        to: 'Flagranti',
        date: '2018-04-23T18:00:00'
      },
      {
        id: 8,
        from: 'Frankfurt',
        to: 'Kognito',
        date: '2018-04-23T19:00:00'
      },
      {
        id: 9,
        from: 'Frankfurt',
        to: 'Hamburg',
        date: '2018-04-23T20:00:00'
      }      
    ];
  }

  select(f: Flight): void {
    this.selectedFlight = f;
  }

}
