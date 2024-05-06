import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GuardianService } from '../guardian.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { NoTimeLeftComponent } from 'src/app/shared/components/no-time-left/no-time-left.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InvalidLoginComponent } from 'src/app/shared/components/invalid-login/invalid-login.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent 
{
  loginForm!:FormGroup
  timeLeft!:number
  timeLeftTimestamp!:Date

  

  constructor(private guardianservice:GuardianService,private router:Router,private cookieservice:CookieService,private modalService: NgbModal)
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

submit():void
{

  console.log(this.loginForm.value);
  this.guardianservice.login(this.loginForm.value).subscribe((value)=>
  {

    if(value.validYN===1)
    {
      console.log("Login!!") 
      console.log(value)
      this.timeLeft=value.time_left;
      this.timeLeftTimestamp= new Date();
      console.log(this.timeLeftTimestamp)
      
      // console.log(new Date(this.time_temp).toISOString());
      // let timeLeftMilliseconds = this.timeLeft * 60 * 1000;
      // let timestampWithTimeLeft = this.time_temp + timeLeftMilliseconds;
      // this.timeLeftTimestamp=(new Date(timestampWithTimeLeft).toISOString());
      // console.log(Date.now())
      // console.log((this.time_temp)+this.timeLeft)
      // console.log(this.timeLeftTimestamp)

      {
        setTimeout(() => {
          this.modalService.open(NoTimeLeftComponent, { ariaLabelledBy: 'modal-basic-title' }).result.then(
            (result) => {
              // this.closeResult = `Closed with: ${result}`;
            },
            (reason) => {
              // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            },
            );

        },this.timeLeft*60*1000);

      }

  // this.cookieservice.set("token",value.token)
  this.cookieservice.set("guardianName",value.g_name)
  this.cookieservice.set("childName",value.child_name)

  this.cookieservice.set("g_id",value.g_id)
  this.cookieservice.set("isLoggedIn","1")
  this.cookieservice.set("user_id",value.user_id)
  this.router.navigate(["/home"])
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
