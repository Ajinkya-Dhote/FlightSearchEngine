import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { coerceNumberProperty } from '@angular/cdk/coercion';

@Component({
  selector: 'app-one-way',
  templateUrl: './one-way.component.html',
  styleUrls: ['./one-way.component.css']
})
export class OneWayComponent implements OnInit {

  public originCityControl: FormControl;
  public destinationCityControl: FormControl;
  public noOfPersonControl: FormControl;
  options: string[] = ['One', 'Two', 'Three'];

  autoTicks = false;
  disabled = false;
  invert = false;
  max = 10;
  min = 1;
  showTicks = false;
  step = 1;
  thumbLabel = true;
  value = 1;
  vertical = false;

 get tickInterval(): number | 'auto' {
   return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
 }
 set tickInterval(value) {
   this._tickInterval = coerceNumberProperty(value);
 }
 private _tickInterval = 1;

  constructor() {
    this.originCityControl = new FormControl();
    this.destinationCityControl = new FormControl();
    this.noOfPersonControl = new FormControl();
  }

  ngOnInit() {
  }

}
