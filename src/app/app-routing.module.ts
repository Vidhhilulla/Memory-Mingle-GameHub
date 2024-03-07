import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuitModalComponent } from './shared/components/quit-modal/quit-modal.component';

const routes: Routes = [

  {
    path:'quit',
    component:QuitModalComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
