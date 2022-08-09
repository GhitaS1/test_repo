import { Component, OnInit } from '@angular/core';
import { Owner } from '../models/owner.model';

@Component({
  selector: 'app-owner-wrapper',
  templateUrl: './owner-wrapper.component.html',
  styleUrls: ['./owner-wrapper.component.scss']
})
export class OwnerWrapperComponent implements OnInit {

  owners: Owner[] = [];

  ownerReceivedFromTable?: Owner;

  constructor() { }

  ngOnInit(): void {
  }

  insertIntoList(owner: Owner){
    this.owners.push(owner);
  }

  onEditForm(ownerSentFromTable: Owner){
    this.ownerReceivedFromTable = ownerSentFromTable;
    }


}
