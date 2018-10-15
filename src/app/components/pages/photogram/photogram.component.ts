import { Component, OnInit, ViewChild, AfterViewInit , HostListener} from '@angular/core';
import { ScrollService } from '../../../services/scroll.service';


@Component({
  selector: 'app-photogram',
  templateUrl: './photogram.component.html',
  styleUrls: ['./photogram.component.css']
})
export class PhotogramComponent implements OnInit, AfterViewInit {
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
