import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightSearchComponent } from './flight-search.component';
import { FlightBookingModule } from '../flight-booking.module';
import { HttpClientModule } from '@angular/common/http';
import { FlightService, DummyFlightService } from './flight.service';
import { FlightCardComponent } from '../flight-card/flight-card.component';

fdescribe('FlightSearchComponent', () => {
  let component: FlightSearchComponent;
  let fixture: ComponentFixture<FlightSearchComponent>;

  beforeEach(async(() => {

    TestBed
      .configureTestingModule({
        imports: [FlightBookingModule, HttpClientModule],
        // declarations: [FlightSearchComponent]
      })
      .overrideComponent(FlightSearchComponent, {
        set: {
          providers: [
            { provide: FlightService, useClass: DummyFlightService }
          ]
        }
      })
      .compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should load flights', () => {

    const svc = fixture.debugElement.injector.get(FlightService);
    spyOn(svc, 'find').and.callThrough();


    component.from = 'Graz';
    component.to = 'Hamburg';
    component.search();

    // expect(service.find).hasBeenCalledWithParams('Graz', 'Hamburg')

    expect(component.flights.length).toBe(2);
    expect(svc.find).toHaveBeenCalled();
  });
});
