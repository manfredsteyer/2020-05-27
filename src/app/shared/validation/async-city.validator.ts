

import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, AsyncValidator, ValidationErrors, FormGroup, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, delay, tap } from 'rxjs/operators';
import { FlightService } from '../../flight-booking/flight-search/flight.service';
import { mapToMapExpression } from '@angular/compiler/src/render3/util';

@Directive({
    selector: 'input[asyncCity]',
    providers: [
        {
            provide: NG_ASYNC_VALIDATORS,
            useExisting: AsyncCityValidationDirective,
            multi: true
        }
    ]
})
export class AsyncCityValidationDirective implements AsyncValidator {

    constructor(private flightService: FlightService) { }

    validate(control: AbstractControl): Observable<ValidationErrors> {
        return this.flightService.find(control.value, '').pipe(
            delay(4000),
            tap(flights => console.debug('flights', flights)),
            map(flights => flights.length === 0 ? { asyncCity: true } : {})
        );
    }

}
