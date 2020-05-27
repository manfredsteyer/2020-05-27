

import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors, FormGroup } from '@angular/forms';

@Directive({
    selector: 'form[roundTrip]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: RoundtripValidationDirective,
            multi: true
        }
    ]
})
export class RoundtripValidationDirective implements Validator {
    constructor() { }

    validate(control: AbstractControl): ValidationErrors {

        if (!control) {
            return {};
        }

        const group = control as FormGroup;

        if (!group.controls['from']  || !group.controls['to']) {
            return {};
        }

        const from = group.controls['from'].value;
        const to = group.controls['to'].value;

        if (from === to) {
            return {
                roundTrip: true
            };
        }
        return {};
    }
}
