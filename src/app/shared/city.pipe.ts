import { Pipe, PipeTransform } from '@angular/core';
import { FlightService } from '../flight-booking/flight-search/flight.service';

@Pipe({
    name: 'city',
    pure: true
})
export class CityPipe implements PipeTransform {

    constructor(private flightService: FlightService) {
    }

    transform(value: string, format: string): any {

        console.debug('transform!');

        let short, long;

        switch(value) {
            case 'Hamburg':
                short = 'HAM';
                long = 'Airport Hamburg Helmut Schmidt';
                break;
            case 'Graz':
                short = 'GRZ';
                long = 'Flughafen Graz Thalerhof';
                break;
            default:
                short = long = value;
        }

        if (format === 'short') {
            return short;
        }
        return long;
    }
}
