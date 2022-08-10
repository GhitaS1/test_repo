import { Component, OnInit } from '@angular/core';
import { Owner } from '../models/owner.model';

@Component({
  selector: 'app-owner-wrapper',
  templateUrl: './owner-wrapper.component.html',
  styleUrls: ['./owner-wrapper.component.scss']
})
export class OwnerWrapperComponent implements OnInit {

  ownerToEdit: Owner = {};

  owners: Owner[] = [];

  ownerReceivedFromTable?: Owner;

  constructor() { }

  ngOnInit(): void {
  }

  insertIntoList(owner: Owner) {
    const owns: Owner[] = this.owners ? this.owners : [];
    owns.push(owner);
    //this.owners.push(owner);
    this.owners = owns;
  }

  onEditForm(ownerSentFromTable: Owner) {
    if (ownerSentFromTable) {
      this.ownerReceivedFromTable = ownerSentFromTable;
    } else {
      this.ownerReceivedFromTable = {};
    }
  }

  updateOwner(owner: Owner){
    this.ownerToEdit = owner;
    console.log(owner);
  }


}
