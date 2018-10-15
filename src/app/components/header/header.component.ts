import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild('keywordsInput') keywordsInput;
  @ViewChild('keywordsInput1') keywordsInput1;
  @ViewChild('closebtn') closebtn;
  @Input('Homeheader') Homeheader;
  @Input('overlay') overlay;
  @Output('mobileclick') mobileclick = new EventEmitter<any>();
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.Homeheader = false;
    if (window.location.pathname === '/') {
      this.Homeheader = true;
    } else {
      this.Homeheader = false;
    }
  }


  openNav() {
    // $('#Homeheader').css('z-index', 'unset');
    this.keywordsInput.nativeElement.style.width = '100%';
    this.keywordsInput1.nativeElement.style.display = 'none';
    this.closebtn.nativeElement.style.display = 'block';
    $('#Homeheader').css('position', 'unset');
    // document.getElementsByTagName('BODY')[0].style.overflow = 'hidden';
  }

  closeNav() {
    this.keywordsInput.nativeElement.style.width = '0%';
    this.keywordsInput1.nativeElement.style.display = 'block';
    this.closebtn.nativeElement.style.display = 'none';
    $('#Homeheader').removeAttr('style');
    // document.getElementsByTagName('BODY')[0].style.overflow = 'unset';
  }

  closeNavTimer(item) {
    setTimeout(() => {
      this.closeNav();
      this.mobileclick.emit(item);
    }, 200);
  }

  mobilevaigate(item) {
    this.router.navigate(['/home/' + item]);
  }

  checkroute(item) {
    const currentRoutes = this.router.url;
    const checkroutes = currentRoutes.includes('home');
    if (checkroutes) {
      this.mobileclick.emit(item);
    }
  }

  reloadroute(item) {
    window.location.href = '/';
    // location.reload('/');
  }
} 
