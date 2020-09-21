import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [NavbarComponent, FooterComponent],
  imports: [
    CommonModule,
    SharedModule,
    CoreRoutingModule
  ],
  exports:[NavbarComponent,FooterComponent]
})
export class CoreModule { }
