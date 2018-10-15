import { Component, OnInit, ViewChild, AfterViewInit, HostListener } from '@angular/core';
import { ScrollService } from '../../../services/scroll.service';


@Component({
  selector: 'app-stitch',
  templateUrl: './stitch.component.html',
  styleUrls: ['./stitch.component.css']
})
export class StitchComponent implements OnInit, AfterViewInit {
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
