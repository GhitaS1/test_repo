import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appTableRowColor]'
})
export class TableRowColorDirective implements AfterViewInit {

  @Input() indexNumber?: number;

  constructor(private _elRef: ElementRef) { }

  ngAfterViewInit(): void {
    if(this.indexNumber != 0 && this.indexNumber != undefined && this.indexNumber%2 !=0)
    this._elRef.nativeElement.style.backgroundColor = 'lightgray';
  }

}
