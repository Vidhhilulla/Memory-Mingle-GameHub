import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuitModalComponent } from './components/quit-modal/quit-modal.component';
import { CongratulationsModalComponent } from './components/congratulations-modal/congratulations-modal.component';
import { MovesOutModalComponent } from './components/moves-out-modal/moves-out-modal.component';
import { RouterModule } from '@angular/router';
import { TimeLeftModalComponent } from './components/time-left-modal/time-left-modal.component';
import { InvalidLoginComponent } from './components/invalid-login/invalid-login.component';
import { NoTimeLeftComponent } from './components/no-time-left/no-time-left.component';
import { LogOutConfirmationComponent } from './components/log-out-confirmation/log-out-confirmation.component';
import { InvalidSetTimeInputComponent } from './components/invalid-set-time-input/invalid-set-time-input.component';
import { InvalidRegistrationComponent } from './components/invalid-registration/invalid-registration.component';
import { InvalidGuardianComponent } from './components/invalid-guardian/invalid-guardian.component';
import { ChangePasswordComponent } from '../guardian-portal/change-password/change-password.component';
import { InvalidConfirmpwdComponent } from './components/invalid-confirmpwd/invalid-confirmpwd.component';


@NgModule({
  declarations: [
    QuitModalComponent,
    CongratulationsModalComponent,
    MovesOutModalComponent,
    TimeLeftModalComponent,
    InvalidLoginComponent,
    NoTimeLeftComponent,
    LogOutConfirmationComponent,
    InvalidSetTimeInputComponent,
    InvalidRegistrationComponent,
    InvalidGuardianComponent,
    InvalidConfirmpwdComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:
  [
    QuitModalComponent,
    CongratulationsModalComponent,
    MovesOutModalComponent,
    TimeLeftModalComponent,
    InvalidLoginComponent,
    NoTimeLeftComponent,
    LogOutConfirmationComponent,
    InvalidSetTimeInputComponent,
    InvalidRegistrationComponent,
    InvalidGuardianComponent,




  ]
})
export class SharedModule { }
