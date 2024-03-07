import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GuardianService } from '../guardian.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent 
{

  registerForm!:FormGroup


  constructor(private guardianservice:GuardianService,private router:Router)
{

}


ngOnInit():void{
  this.createForm();

}


createForm():void
{

  this.registerForm=new FormGroup
    (
  {
    name:new FormControl(),
    email:new FormControl(),
    password:new FormControl(),
    dob:new FormControl(),
    childName:new FormControl(),
})
  
}




    
submit():void{
  console.log(this.registerForm.value)

  this.guardianservice.register(this.registerForm.value).subscribe((value)=>
  {
console.log("REGISTERED!!") 
  })

}


}
