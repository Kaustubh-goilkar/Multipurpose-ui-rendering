import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponentComponent } from './types/header-component/header-component.component';
import { SharedModule } from './shared-files/shared-modules';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
