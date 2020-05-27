import { NgModule } from '@angular/core';
import { CityPipe } from './city.pipe';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CityValidationDirective } from './validation/city.validator';
import { RoundtripValidationDirective } from './validation/roundtrip.validator';
import { AsyncCityValidationDirective } from './validation/async-city.validator';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
    ],
    declarations: [
        CityPipe,
        CityValidationDirective,
        RoundtripValidationDirective,
        AsyncCityValidationDirective
    ],
    providers: [],
    exports: [
        CityValidationDirective,
        RoundtripValidationDirective,
        AsyncCityValidationDirective,
        CityPipe, CommonModule, FormsModule
    ],
})
export class SharedModule { }
