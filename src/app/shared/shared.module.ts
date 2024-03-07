import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuitModalComponent } from './components/quit-modal/quit-modal.component';



@NgModule({
  declarations: [
    QuitModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports:
  [
    QuitModalComponent


  ]
})
export class SharedModule { }
