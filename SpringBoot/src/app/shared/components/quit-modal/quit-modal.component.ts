import { Component, inject, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Action } from 'rxjs/internal/scheduler/Action';


@Component({
  selector: 'app-quit-modal',
  templateUrl: './quit-modal.component.html',
  styleUrls: ['./quit-modal.component.css']
})
export class QuitModalComponent
{
  
	closeResult = '';

	constructor(private modalService: NgbModal,private route : ActivatedRoute,private router : Router) { }
  
	ngOnInit(): void {
	  
	}

	click(content:any):void{
		// this.openModal(content);
	}
  
	onClose():void
	{
	this.modalService.dismissAll()	
		
	}

	onQuit():void
	{
		this.modalService.dismissAll()	
		this.router.navigate(["/home"])
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
