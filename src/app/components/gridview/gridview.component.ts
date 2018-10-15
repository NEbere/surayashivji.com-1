import { Component, ViewChild, OnInit, ContentChild, AfterViewInit, HostListener } from '@angular/core';
declare var $: any;
import { trigger, transition, useAnimation } from '@angular/animations';
import { Router } from '@angular/router';
import { ScrollService } from '../../services/scroll.service';

import { bounce } from 'ng-animate';

@Component({
  selector: 'app-gridview',
  templateUrl: './gridview.component.html',
  styleUrls: ['./gridview.component.css'],
  animations: [
    trigger('bounce', [transition('* => *', useAnimation(bounce))])
  ],
})
export class GridviewComponent implements OnInit {

  @ContentChild('keywordsInput') keywordsInput;
  @ContentChild('keywordsInput1') keywordsInput1;
  @ContentChild('closebtn') closebtn;

  @ViewChild('child') child;
  innerwidth;
  mobileview: boolean;
  imagePath: string;
  filteredText: string;
  bounce: any;
  count;
  masonryItems: any;
  masonryItemsCopy: any;
  constructor(private router: Router, private scrollService: ScrollService) { }

  ngOnInit() {
  }

  mobileclick(item) {
    // console.log(item);
    this.child.notify(item);
  }

}
