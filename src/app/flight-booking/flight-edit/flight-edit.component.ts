import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.css']
})
export class FlightEditComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { 

  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: [],
      from: [
        'Graz',
        [
          // Sync Validators
          Validators.required,
          Validators.minLength(3)
        ],
        [
          // Async Validators
        ]
      ],
      to : [],
      date: [],
      details: this.formBuilder.group({
        roundTrips: [],
        maxStartOvers: [],
      })
    });

    this.form.valueChanges.subscribe(form => {
      console.debug('form', form);
    });

    this.form.controls['to'].valueChanges.subscribe(to => {
      console.debug('to', to);
    });

  }

  save(): void {
    console.debug('form', this.form.value);
  }

}
