import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { ChildProfileComponent } from './child-profile/child-profile.component';
import { SetTimerComponent } from './set-timer/set-timer.component';
import { ViewProgressComponent } from './view-progress/view-progress.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import '@angular/compiler';
import { bootstrapApplication } from '@angular/platform-browser';
import { LogoutComponent } from './logout/logout.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AgChartsAngular } from 'ag-charts-angular';



@NgModule({
  declarations: [
    WelcomePageComponent,
    ChildProfileComponent,
    SetTimerComponent,
    ViewProgressComponent,
    LogoutComponent,
    ChangePasswordComponent
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AgChartsAngular
  ],
  exports:
  [
    WelcomePageComponent,
    ChildProfileComponent,
    SetTimerComponent,
    ViewProgressComponent,
    LogoutComponent,
    ChangePasswordComponent

  ]
})
export class GuardianPortalModule { }
