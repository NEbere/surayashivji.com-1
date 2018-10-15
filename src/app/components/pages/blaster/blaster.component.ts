import { Component, OnInit, AfterViewInit, ViewChild, HostListener } from '@angular/core';
import { ScrollService } from '../../../services/scroll.service';


@Component({
  selector: 'app-blaster',
  templateUrl: './blaster.component.html',
  styleUrls: ['./blaster.component.css']
})
export class BlasterComponent implements OnInit, AfterViewInit {

  @ViewChild('progressBar') progressBar;

  constructor(private scrollService: ScrollService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // console.log('ngAfterViewInit');
    this.progressBar.start();
    setTimeout(() => {
      this.progressBar.complete();
    }, 100);
  }

  @HostListener('window:scroll', ['$event'])
  scrollHandler(event) {
    this.scrollService.scrollHandler(event);
  }
}
