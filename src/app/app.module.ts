import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { AppMenubar } from './menubar/menubar.component';
import { InputTextModule } from 'primeng/inputtext';
import { DataAnalytics } from './pages/data-analytics/data-analytics.component';
import { AppFooter } from './pages/footer/app-footer.component';


@NgModule({
  declarations: [
    AppComponent,
    DataAnalytics,
    AppMenubar,
    AppFooter
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    InputTextModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
