import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightService, DummyFlightService, DefaultFlightService } from './flight-search/flight.service';
import { FLIGHT_SERVICE_PREMIUM } from '../app.providers';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { RouterModule } from '@angular/router';
import { FLIGHT_BOOKING_ROUTES } from './flight-booking.routes';

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(FLIGHT_BOOKING_ROUTES),
  ],
  declarations: [
    FlightSearchComponent,
    FlightCardComponent,
    FlightEditComponent,
    PassengerSearchComponent
  ],
  providers: [
    {
       provide: FlightService,
       // useClass: DefaultFlightService
       useFactory: (http: HttpClient) => {
         if (environment.production) {
           return new DefaultFlightService(http);
         } else {
           return new DummyFlightService();
         }
       },
       deps: [HttpClient]
    },
    {
       provide: FLIGHT_SERVICE_PREMIUM,
       useClass: DefaultFlightService
    }
  ],
  exports: [
    FlightSearchComponent
  ]
})
export class FlightBookingModule { }
