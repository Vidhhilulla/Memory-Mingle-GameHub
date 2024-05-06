import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GuardianModule } from './guardian/guardian.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './home/home.module';
import { CardGameModule } from './card-game/card-game.module';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { GuardianPortalModule } from './guardian-portal/guardian-portal.module';





@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    GuardianModule,
    HttpClientModule,
    HomeModule,
    CardGameModule,
    SharedModule,
    RouterModule,
    GuardianPortalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
