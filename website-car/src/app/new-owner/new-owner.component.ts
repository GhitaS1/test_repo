import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { timer } from 'rxjs';
import { GenderSelect } from '../enums/gender-select.enum';
import { Owner } from '../models/owner.model';

@Component({
  selector: 'app-new-owner',
  templateUrl: './new-owner.component.html',
  styleUrls: ['./new-owner.component.scss']
})
export class NewOwnerComponent implements OnInit {
  private _fromWrapperToOwner: Owner | undefined;

  @Output() updateOwnerEvent: EventEmitter<Owner> = new EventEmitter();
  @Output() addOwnerEvent: EventEmitter<Owner> = new EventEmitter();
  @Input()
  set fromWrapperToOwner(value: Owner | undefined) {
    this.buttonLabel = !!value ? 'Update Owner' : 'Add Owner';
    this._fromWrapperToOwner = value;
  }

  get fromWrapperToOwner() {
    return this._fromWrapperToOwner;
  }


  firstNameLabel: string = 'First Name';
  lastNameLabel: string = 'Last Name';
  cnpLabel: string = 'CNP';
  birthdateLabel: string = 'Birth Date';
  genderLabel: string = 'Gender';
  buttonLabel: string = '';
  value = false;
  componentTitle:string = "Add new owner";
  myDate?:Date;
  price: number = 100;

  GenderSelect = GenderSelect;

  owners: Owner[] = [];

  firstName: string = '';

  constructor() { }

  ngOnInit(): void {

    timer(0, 1000).subscribe(() => {
      this.myDate = new Date;
    }

    )

  }

  submitForm(form: NgForm) {
    let owner = new Owner(form.form.value.firstName, form.form.value.lastName, form.form.value.cnp, form.form.value.birthDate, form.form.value.gender);
    form.reset();
    this.addOwnerEvent.emit(owner);
  }

  resetForm(form: NgForm) {
    form.reset();
    this.fromWrapperToOwner = undefined;
  }

  updateOwnerInList(form: NgForm) {
    if (this.fromWrapperToOwner) {
      this.fromWrapperToOwner.firstName = form.form.value.firstName;
      this.fromWrapperToOwner.lastName = form.form.value.lastName;
      this.fromWrapperToOwner.gender = form.form.value.gender;
      this.fromWrapperToOwner.cnp = form.form.value.cnp;
      this.fromWrapperToOwner.birthDate = form.form.value.birthDate;
      form.reset();
      this.updateOwnerEvent.emit(this.fromWrapperToOwner);
      this.fromWrapperToOwner = undefined;
    }
  }

  buttonHandler(form: NgForm) {
    return () => {
      if (this.fromWrapperToOwner) this.updateOwnerInList(form);
      else if (!this.fromWrapperToOwner) this.submitForm(form);
    }
  }

  buttonReset(form: NgForm) {
    return () => {
      this.resetForm(form);
    }
  }

}



