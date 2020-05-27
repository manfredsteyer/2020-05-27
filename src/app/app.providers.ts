import { FlightService } from "./flight-booking/flight-search/flight.service";
import { InjectionToken } from "@angular/core";


export const FLIGHT_SERVICE_PREMIUM
    = new InjectionToken<FlightService>('FLIGHT_SERVICE_PREMIUM');
