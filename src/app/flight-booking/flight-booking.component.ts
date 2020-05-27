
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'flight-booking',
    template: `

    <div class="card">
        <a routerLink="./flight-search">Flight</a>
        <a routerLink="./passenger-search">Passenger</a>
    </div>
    <div>
        ***
        <router-outlet></router-outlet>
        ***
    </div>
    `
})

export class FlightBookingComponent implements OnInit {
    constructor() { }
    ngOnInit() { }
}
