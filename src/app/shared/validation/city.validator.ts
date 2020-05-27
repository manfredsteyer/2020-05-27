

import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
    selector: '[city]', // <div city>
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: CityValidationDirective,
            multi: true
        }
    ]
})
export class CityValidationDirective implements Validator {
    constructor() { }

    city = ['Graz', 'Hamburg', 'Frankfurt'];

    validate(control: AbstractControl): ValidationErrors {

        if (!control) {
            return {};
        }

        if (this.city.includes(control.value)) {
            return {};
        } else {
            return {
                'city': {
                    'reason': 'Invalid City',
                    'current': control.value,
                    'expected': this.city,
                    'tryAgain': 2025
                }
            };
        }

    }
}
