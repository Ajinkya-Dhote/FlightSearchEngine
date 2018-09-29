import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightRouteHeaderComponent } from './flight-route-header.component';

describe('FlightRouteHeaderComponent', () => {
  let component: FlightRouteHeaderComponent;
  let fixture: ComponentFixture<FlightRouteHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightRouteHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightRouteHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
