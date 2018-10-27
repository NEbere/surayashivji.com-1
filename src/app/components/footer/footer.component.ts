import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input('currentPage') currentPage: string;

  collections: any[];
  ActivePage: any;
  prevpage: any;
  nextpage: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.collections = [
      'events', 'cryptonite', 'wklymotion', 'apple', 'mello', 'potter', 'posters', 'vapor', 'spotify', 'rizikitoto', 'photogram', 'blaster'
    ];
    this.ActivePage = this.collections.findIndex(x => x === this.currentPage);

    const pagesCount = this.collections.length - 1;

    if (this.ActivePage === 0) {
      this.prevpage = this.collections[pagesCount];
      this.nextpage = this.collections[this.ActivePage + 1];
    } else if (this.ActivePage === pagesCount) {
      this.prevpage = this.collections[this.ActivePage - 1];
      this.nextpage = this.collections[0];
    } else {
      this.prevpage = this.collections[this.ActivePage - 1];
      this.nextpage = this.collections[this.ActivePage + 1];
    }
  }


}
