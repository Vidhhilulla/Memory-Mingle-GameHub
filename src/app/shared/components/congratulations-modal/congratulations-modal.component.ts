import { Component } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-congratulations-modal',
  templateUrl: './congratulations-modal.component.html',
  styleUrls: ['./congratulations-modal.component.css']
})
export class CongratulationsModalComponent 
{
    
	closeResult = '';

	constructor(private modalService: NgbModal) { }
  
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


}
