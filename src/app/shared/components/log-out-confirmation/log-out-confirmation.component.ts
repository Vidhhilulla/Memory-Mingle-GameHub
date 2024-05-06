import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-log-out-confirmation',
  templateUrl: './log-out-confirmation.component.html',
  styleUrls: ['./log-out-confirmation.component.css']
})
export class LogOutConfirmationComponent {
    
	closeResult = '';
	logOutTimeStamp!:Date


	constructor(private modalService: NgbModal,private route : ActivatedRoute,private router : Router) {}
  
	ngOnInit(): void {
	  
	}

	click(content:any):void{
		// this.openModal(content);
	}
  
	
  
	private getDismissReason(reason: any): string {
	  if (reason === ModalDismissReasons.ESC) {
		return 'by pressing ESC';
	  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
		return 'by clicking on a backdrop';
	  } else {
		return `with: ${reason}`;
	  }
	}


	OnLogoutClick():void
	{
		this.modalService.dismissAll()	
		this.router.navigate(["/"])
		this.logOutTimeStamp= new Date();

	}
  OnBackClick():void
  {
    this.modalService.dismissAll()	
	this.router.navigate(["/home"])
  }


}
