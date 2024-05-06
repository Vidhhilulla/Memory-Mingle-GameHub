import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuitModalComponent } from './shared/components/quit-modal/quit-modal.component';
import { GameInstructionComponent } from './home/game-instruction/game-instruction.component';
import { HeroComponent } from './home/hero/hero.component';
import { GameComponent } from './card-game/game/game.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { LoginComponent } from './guardian/login/login.component';
import { SignUpComponent } from './guardian/sign-up/sign-up.component';
import { GuardianLoginComponent } from './home/guardian-login/guardian-login.component';
import { InstructionsComponent } from './guardian/instructions/instructions.component';
import { WelcomePageComponent } from './guardian-portal/welcome-page/welcome-page.component';
import { ChildProfileComponent } from './guardian-portal/child-profile/child-profile.component';
import { SetTimerComponent } from './guardian-portal/set-timer/set-timer.component';
import { ViewProgressComponent } from './guardian-portal/view-progress/view-progress.component';
import { LogoutComponent } from './guardian-portal/logout/logout.component';
import { ChangePasswordComponent } from './guardian-portal/change-password/change-password.component';

const routes: Routes = [

  {
    path:'quit',
    component:QuitModalComponent
  },
  {
    path:'home',
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

  {
    path:'',
    component:WelcomeComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:SignUpComponent
  },

  {
    path:'guardian-portal-login',
    component:GuardianLoginComponent
  },
  {
    path:'instruction',
    component:InstructionsComponent
  },

  {
    path:'guardian-home-page',
    component:WelcomePageComponent
  },

  {
    path:'profile-of-child',
    component:ChildProfileComponent
  },
  {
    path:'set-timer',
    component:SetTimerComponent
  },
  
  {
    path:'progress',
    component:ViewProgressComponent
  },

  {
    path:'logout-guardian',
    component:LogoutComponent
  },

  {
    path:'change-guardian-pin',
    component:ChangePasswordComponent
  },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
