import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APP_CONSTANTS } from '../shared/constants/app.constants';


@Injectable({
  providedIn: 'root'
})
export class GuardianService 
{

  constructor(private http:HttpClient) { }
  
  register(body:any):Observable<any>
  {
    return this.http.post(APP_CONSTANTS.BACKEND_URL +'register-guardian',body);
  }



  login(body:any):Observable<any>
  {
    return this.http.post(APP_CONSTANTS.BACKEND_URL +'login',body);
  }

  
}
