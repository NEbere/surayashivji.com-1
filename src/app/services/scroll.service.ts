import { Injectable, HostListener } from '@angular/core';
declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  previousScroll = 0;

  constructor() { }

  @HostListener('window:scroll', ['$event'])
  scrollHandler(event) {
    const scrollPosition = event.currentTarget.pageYOffset;
    console.log('sp--->' + scrollPosition);
    const fullSpace = event.srcElement.children[0].scrollHeight;
    const hasclass = $('#Homeheader').hasClass('stickyTop');
    const parallHeight = $('#parallax').height();
    if ((scrollPosition + 146) < parallHeight) {
      $('#Homeheader').addClass('top');
    } else {
      const hasclassTop = $('#Homeheader').hasClass('top');
      if (hasclassTop) {
        $('#Homeheader').removeClass('top');
      }
    }
    if (scrollPosition > this.previousScroll) {
      $('#footer').addClass('show');
      console.log('d');
      if (hasclass) {
        $('#Homeheader').removeClass('stickyTop');
        $('#Homeheader').removeClass('js--active');
      }
      if (scrollPosition > (event.currentTarget.outerHeight - 144)) {
        $('#Homeheader').addClass('stickyTopunset');
      }
    } else if (scrollPosition > (event.currentTarget.outerHeight)) {
      $('#footer').removeClass('show');

      console.log('u');
      if (!hasclass) {
        $('#Homeheader').addClass('stickyTop');
        $('#Homeheader').addClass('js--active');
        $('#Homeheader').removeClass('stickyTopunset');
      }
    } else if ((event.currentTarget.outerHeight - 144) > scrollPosition) {
      $('#footer').removeClass('show');
      console.log('uuu');
        $('#Homeheader').removeClass('stickyTop');
        $('#Homeheader').removeClass('js--active');
        $('#Homeheader').removeClass('stickyTopunset');
    }
    this.previousScroll = scrollPosition;
  }


  @HostListener('onload') onClick() {
    console.log('Host Element Clicked');
  }
} 
