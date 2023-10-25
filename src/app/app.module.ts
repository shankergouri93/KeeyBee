import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarModule } from 'primeng/menubar';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { AppMenubar } from './menubar/menubar.component';
import { InputTextModule } from 'primeng/inputtext';
import { DataAnalytics } from './pages/data-analytics/data-analytics.component';
import { AppFooter } from './pages/footer/app-footer.component';
import { AppHome } from './pages/home/app.home.component';


@NgModule({
  declarations: [
    AppComponent,
    DataAnalytics,
    AppMenubar,
    AppFooter,
    AppHome
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    CarouselModule,
    TagModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
