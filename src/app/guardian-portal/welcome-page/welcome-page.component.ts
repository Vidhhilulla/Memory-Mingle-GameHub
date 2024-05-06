import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent {

  g_name!:String
  constructor(
    private router: Router,
    private cookieservice: CookieService,
    private route: ActivatedRoute,
    private http: HttpClient
  ){ }

  ngOnInit()
  {
    this.g_name=this.cookieservice.get("guardianName")
  }
  profile():void
  {
    this.router.navigate(["/profile-of-child"])
    
  }

  setTimer():void{
    this.router.navigate(["/set-timer"])
  }

  getProgress():void{
    this.router.navigate(["/progress"])
  }
  goToLogOut():void{
    this.router.navigate(["/logout-guardian"])
  }

  goToChangePassword():void
  {
    this.router.navigate(["/change-guardian-pin"])
  }
}
