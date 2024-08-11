import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-invalid-set-time-input',
  templateUrl: './invalid-set-time-input.component.html',
  styleUrls: ['./invalid-set-time-input.component.css']
})
export class InvalidSetTimeInputComponent {
    
	closeResult = '';

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


	onwebsiteClick():void
	{
		this.modalService.dismissAll()	
		this.router.navigate(["/set-timer"])
	}


}
