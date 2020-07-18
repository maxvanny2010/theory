import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective implements OnInit{

  constructor(private element: ElementRef) {
  }

  ngOnInit(): void {
    console.log(this.element);
    this.element.nativeElement.style.backgroundColor = 'red';
  }

}
