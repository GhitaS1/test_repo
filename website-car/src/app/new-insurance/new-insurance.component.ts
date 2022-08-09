import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaymentType } from '../enums/payment-type.enum';
import { Insurance } from '../models/insurance.model';

@Component({
  selector: 'app-new-insurance',
  templateUrl: './new-insurance.component.html',
  styleUrls: ['./new-insurance.component.scss']
})
export class NewInsuranceComponent implements OnInit {

  PaymentType = PaymentType;

  insurances: Insurance[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  submitForm(form: NgForm){
    console.log(form.value);
    const insurances: Insurance=form.value;
    this.insurances.push(insurances);
    console.log(this.insurances);
    // this.addNewOwnerItem(owner);
  }
}
