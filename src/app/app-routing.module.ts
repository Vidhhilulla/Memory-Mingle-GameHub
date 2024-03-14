import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuitModalComponent } from './shared/components/quit-modal/quit-modal.component';
import { GameInstructionComponent } from './home/game-instruction/game-instruction.component';
import { HeroComponent } from './home/hero/hero.component';
import { GameComponent } from './card-game/game/game.component';

const routes: Routes = [

  {
    path:'quit',
    component:QuitModalComponent
  },
  {
    path:'',
    component:HeroComponent
  },
  {
    path:'instructions/:slug',
    component:GameInstructionComponent
  },
  {
    path:'play-game/:slug',
    component:GameComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
