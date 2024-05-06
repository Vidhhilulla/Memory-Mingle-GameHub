import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GuardianPortalService } from '../guardian-portal.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-child-profile',
  templateUrl: './child-profile.component.html',
  styleUrls: ['./child-profile.component.css']
})
export class ChildProfileComponent 
{

  childData!:any
  ChildGameData!:any

  constructor(private route: ActivatedRoute, private GuardianPortalService:GuardianPortalService, private cookieService: CookieService,private router: Router,) {

  }

ngOnInit(): void 
{
  this.getChildData();

}


getChildData():void{

  this.GuardianPortalService
  .getChildData( this.cookieService.get('user_id')
)
  .subscribe((data: any) =>
   {
    console.log(data);
    this.childData = data;
    console.log(this.childData)
  });


  this.GuardianPortalService
  .getChildGameData(this.cookieService.get('user_id'))
  .subscribe((data: any) =>
   {
    console.log(data);
    this.ChildGameData = data;
    console.log(this.ChildGameData)

  });
}

}
