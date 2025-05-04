import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponentComponent } from './types/header-component/header-component.component';
import { SharedModule } from './shared-files/shared-modules';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { CustomCardComponent } from './types/card/custom-card/custom-card.component';
import { GridListComponent } from './wrappers/grid-list/grid-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponentComponent,
    CustomCardComponent,
    GridListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormlyModule.forRoot({

      types: [
        { name: 'card', component: CustomCardComponent },
      ],
      wrappers: [
        { name: 'grid-layout', component:GridListComponent}
      ],
    }),
    ReactiveFormsModule,
    FormlyMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
