import { Component, OnInit, HostListener, AfterViewInit, ViewChild } from '@angular/core';
import { ScrollService } from '../../../services/scroll.service';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit, AfterViewInit {
  @ViewChild('progressBar') progressBar;

  constructor(private scrollService: ScrollService) { }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
  scrollHandler(event) {
    this.scrollService.scrollHandler(event);
  }

  ngAfterViewInit() {
    this.progressBar.start();
    setTimeout(() => {
      this.progressBar.complete();
    }, 100);
  }

}
