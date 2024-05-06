import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { InstructionsComponent } from './instructions/instructions.component';


@NgModule({
  declarations: [
    SignUpComponent,
    LoginComponent,
    InstructionsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:
  [
    SignUpComponent,
    LoginComponent,
    InstructionsComponent

 
  ]
})
export class GuardianModule { }
