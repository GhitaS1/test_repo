import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appFocusInput]'
})
export class FocusInputDirective implements AfterViewInit{



  constructor(private _elRef: ElementRef) { }

  ngAfterViewInit(): void {
    this._elRef.nativeElement.focus();
  }

}
