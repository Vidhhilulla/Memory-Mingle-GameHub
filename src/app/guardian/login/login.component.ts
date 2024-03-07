import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GuardianService } from '../guardian.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent 
{
  loginForm!:FormGroup

  constructor(private guardianservice:GuardianService,private router:Router,private cookieservice:CookieService)
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

  this.cookieservice.set("token",value.token)
  this.cookieservice.set("username",value.g_name)
  this.cookieservice.set("userid",value.g_id)
  this.cookieservice.set("isLoggedIn","1")

    }
    else
console.log("Not a user");
  })

}


}
