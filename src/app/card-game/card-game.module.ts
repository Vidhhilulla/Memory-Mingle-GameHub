import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game/game.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    GameComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    NgbToastModule
  ],
  exports:
  [
    GameComponent


  ]
})
export class CardGameModule { }
