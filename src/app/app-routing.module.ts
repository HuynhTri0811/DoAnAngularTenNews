import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FooterAreaComponent } from './web-source/footer/footer-area/footer-area.component';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NewsPageComponent } from './pages/news-page/news-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';


const routes: Routes = [
  { path: 'news', component: NewsPageComponent},
  { path: '',component:HomePageComponent},
  { path: 'about',component:AboutPageComponent},
  { path: 'internal_news',component:NewsPageComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
