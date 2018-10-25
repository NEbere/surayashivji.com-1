import { Component, HostListener, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { fadeAnimation } from './fade.animation';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeAnimation]

})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'sur';
  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  public getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

}
