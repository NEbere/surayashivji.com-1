import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgProgressModule } from '@ngx-progressbar/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { GridviewComponent } from './components/gridview/gridview.component';
import { BlasterComponent } from './components/pages/blaster/blaster.component';
import { CryptoniteComponent } from './components/pages/cryptonite/cryptonite.component';
import { EventsComponent } from './components/pages/events/events.component';
import { InteractionsComponent } from './components/pages/interactions/interactions.component';
import { PhotogramComponent } from './components/pages/photogram/photogram.component';
import { PostersComponent } from './components/pages/posters/posters.component';
import { PotterComponent } from './components/pages/potter/potter.component';
import { RizikitotoComponent } from './components/pages/rizikitoto/rizikitoto.component';
import { StitchComponent } from './components/pages/stitch/stitch.component';
import { SynthesizeComponent } from './components/pages/synthesize/synthesize.component';
import { AboutComponent } from './components/about/about.component';

import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';
import { VgBufferingModule } from 'videogular2/buffering';
import { ScrollDirective } from './directives/scroll.directive';

import { ScrollService } from './services/scroll.service';
import { AppleComponent } from './components/pages/apple/apple.component';
import { SpotifyComponent } from './components/pages/spotify/spotify.component';
import { VaporrunComponent } from './components/pages/vaporrun/vaporrun.component';
import { MelloComponent } from './components/pages/mello/mello.component';
import { WklymotionComponent } from './components/pages/wklymotion/wklymotion.component';

import { NgxMasonryModule } from 'ngx-masonry';
import { MaingridComponent } from './components/maingrid/maingrid.component';

import {GridImageServiceService} from './services/grid-image-service.service';
import { GenerativeartComponent } from './components/pages/generativeart/generativeart.component';
import { ThreedesignComponent } from './components/pages/threedesign/threedesign.component';

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
  { path: 'generativeart', component: GenerativeartComponent },
  { path: 'threedesign', component: ThreedesignComponent },
  {
    path: 'about',
    component: AboutComponent,
    data: {
      headerColor: '#FFF'
    }
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    GridviewComponent,
    BlasterComponent,
    CryptoniteComponent,
    EventsComponent,
    InteractionsComponent,
    PhotogramComponent,
    PostersComponent,
    PotterComponent,
    RizikitotoComponent,
    StitchComponent,
    SynthesizeComponent,
    AboutComponent,
    ScrollDirective,
    AppleComponent,
    SpotifyComponent,
    VaporrunComponent,
    MelloComponent,
    MaingridComponent,
    WklymotionComponent,
    GenerativeartComponent,
    ThreedesignComponent
  ],
  imports: [
    NgProgressModule.forRoot(), NgxMasonryModule, BrowserModule, BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, { scrollPositionRestoration: 'enabled' }), VgCoreModule, VgControlsModule,
    VgOverlayPlayModule, VgBufferingModule

  ],
  providers: [GridImageServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
