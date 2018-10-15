import { Directive, HostListener, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    window.addEventListener('scroll', function (e) {
      console.log('scrolling');
    });
  }

}
