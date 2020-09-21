import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignInModalComponent } from './sign-in-modal/sign-in-modal.component';
import { SignUpModalComponent } from './sign-up-modal/sign-up-modal.component';



@NgModule({
  declarations: [SignInComponent, SignInModalComponent, SignUpModalComponent],
  imports: [
    CommonModule
  ],
  exports:[SignInComponent,SignInModalComponent,SignUpModalComponent]
})
export class SharedModule { }
