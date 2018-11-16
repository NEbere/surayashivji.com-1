import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { NgProgressModule } from '@ngx-progressbar/core';
import { StickyModule } from 'ng2-sticky-kit';
import { NgxMasonryModule } from 'ngx-masonry';
import { VgBufferingModule } from 'videogular2/buffering';
import { VgControlsModule } from 'videogular2/controls';
import { VgCoreModule } from 'videogular2/core';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { GridviewComponent } from './components/gridview/gridview.component';
import { HeaderComponent } from './components/header/header.component';
import { MaingridComponent } from './components/maingrid/maingrid.component';
import { NewHeaderComponent } from './components/new-header/new-header.component';
import { AppleComponent } from './components/pages/apple/apple.component';
import { BlasterComponent } from './components/pages/blaster/blaster.component';
import { CryptoniteComponent } from './components/pages/cryptonite/cryptonite.component';
import { EventsComponent } from './components/pages/events/events.component';
import { InteractionsComponent } from './components/pages/interactions/interactions.component';
import { MelloComponent } from './components/pages/mello/mello.component';
import { PhotogramComponent } from './components/pages/photogram/photogram.component';
import { PostersComponent } from './components/pages/posters/posters.component';
import { PotterComponent } from './components/pages/potter/potter.component';
import { RizikitotoComponent } from './components/pages/rizikitoto/rizikitoto.component';
import { SpotifyComponent } from './components/pages/spotify/spotify.component';
import { StitchComponent } from './components/pages/stitch/stitch.component';
import { SynthesizeComponent } from './components/pages/synthesize/synthesize.component';
import { VaporrunComponent } from './components/pages/vaporrun/vaporrun.component';
import { WklymotionComponent } from './components/pages/wklymotion/wklymotion.component';
import { ScrollDirective } from './directives/scroll.directive';
import { StickyDirective } from './directives/sticky.directive';
import { GridImageServiceService } from './services/grid-image-service.service';

const appRoutes: Routes = [
  { path: '', component: GridviewComponent },
  { path: 'home/:name', component: GridviewComponent },
  { path: 'potter', component: PotterComponent },
  { path: 'events', component: EventsComponent },
  { path: 'cryptonite', component: CryptoniteComponent },
  { path: 'interaction', component: InteractionsComponent },
  { path: 'photogram', component: PhotogramComponent },
  { path: 'stitch', component: StitchComponent },
  { path: 'rizikitoto', component: RizikitotoComponent },
  { path: 'blaster', component: BlasterComponent },
  { path: 'posters', component: PostersComponent },
  { path: 'apple', component: AppleComponent },
  { path: 'spotify', component: SpotifyComponent },
  { path: 'vaporun', component: VaporrunComponent },
  { path: 'mello', component: MelloComponent },
  { path: 'synthesize', component: SynthesizeComponent },
  { path: 'wklymotion', component: WklymotionComponent },
  {
    path: 'about',
    component: AboutComponent,
    data: {
      headerColor: '#FFF',
    },
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    AppleComponent,
    BlasterComponent,
    CryptoniteComponent,
    EventsComponent,
    FooterComponent,
    GridviewComponent,
    HeaderComponent,
    InteractionsComponent,
    MaingridComponent,
    MelloComponent,
    PhotogramComponent,
    PostersComponent,
    PotterComponent,
    RizikitotoComponent,
    ScrollDirective,
    SpotifyComponent,
    StickyDirective,
    StitchComponent,
    SynthesizeComponent,
    VaporrunComponent,
    WklymotionComponent,
    NewHeaderComponent,
  ],
  imports: [
    NgProgressModule.forRoot(),
    NgxMasonryModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, {
      scrollPositionRestoration: 'enabled',
    }),
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    StickyModule,
  ],
  providers: [GridImageServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
