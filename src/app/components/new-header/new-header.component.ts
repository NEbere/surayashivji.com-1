import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { fromEvent, Subject } from 'rxjs';
import {
  map,
  pairwise,
  share,
  startWith,
  takeUntil,
  throttleTime,
} from 'rxjs/operators';

enum VisibilityState {
  Visible = 'visible',
  Hidden = 'hidden',
  MenuOpen = 'openMenu',
}

enum MenuVisibilityState {
  Visible = 'menuVisible',
  Hidden = 'menuHidden',
}

enum Direction {
  Up = 'Up',
  Down = 'Down',
}

@Component({
  selector: 'app-new-header',
  templateUrl: './new-header.component.html',
  styleUrls: ['./new-header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('toggle', [
      state(
        VisibilityState.Hidden,
        style({ opacity: 0, transform: 'translateY(-100%)', height: '*' }),
      ),
      state(
        VisibilityState.Visible,
        style({
          opacity: 1,
          transform: 'translateY(0)',
          height: '*',
          backgroundColor: 'transparent',
        }),
      ),
      state(
        VisibilityState.MenuOpen,
        style({ backgroundColor: 'white', height: '100vh' }),
      ),
      transition('* => *', animate('200ms ease-in')),
    ]),
    trigger('menuFolding', [
      state(
        MenuVisibilityState.Hidden,
        style({ opacity: 0, height: 0, flex: 1 }),
      ),
      state(
        MenuVisibilityState.Visible,
        style({ opacity: 1, flex: 1, height: '*' }),
      ),
      transition('* => *', animate('200ms ease-in')),
    ]),
  ],
})
export class NewHeaderComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() targetTransparentLimiter?: HTMLDivElement;

  @HostBinding('class.menu-open') private isMenuOpen = false;
  @HostBinding('class.scroll-over-parent') private scrollOverParent = false;

  @HostBinding('@toggle')
  get toggle(): VisibilityState {
    if (this.isVisible && this.isMenuOpen) {
      return VisibilityState.MenuOpen;
    }
    return this.isVisible ? VisibilityState.Visible : VisibilityState.Hidden;
  }

  get menuFolding(): MenuVisibilityState {
    return this.isMenuOpen
      ? MenuVisibilityState.Visible
      : MenuVisibilityState.Hidden;
  }

  private isVisible = true;

  private destroy$ = new Subject();

  constructor(private elRef: ElementRef) {}

  ngOnInit() {
    this.scrollOverParent = !this.targetTransparentLimiter;
  }

  ngAfterViewInit(): void {
    const scrollObservable$ = fromEvent(window, 'scroll').pipe(
      throttleTime(25),
      map(() => window.pageYOffset),
      pairwise(),
      map(([y1, y2]) => (y2 < y1 ? Direction.Up : Direction.Down)),
      share(),
    );

    scrollObservable$
      .pipe(
        startWith(Direction.Up),
        takeUntil(this.destroy$),
      )
      .subscribe(direction => {
        if (!this.targetTransparentLimiter) {
          return (this.isVisible = direction === Direction.Up);
        }

        const elementBottom =
          window.scrollY + this.elRef.nativeElement.offsetHeight;
        const targetBottom =
          this.targetTransparentLimiter.offsetTop +
          this.targetTransparentLimiter.offsetHeight;

        if (targetBottom > elementBottom) {
          this.scrollOverParent = false;
          return (this.isVisible = true);
        }

        this.scrollOverParent = true;
        return (this.isVisible = direction === Direction.Up);
      });
  }

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

  goToReload(path) {
    location.pathname = path;
  }
}
