import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';
import { TimeLeftModalComponent } from 'src/app/shared/components/time-left-modal/time-left-modal.component';
import { GuardianPortalService } from '../guardian-portal.service';
import { InvalidSetTimeInputComponent } from 'src/app/shared/components/invalid-set-time-input/invalid-set-time-input.component';

@Component({
  selector: 'app-set-timer',
  templateUrl: './set-timer.component.html',
  styleUrls: ['./set-timer.component.css']
})
export class SetTimerComponent {

  constructor(private route: ActivatedRoute, private cookieService: CookieService,private router: Router,private modalService: NgbModal,private GuardianPortalservice:GuardianPortalService
  ) {

  }
  setTimeForm!:FormGroup
  remaining_time!:number


  ngOnInit():void
  {
 
    this.createForm();

    {
      this.GuardianPortalservice
        .fetchTime(this.cookieService.get("g_id"))
        .subscribe((value:any) =>
         {
          console.log(value);
    this.remaining_time=value.time_left
        });
    }
  }
  
  createForm():void
  {
    this.setTimeForm=new FormGroup
      (
    {

      setTime :new FormControl(),
    
  })  
  }
  

setTime():void
  {

    console.log(this.setTimeForm.value.setTime)
    if (this.setTimeForm.value.setTime==0 || this.setTimeForm.value.setTime===null || this.setTimeForm.value.setTime<30)
      { // Check if form is invalid
      this.modalService.open(InvalidSetTimeInputComponent, { ariaLabelledBy: 'modal-basic-title' }).result.then(
        (result) => {
          // this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        },
        );
        return;
    }
   
    {
      this.GuardianPortalservice
        .setTime(this.setTimeForm.value.setTime)
        .subscribe((value) =>
         {
          console.log(value);
    console.log("Updated time");
    this.setTimeForm.reset();
    {
      this.GuardianPortalservice
        .fetchTime(this.cookieService.get("g_id"))
        .subscribe((value:any) =>
         {
          console.log(value);
    this.remaining_time=value.time_left
        });
    }
        });
    }
    this.modalService.open(TimeLeftModalComponent, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        // this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      },
      );

  }
}
