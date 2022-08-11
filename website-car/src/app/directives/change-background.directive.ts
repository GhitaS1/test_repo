import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appChangeBackground]'
})
export class ChangeBackgroundDirective implements AfterViewInit {

  @Input() customColor: string = 'red';

  constructor(private _elRef: ElementRef) {
    console.log(_elRef);
   }

   ngAfterViewInit(): void{
    console.log(this._elRef);
    this._elRef.nativeElement.style.backgroundColor = this.customColor;
  }

}

