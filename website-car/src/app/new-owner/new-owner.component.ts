import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-new-owner',
  templateUrl: './new-owner.component.html',
  styleUrls: ['./new-owner.component.scss']
})
export class NewOwnerComponent implements OnInit {

  firstNameLabel: string = 'First Name';
  lastNameLabel: string = 'Last Name';
  cnpLabel: string = 'CNP';
  birthdateLabel: string = 'Birth Date';
  genderLabel: string = 'Gender';

  constructor() { }

  ngOnInit(): void {

  }


  
  
 }
 


