import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonEvents } from '../models/button-events';
import { Owner } from '../models/owner.model';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent {

  @Input() label: string = '';
  @Input() action: (() => void) | undefined;


}
