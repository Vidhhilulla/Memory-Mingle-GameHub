import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuitModalComponent } from './components/quit-modal/quit-modal.component';
import { CongratulationsModalComponent } from './components/congratulations-modal/congratulations-modal.component';
import { MovesOutModalComponent } from './components/moves-out-modal/moves-out-modal.component';



@NgModule({
  declarations: [
    QuitModalComponent,
    CongratulationsModalComponent,
    MovesOutModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports:
  [
    QuitModalComponent,
    CongratulationsModalComponent,
    MovesOutModalComponent


  ]
})
export class SharedModule { }
