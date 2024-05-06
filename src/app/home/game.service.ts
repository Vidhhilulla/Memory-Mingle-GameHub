import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APP_CONSTANTS } from '../shared/constants/app.constants';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http:HttpClient) 
  {

  }

  getGameData():Observable<any>
  {
    return this.http.get(APP_CONSTANTS.BACKEND_URL +'getDataOfGame');

  }

  getInstructions(slug:string):Observable<any>
  {
    return this.http.get(`${APP_CONSTANTS.BACKEND_URL}getInstructions/${slug}`);

  }



  guardianPortalLogin(body:any):Observable<any>
  {
    return this.http.post(APP_CONSTANTS.BACKEND_URL +'guardianPortalLogin',body);
  }





}
