import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { AutomotiveComponent } from './automotive/automotive.component';
import { BabyCareComponent } from './baby-care/baby-care.component';
import { BWBComponent } from './bwb/bwb.component';


@NgModule({
  declarations: [HomeComponent, AutomotiveComponent, BabyCareComponent, BWBComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports:[HomeComponent]
})
export class HomeModule { }
