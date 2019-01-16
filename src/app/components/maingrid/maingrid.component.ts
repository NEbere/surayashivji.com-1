import { Component, OnInit, ContentChild, AfterViewInit, HostListener, Output, EventEmitter } from '@angular/core';
declare var $: any;
import { Router } from '@angular/router';

@Component({
  selector: 'app-maingrid',
  templateUrl: './maingrid.component.html',
  styleUrls: ['./maingrid.component.css']
})
export class MaingridComponent implements OnInit, AfterViewInit {

  @ContentChild('keywordsInput') keywordsInput;
  @ContentChild('keywordsInput1') keywordsInput1;
  @ContentChild('closebtn') closebtn;
  innerwidth;
  mobileview: boolean;
  imagePath: string;
  filteredText: string;
  bounce: any;
  count;
  masonryItems: any;
  masonryItemsCopy: any;
  constructor(private router: Router) { }

  ngOnInit() {
    this.masonryItems = [
      {
        order: 1, name: 'imessage', img: '/poster/imessage.png', class: 'ui',
        video: '/grid/events.mp4', routerLink: '/events', url: ''
      },
      {
        order: 2, name: 'ideocolab', img: '/poster/ideocolab.png', class: 'development ui 3d creativecode ',
        video: '', routerLink: '/cryptonite', url: ''
      },
      {
        order: 3, name: 'wklymotion', img: '/poster/wklymotion.png', class: 'development creativecode 3d', video: '/grid/wklymotion.mp4',
        url: 'http://musicvizz.com'
      },
      {
        order: 4, name: 'mello', img: '/poster/mello.jpeg', class: 'ui graphic development', video: '', routerLink: '/mello', url: ''
      },
      {
        order: 5, name: 'potter', img: '/poster/potter.png', class: 'development ui',
        video: '/grid/potter.mp4', routerLink: '/potter', url: ''
      },
      {
        order: 6, name: 'apple', img: '/poster/apple.png', class: 'development', video: '', routerLink: '/apple', url: ''
      },
      {
        order: 7, name: 'rizikitoto', img: '/poster/rizikitoto.png', class: 'development ui', video: '',
        routerLink: '/rizikitoto', url: ''
      },
      {
        order: 8, name: 'spotify', img: '/poster/spotify.png', class: 'ui graphic', video: '', routerLink: '/spotify', url: ''
      },
      {
        order: 9, name: 'posters', img: '/poster/posters.png', class: 'graphic', video: '', routerLink: '/posters', url: ''
      },
      {
        order: 10, name: 'vapor', img: '/poster/vapor.png', class: 'development', video: '/grid/vapor.mp4', routerLink: '/vaporun', url: ''
      },
      {
        order: 11, name: 'photogram', img: '/poster/photogram.png', class: '3d ui',
        video: '/grid/photogram.mp4', routerLink: '/photogram', url: ''
      },
      {
        order: 12, name: 'blaster', img: '/poster/blaster.png', class: 'development ui', video: '/grid/blaster.mp4',
        routerLink: '/blaster', url: ''
      },
      {
        order: 13, name: 'threedesign', img: '/poster/soft.png', class: '3d',
        video: '/grid/soft.mp4', routerLink: '/threedesign', url: ''
      }
    ];
    this.masonryItemsCopy = [...this.masonryItems];
    this.count = 0;
    this.innerwidth = window.innerWidth;
    this.mobileview = false;
    if (this.innerwidth <= 600) {
      this.mobileview = true;
    }
    this.filteredText = 'all';
    this.imagePath = '../../../assets/images/';
    $(document).ready(function () {
      $('.filterbtn').click(function () {
        const value = $(this).attr('data-filter');
        const filterbtn: any = $('.filterbtn');
        const formatBtn: any = Array.from(filterbtn);
        $('#keywords-input').css('width', '0%');
        $('#keywords-input1').css('display', 'block');
        $('#closebtn').css('display', 'none');
        $('#Homeheader').removeAttr('style');
      });

      if ($('.filter-button').removeClass('active')) {
        $(this).removeClass('active');
      }
      $(this).addClass('active');

    });
  }


  Pauseplay(videoplayer) {
    videoplayer.play();
  }

  playPause(videoplayer) {
    videoplayer.pause();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      const currentRoutes = this.router.url;
      const checkroutes = currentRoutes.includes('home');
      if (checkroutes) {
        this.mobileview = true;
        const item = currentRoutes.split('/');
        const citem = item[item.length - 1];
        setTimeout(() => {
          this.gridFilter(citem);
          const filterbtn: any = $('.filterbtn');
          const formatBtn: any = Array.from(filterbtn);
          const colletions = formatBtn.filter(x => x.className.includes('is-checked'));
          colletions.map(x => x.className = 'filterbtn');

          $('#' + citem).addClass('is-checked');
        }, 50);
      }
      $(function () {
        var $grid = $('.grid').isotope({
          itemSelector: 'article'
        });

        // filter buttons
        $('.filters-button-group').on('click', 'button', function () {
          var filterValue = $(this).attr('data-filter');
          $grid.isotope({ filter: filterValue });
        });
        $('.button-group').each(function (i, buttonGroup) {
          var $buttonGroup = $(buttonGroup);
          $buttonGroup.on('click', 'button', function () {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $(this).addClass('is-checked');
          });
        });
      });

      // debounce so filtering doesn't happen every millisecond
      function debounce(fn, threshold) {
        let timeout;
        return function debounced() {
          if (timeout) {
            clearTimeout(timeout);
          }
          function delayed() {
            fn();
            timeout = null;
          }
          timeout = setTimeout(delayed, threshold || 100);
        };
      }
    }, 500);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    let count = 0;
    const currentRoutes = this.router.url;
    const checkroutes = currentRoutes.includes('home');
    const iw = event.target.innerWidth;
    if (iw <= 600) {
      this.mobileview = true;
    } else {
      count = count + 1;
      this.mobileview = false;
      if (count === 1 && checkroutes) {
        location.reload();
        this.router.navigate(['/']);
      }
    }
  }

  gridFilter(item) {
    // debugger
    setTimeout(() => {
      this.gridFilters(item);
    }, 50);
  }

  mobileclick(item) {
    // console.log(item);
    setTimeout(() => {
      this.gridFilters(item);
    }, 50);
  }

  gridFilters(item) {
    if (item !== 'all') {
      this.masonryItems = [];

      setTimeout(() => {
        this.masonryItems = this.masonryItemsCopy.filter(items => items.class.includes(item));
        this.masonryItems = this.masonryItems.sort((a, b) => a.order - b.order);
      }, 50);
    } else {
      this.masonryItems = [];
      setTimeout(() => {
        this.masonryItems = this.masonryItemsCopy.sort((a, b) => a.order - b.order);
      }, 50);
    }

    const currentRoutes = this.router.url;
    const checkroutes = currentRoutes.includes('home');
    if (!checkroutes) {
      this.router.navigate(['/']);
    }
  }

  notify(item) {
    this.mobileclick(item);
  }


}
