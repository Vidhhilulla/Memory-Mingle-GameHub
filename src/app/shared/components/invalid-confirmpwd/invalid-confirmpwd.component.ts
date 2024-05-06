import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-invalid-confirmpwd',
  templateUrl: './invalid-confirmpwd.component.html',
  styleUrls: ['./invalid-confirmpwd.component.css']
})
export class InvalidConfirmpwdComponent {
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
		this.router.navigate(["/change-guardian-pin"])
	}



}
