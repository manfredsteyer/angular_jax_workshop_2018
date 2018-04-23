import { Flight } from './../../entities/flight';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.css']
})
export class FlightCardComponent implements OnInit {

  @Input() item: Flight;
  @Input() selected: boolean;

  constructor() { }

  select() {
    this.selected = true;
  }

  deselect() {
    this.selected = false;
  }

  ngOnInit() {
  }

}
