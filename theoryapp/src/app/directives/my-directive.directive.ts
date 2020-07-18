import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective implements OnInit {

  constructor(private element: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    console.log(this.element);
    const {nativeElement} = this.element;
    this.renderer.setStyle(nativeElement, 'background-color', 'blue');
    this.renderer.addClass(nativeElement, 'white-text');
    /*this.element.nativeElement.style.backgroundColor = 'red';*/
  }

}
