import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
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
  @Input() set ownerToUpdate(value: Owner | undefined) {
    if (value) {
      const index = this.ownersReceivedFromWrapper.findIndex((owner) => owner.id === value.id);
      this.ownersReceivedFromWrapper[index] = {...value};
    }
  }
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

  // ngOnChanges(changes: SimpleChanges): void {
  //   const own: Owner = changes['ownerToUpdate'].currentValue;
  //   if (own) {
  //     for(let x=0; x<this.ownersReceivedFromWrapper.length;x++) {
  //       if (this.ownersReceivedFromWrapper[x].id === own.id) {
  //         this.ownersReceivedFromWrapper[x] = own;
  //       }
  //     }
  //   }
  // }

  ngOnInit(): void {
  }

  onEditClick(owner: Owner) {
    this.sendOwnerFromTable.emit(owner);
  }

}
