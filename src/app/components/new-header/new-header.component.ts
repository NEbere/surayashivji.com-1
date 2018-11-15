import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

@Component({
  selector: 'app-new-header',
  templateUrl: './new-header.component.html',
  styleUrls: ['./new-header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewHeaderComponent implements OnInit, OnDestroy {
  @HostBinding('class.menu-open') private isMenuOpen = false;

  constructor(private elRef: ElementRef) {}

  ngOnInit() {}

  ngOnDestroy(): void {
    disableBodyScroll(this.elRef.nativeElement);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) {
      disableBodyScroll(this.elRef.nativeElement);
    } else {
      enableBodyScroll(this.elRef.nativeElement);
    }
  }
}
