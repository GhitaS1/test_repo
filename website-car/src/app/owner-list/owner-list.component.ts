import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GenderSelect } from '../enums/gender-select.enum';
import { Owner } from '../models/owner.model';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.scss']
})
export class OwnerListComponent implements OnInit {

  owner?: Owner;

  gender: GenderSelect = GenderSelect.Feminin;

  GenderSelect = GenderSelect;

  @Input() ownersReceivedFromWrapper: Owner[] = [];
  @Output() sendOwnerFromTable: EventEmitter<Owner> = new EventEmitter();

  constructor() {
    switch (this.gender) {
      case GenderSelect.Feminin:
        console.log('Feminin');
        break;
      case GenderSelect.Masculin:
        console.log('Masculin');
        break;
      default:
        console.log("default")
    }

  }

  ngOnInit(): void {
  }

  onEditClick(owner: Owner) {
    this.sendOwnerFromTable.emit(owner);
  }

}
