import {
  Component, OnInit, ViewChild, AfterViewInit, HostListener, NgZone, Renderer, ElementRef
} from '@angular/core';

import { ScrollService } from '../../../services/scroll.service';

import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-installation',
  templateUrl: './installation.component.html',
  styleUrls: ['./installation.component.css']
})
export class InstallationComponent implements OnInit, AfterViewInit {

  @ViewChild('progressBar') progressBar;
  @ViewChild('reveal') reveal: ElementRef;
  // @ViewChild('vaporvideo', { read: ElementRef }) vaporvideo: ElementRef;

  
  previousScroll = 0;

  imagePath: string;

  constructor(private scrollService: ScrollService, private router: Router) {
  }

  ngOnInit() {
    this.imagePath = '../../../../assets/images/';
    console.log(this.router.url);

  }

  ngAfterViewInit() {
    this.progressBar.start();
    setTimeout(() => {
      this.progressBar.complete();
    }, 100);
  }

  @HostListener('window:scroll', ['$event'])
  scrollHandler(event) {
    this.scrollService.scrollHandler(event);
  }

  @HostListener('onload') onClick() {
    console.log('Host Element Clicked');
  }
}
 