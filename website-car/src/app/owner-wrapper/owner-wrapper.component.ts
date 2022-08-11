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
    this.owners = [...this.owners, owner];

  }

  onEditForm(ownerSentFromTable: Owner) {
    if (ownerSentFromTable) {
      this.ownerReceivedFromTable = {...ownerSentFromTable};
    } else {
      this.ownerReceivedFromTable = {};
    }
  }

  updateOwner(owner: Owner){
    this.ownerToEdit = {...owner};
  }


}
