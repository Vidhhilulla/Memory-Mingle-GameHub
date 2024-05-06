import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { GuardianPortalService } from '../guardian-portal.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

  constructor(private route: ActivatedRoute, private cookieService: CookieService,private router: Router,private modalService: NgbModal,private GuardianPortalservice:GuardianPortalService
  ) {

  }
  g_name!:String

  ngOnInit()
  {
    this.g_name=this.cookieService.get("guardianName")

  }
  onLogOutClick()
  {
		this.router.navigate(["/home"])
  }
}
