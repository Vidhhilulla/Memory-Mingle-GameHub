import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GameInstructionComponent } from './game-instruction/game-instruction.component';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { GuardianLoginComponent } from './guardian-login/guardian-login.component';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    HeroComponent,
    GameInstructionComponent,
    WelcomeComponent,
    GuardianLoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgbAccordionModule

  ],
  exports:
  [
    HeroComponent,
    GameInstructionComponent,
    WelcomeComponent
  ]
})
export class HomeModule { }
