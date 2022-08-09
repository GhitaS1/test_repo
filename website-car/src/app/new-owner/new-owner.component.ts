import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GenderSelect } from '../enums/gender-select.enum';
import { Owner } from '../models/owner.model';

@Component({
  selector: 'app-new-owner',
  templateUrl: './new-owner.component.html',
  styleUrls: ['./new-owner.component.scss']
})
export class NewOwnerComponent implements OnInit {

  @Output() addOwnerEvent: EventEmitter<Owner> = new EventEmitter();
  @Input() fromWrapperToOwner?: Owner;

  
  firstNameLabel: string = 'First Name';
  lastNameLabel: string = 'Last Name';
  cnpLabel: string = 'CNP';
  birthdateLabel: string = 'Birth Date';
  genderLabel: string = 'Gender';

  GenderSelect = GenderSelect;

  owners: Owner[] = [];

  firstName: string = '';

  constructor() { }

  ngOnInit(): void {

  }

  submitForm(form: NgForm){
    let owner = new Owner(form.form.value.firstName, form.form.value.lastName, form.form.value.cnp, form.form.value.birthDate, form.form.value.gender);
    this.addOwnerEvent.emit(owner);
  }

  resetForm(form: NgForm){
   form.reset();
  }

  //   submitForm(form: NgForm){
  //   console.log(form.value);
  //   const owner: Owner = Object.assign(new Owner(), form.value);
  //   this.owners.push(owner);
  //   console.log(this.owners);
  // }

  
  
 }
 


