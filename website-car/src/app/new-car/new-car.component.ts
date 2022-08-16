import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';
import { Car } from '../models/car.model';

@Component({
  selector: 'app-new-car',
  templateUrl: './new-car.component.html',
  styleUrls: ['./new-car.component.scss']
})
export class NewCarComponent implements OnInit, OnDestroy {

  @Input() set carToEdit(car: Car) {
    this._patchCarToForm(car);
  }
  @Output() outputCar: EventEmitter<Car> = new EventEmitter<Car>();
  carForm: FormGroup;
  subscriber: Subscription;
  subscriptionList: Subscription[] = [];
  customObservale: Subject<string> = new Subject<string>();

  constructor(private _fb: FormBuilder) {
    // this.carForm = new FormGroup({
    //   brand: new FormControl('bmw'),
    //   model: new FormControl('1231')
    // });

    this.carForm = this._fb.group({
      carBrand: ['', [Validators.maxLength( 10 ), Validators.required]],
      carModel: ['', [Validators.maxLength( 10 ), Validators.required]],
      cubicCap: ['', [Validators.maxLength( 10 ), Validators.required]],
      serialNum: ['', [Validators.maxLength( 10 ), Validators.required]],
      carType: ['', [Validators.maxLength( 10 ), Validators.required]],
      carPlates: ['', [Validators.maxLength( 8 ), Validators.required]],
      carPower: [null, [Validators.max( 400 )]],
      fuelType: [null],
      ownerId: [null]
    });
    this.subscriptionList.push(
      this.carForm.controls['carBrand'].valueChanges.subscribe((value: string) => {
      console.log('valoarea din form este: ',  value);
    }));

  }

  ngOnInit(): void {
    this.customObservale.subscribe( (value) => console.warn('I am custom Observable', value));
  }

  ngOnDestroy(): void {
    this.subscriptionList.forEach((val) => val.unsubscribe());
  }

  submitForm(){
    if (this.carForm.status === 'INVALID'){
      this.carForm.controls['carBrand'].markAsTouched(),
      this.carForm.controls['carModel'].markAsTouched()
      // this.carForm.controls.cubicCap.markAsTouched(),
      // this.carForm.controls.serialNum.markAsTouched(),
      // this.carForm.controls.carType.markAsTouched(),
      // this.carForm.controls.carPlates.markAsTouched(),
      // this.carForm.controls.carPower.markAsTouched(),
      // this.carForm.controls.fuelType.markAsTouched(),
      // this.carForm.controls.ownerId.markAsTouched(),
    }
    const carValues = this.carForm.getRawValue();
    const car: Car ={
      carBrand:carValues.carBrand,
      carModel: carValues.carModel,
      cubicCap: carValues.cubicCap,
      serialNum: carValues.serialNum,
      carType: carValues.carType,
      carPlates: carValues.carPlates,
      carPower: carValues.carPower,
      fuelType: carValues.fuelType,
      ownerId: carValues.ownerId
    };
    this.outputCar.emit(car);
    this.carForm.reset();
  }

  resetForm(){
    this.carForm.reset();
  }

  private _patchCarToForm( car: Car ) {
    if(!car) return;
    // this.carForm.controls['carBrand'].setValue(car.carBrand);
    // this.carForm.controls['carModel'].setValue(car.carModel);
    // this.carForm.controls['cubicCap'].setValue(car.cubicCap);
    // this.carForm.controls['serialNum'].setValue(car.serialNum);
    // this.carForm.controls['carType'].setValue(car.carType);
    // this.carForm.controls['carPlates'].setValue(car.carPlates);
    // this.carForm.controls['carPower'].setValue(car.carPower);
    // this.carForm.controls['fuelType'].setValue(car.fuelType);
    // this.carForm.controls['ownerId'].setValue(car.ownerId);
    this.carForm.patchValue(car);
  }

}

