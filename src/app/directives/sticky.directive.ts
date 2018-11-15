import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  AfterViewInit,
} from '@angular/core';
import { fromEvent } from 'rxjs';

@Directive({
  selector: '[appSticky]',
})
export class StickyDirective implements AfterViewInit {
  @Input('useParent') useParent = false;

  parent: HTMLDivElement;

  constructor(private elRef: ElementRef) {}

  ngAfterViewInit(): void {
    this.parent = (this.elRef.nativeElement as HTMLDivElement)
      .parentNode as HTMLDivElement;
    console.log('====================================');
    console.log(
      'ElementRef: ',
      this.elRef.nativeElement.parentNode.innerHeight,
      parent,
    );
    console.log('====================================');
    fromEvent(this.elRef.nativeElement, 'scroll').subscribe(event => {
      console.log('====================================');
      console.log('ScrollEvent');
      console.log('====================================');
    });
    this.parent = (this.elRef.nativeElement as HTMLDivElement)
      .parentNode as HTMLDivElement;
    console.log('====================================');
    console.log('ElementRef: ', this.elRef.nativeElement.parentNode, parent);
    console.log('====================================');
  }
}
