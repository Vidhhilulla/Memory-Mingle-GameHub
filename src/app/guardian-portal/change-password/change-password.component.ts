import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';
import { GuardianPortalService } from '../guardian-portal.service';
import { InvalidConfirmpwdComponent } from 'src/app/shared/components/invalid-confirmpwd/invalid-confirmpwd.component';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  constructor(private route: ActivatedRoute, private cookieService: CookieService,private router: Router,private modalService: NgbModal,private GuardianPortalservice:GuardianPortalService
  ) {

  }
  changePasswordForm!:FormGroup
  ngOnInit():void
  {
    this.createForm();
  }
  
  createForm():void
  {
    this.changePasswordForm=new FormGroup
      (
    {
      currentPin:new FormControl(),
      newPin:new FormControl(),
      confirmNewPin:new FormControl(),
  })  
  }
  

  setPassword():void
  {

    console.log(this.changePasswordForm.value.currentPin)
    if (this.changePasswordForm.value.currentPin !=this.changePasswordForm.value.confirmNewPin)
      { // Check if form is invalid
      this.modalService.open(InvalidConfirmpwdComponent, { ariaLabelledBy: 'modal-basic-title' }).result.then(
        (result) => {
          // this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        },
        );
        return;
    }
  }
}
