import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GuardianService } from '../guardian.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InvalidRegistrationComponent } from 'src/app/shared/components/invalid-registration/invalid-registration.component';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent 
{

  registerForm!:FormGroup


  constructor(private guardianservice:GuardianService,private router:Router,private modalService: NgbModal)
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




    
register():void{
  console.log(this.registerForm.value)
  if(this.registerForm.value.name==null || this.registerForm.value.email==null || this.registerForm.value.password==null|| this.registerForm.value.dob==null|| this.registerForm.value.childName==null)
    {
      this.modalService.open(InvalidRegistrationComponent, { ariaLabelledBy: 'modal-basic-title' }).result.then(
        (result) => {
          // this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        },
        );
        return;
    }

  this.guardianservice.register(this.registerForm.value).subscribe((value)=>
  {
console.log("REGISTERED!!") 
this.router.navigate(["/instruction"])
  })

}

goToLogin():void{
  this.router.navigate(["/login"])

}



}
