import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { APP_CONSTANTS } from '../shared/constants/app.constants';

@Injectable({
  providedIn: 'root'
})
export class GuardianPortalService {

  constructor(private http:HttpClient,private cookieService:CookieService) 
  {

  }
  getChildData(user_id:String):Observable<any>
  {
    let body={
      user_id:user_id
    }
    return this.http.post(APP_CONSTANTS.BACKEND_URL +'getChildData',body);
  }

  getChildGameData(user_id:String):Observable<any>
  {
    let body={
      user_id:user_id
    }
    return this.http.post(APP_CONSTANTS.BACKEND_URL +'getChildGameData',body);
  }

  


  
  getProgress(user_id:String):Observable<any>
  {
    let body={
      user_id:user_id
    }
    return this.http.post(APP_CONSTANTS.BACKEND_URL +'getProgress',body);
  }


  setTime(time:number):Observable<any>
  {
    let body={
      g_id:this.cookieService.get("g_id"),
      time:time
    }

    return this.http.post(APP_CONSTANTS.BACKEND_URL +'setTime',body);
  }


  

  fetchTime(g_id:String):Observable<any>
  {
    let body={
      g_id:g_id
    }

 
    return this.http.post(APP_CONSTANTS.BACKEND_URL +'getTime',body);
  }




  }

