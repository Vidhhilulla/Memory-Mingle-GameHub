import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game/game.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { TryingImageComponent } from './trying-image/trying-image.component';
import { TileMatchComponent } from './tile-match/tile-match.component';



@NgModule({
  declarations: [
    GameComponent,
    TryingImageComponent,
    TileMatchComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    NgbToastModule
  ],
  exports:
  [
    GameComponent,
    TryingImageComponent
  ]
})
export class CardGameModule { }
