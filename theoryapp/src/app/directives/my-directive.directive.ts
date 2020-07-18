import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective implements OnInit {
  /*for LEVEL 1/2*/
  constructor(private element: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    console.log(this.element);
    /*LEVEL 0*/
    /*   const {nativeElement} = this.element;
       this.renderer.setStyle(nativeElement, 'background-color', 'blue');
       this.renderer.addClass(nativeElement, 'white-text');
    */   /*this.element.nativeElement.style.backgroundColor = 'red';*/
  }

  /*
        LEVEL 1
    @HostListener('mouseenter',['$event']) mouseEnter(event: Event) {
      /!*get event*!/
      console.log(event);
    }*/
  /* LEVEL 2
   @HostListener('mouseenter') mouseEnter(event: Event) {
     const {nativeElement} = this.element;
     this.renderer.setStyle(nativeElement, 'background-color', 'red');
     this.renderer.addClass(nativeElement, 'white-text');
   }

   @HostListener('mouseleave') mouseLeave(event: Event) {
     const {nativeElement} = this.element;
     this.renderer.setStyle(nativeElement, 'background-color', 'transparent');
     this.renderer.removeClass(nativeElement, 'white-text');
   }*/
  /*LEVEL 3* constructor may be empty*/
  @HostBinding('style.backgroundColor') background: string;
  @HostBinding('style.color') color: string;

  @HostListener('mouseenter') mouseEnter() {
    this.background = 'red';
    this.color = 'white';
  }

  @HostListener('mouseleave') mouseLeave() {
    this.background = 'transparent';
    this.color = 'black';
  }
}
