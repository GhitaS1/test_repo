import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Car } from '../models/car.model';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {

  carList: Car[] = [];

  @Input() set newCar(car: Car){
    if(!!car) {
      this.carList.push(car);
    }
  }

  @Output() sendCarToEdit: EventEmitter<Car> = new EventEmitter<Car>();

  constructor() { }

  ngOnInit(): void {
  }

  editCar(car: Car){
    this.sendCarToEdit.emit(car);
  }

}
