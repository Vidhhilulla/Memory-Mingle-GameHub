import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-invalid-guardian',
  templateUrl: './invalid-guardian.component.html',
  styleUrls: ['./invalid-guardian.component.css']
})
export class InvalidGuardianComponent 
{
  closeResult = '';

	constructor(private modalService: NgbModal,private route : ActivatedRoute,private router : Router) {}
  
	ngOnInit(): void 
  {
	  
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


	onBackClick():void
	{
		this.modalService.dismissAll()	
		this.router.navigate(["/guardian-portal-login"])
	}



}
