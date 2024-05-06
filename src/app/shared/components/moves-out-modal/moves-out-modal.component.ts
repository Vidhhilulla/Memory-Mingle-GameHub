import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-moves-out-modal',
  templateUrl: './moves-out-modal.component.html',
  styleUrls: ['./moves-out-modal.component.css']
})
export class MovesOutModalComponent {

	closeResult = '';
	slug!:string;


	constructor(private modalService: NgbModal,private route : ActivatedRoute,private router : Router) {
		this.route.params.subscribe((value) => {
			this.slug = value['slug'];
			console.log(this.slug);
	  
			// console.log(this.gameId);
	  
		  });
	 }
  
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


	
	onQuit():void
	{
		this.modalService.dismissAll()	
		this.router.navigate(["/home"])
	}


	onRetry():void
	{
		this.modalService.dismissAll()	
		// this.router.navigate(['/play-game',this.slug])

	}

}
