import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatGridListModule
    
  ],
  exports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatGridListModule
    
  ]
})

export class SharedModule {}
