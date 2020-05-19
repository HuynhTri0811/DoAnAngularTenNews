import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BarComponent } from './bar/bar.component';
import { LogoAreaComponent } from './logo-area/logo-area.component';
import { MenuAreaComponent } from './menu-area/menu-area.component';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';
import { WebTickerComponent } from './web-ticker/web-ticker.component';
import { SliderAreaComponent } from './slider-area/slider-area.component';
import { NewAreaComponent } from './new-area/new-area.component';
import { GalleryComponent } from './gallery/gallery.component';
import { InternationalAndLifeStyleComponent } from './international-and-life-style/international-and-life-style.component';
import { NewsAreaComponent } from './news-area/news-area.component';
import { GalleryVnComponent } from './gallery-vn/gallery-vn.component';
import { MoreNewsAreaComponent } from './more-news-area/more-news-area.component';
import { InternationalAndLifeStyleTwoComponent } from './international-and-life-style-two/international-and-life-style-two.component';
import { FooterAreaComponent } from './footer-area/footer-area.component';

@NgModule({
  declarations: [
    AppComponent,
    BarComponent,
    LogoAreaComponent,
    MenuAreaComponent,
    MobileMenuComponent,
    WebTickerComponent,
    SliderAreaComponent,
    NewAreaComponent,
    GalleryComponent,
    InternationalAndLifeStyleComponent,
    NewsAreaComponent,
    GalleryVnComponent,
    MoreNewsAreaComponent,
    InternationalAndLifeStyleTwoComponent,
    FooterAreaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
