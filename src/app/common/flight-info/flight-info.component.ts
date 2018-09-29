import { Component, OnInit } from '@angular/core';
import { ICONS } from '@model/index';
@Component({
  selector: 'app-flight-info',
  templateUrl: './flight-info.component.html',
  styleUrls: ['./flight-info.component.css']
})
export class FlightInfoComponent implements OnInit {
  public flightIcon = ICONS.flight;
  constructor() { }

  ngOnInit() {
  }

}
