import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { AppComponent }         from './app.component';
import { HttpClientModule }    from '@angular/common/http';


//Routing
import { AppRoutingModule }     from './app-routing.module';


//Header
import { MenuAreaComponent }    from './web-source/header/menu-area/menu-area.component';
import { BarComponent }         from './web-source/header/bar/bar.component';
import { LogoAreaComponent }    from './web-source/header/logo-area/logo-area.component';


//Pages
import { HomePageComponent }    from './pages/home-page/home-page.component';
import { NewsPageComponent }    from './pages/news-page/news-page.component';
import { AboutPageComponent }   from './pages/about-page/about-page.component';


//Footer
import { Test01Component }      from './web-source/footer/test01/test01.component';
import { FooterAreaComponent }  from './web-source/footer/footer-area/footer-area.component';



import { MobileMenuComponent }  from './componentWeb/mobile-menu/mobile-menu.component';
import { WebTickerComponent }   from './componentWeb/web-ticker/web-ticker.component';
import { SliderAreaComponent }  from './componentWeb/slider-area/slider-area.component';
import { NewAreaComponent }     from './componentWeb/new-area/new-area.component';
import { GalleryComponent }     from './componentWeb/gallery/gallery.component';
import { NewsAreaComponent }    from './componentWeb/news-area/news-area.component';
import { GalleryVnComponent }   from './componentWeb/gallery-vn/gallery-vn.component';
import { TestRouterComponent }  from './componentWeb/test-router/test-router.component';
import { InternationalAndLifeStyleComponent }     from './componentWeb/international-and-life-style/international-and-life-style.component';
import { MoreNewsAreaComponent }                  from './componentWeb/more-news-area/more-news-area.component';
import { InternationalAndLifeStyleTwoComponent }  from './componentWeb/international-and-life-style-two/international-and-life-style-two.component';
import { InformationNewComponentComponent }       from './component_customize/information-new-component/information-new-component.component';


//Service
import { NewsInformationService }                 from './service/news.service';
import { InformationNewsTabWidthComponentComponent } from './component_customize/information-news-tab-width-component/information-news-tab-width-component.component';
import { InformationNewsEvaluateTabComponentComponent } from './component_customize/information-news-evaluate-tab-component/information-news-evaluate-tab-component.component';


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
    FooterAreaComponent,
    TestRouterComponent,
    HomePageComponent,
    NewsPageComponent,
    AboutPageComponent,
    Test01Component,
    InformationNewComponentComponent,
    InformationNewsTabWidthComponentComponent,
    InformationNewsEvaluateTabComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [NewsInformationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
