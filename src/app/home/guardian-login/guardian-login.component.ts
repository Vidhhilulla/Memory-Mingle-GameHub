import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { GameService } from '../game.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InvalidLoginComponent } from 'src/app/shared/components/invalid-login/invalid-login.component';
import { InvalidGuardianComponent } from 'src/app/shared/components/invalid-guardian/invalid-guardian.component';

@Component({
  selector: 'app-guardian-login',
  templateUrl: './guardian-login.component.html',
  styleUrls: ['./guardian-login.component.css']
})
export class GuardianLoginComponent 
{
  loginForm!:FormGroup

  constructor(private gameservice:GameService,private router:Router,private cookieservice:CookieService,private modalService: NgbModal)
{

}


ngOnInit():void
{
  this.createForm()
}

createForm():void
{
  this.loginForm=new FormGroup
    (
  {

  username :new FormControl(),
  password :new FormControl(),
  
})  
}

guardianPortalLogin():void
{
  console.log(this.loginForm.value);
  this.gameservice.guardianPortalLogin(this.loginForm.value).subscribe((value)=>
  {
    console.log(value)


    if(this.cookieservice.get("guardianName")!=this.loginForm.value.username)  
      {
        this.loginForm.reset();

        console.log("Invalid guardian!!")
        this.modalService.open(InvalidGuardianComponent, { ariaLabelledBy: 'modal-basic-title' }).result.then(
          (result) => {
            // this.closeResult = `Closed with: ${result}`;
          },
          (reason) => {
            // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
          },
          ); 
          return; 
      }
    if(value.validYN==1)
    {
      console.log("Login!!")
      // this.cookieservice.set("g_name",value.g_name)
      console.log(value)
      this.router.navigate(["/guardian-home-page"])
    }
    else if(value.validYN==0)
    {
      
        this.modalService.open(InvalidLoginComponent, { ariaLabelledBy: 'modal-basic-title' }).result.then(
          (result) => {
            // this.closeResult = `Closed with: ${result}`;
          },
          (reason) => {
            // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
          },
          );  
    }
  })

}


}
