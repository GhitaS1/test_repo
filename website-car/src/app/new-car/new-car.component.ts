import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Car } from '../models/car.model';

@Component({
  selector: 'app-new-car',
  templateUrl: './new-car.component.html',
  styleUrls: ['./new-car.component.scss']
})
export class NewCarComponent implements OnInit {

  cars: Car[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  submitForm(form: NgForm){
    console.log(form.value);
    // const owner: Car = Object.assign(new Car(), form.value);
    const car: Car = form.value;
    this.cars.push(car);
    console.log(this.cars);
    // this.addNewOwnerItem(owner);
  }

}
