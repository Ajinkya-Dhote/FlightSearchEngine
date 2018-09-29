import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicFlightInfoComponent } from './basic-flight-info.component';

describe('BasicFlightInfoComponent', () => {
  let component: BasicFlightInfoComponent;
  let fixture: ComponentFixture<BasicFlightInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicFlightInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicFlightInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
