import { Component, OnInit, ViewChild, AfterViewInit, HostListener } from '@angular/core';
import { ScrollService } from '../../../services/scroll.service';


@Component({
  selector: 'app-posters',
  templateUrl: './posters.component.html',
  styleUrls: ['./posters.component.css']
})
export class PostersComponent implements OnInit, AfterViewInit {

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
