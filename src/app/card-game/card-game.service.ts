import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APP_CONSTANTS } from '../shared/constants/app.constants';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CardGameService {

  constructor(private http:HttpClient,    private cookieService: CookieService
    ) 
  {

  }


  getLevelData(): Observable<any> {
    const gameId = this.cookieService.get('gameId');
    const levelNo = this.cookieService.get('levelNo');
    
    const body = 
    {
      game_id: gameId,
      level_no: levelNo
    };

    console.log("printing url "+`${APP_CONSTANTS.BACKEND_URL}getDataOflevel`)
    
    return this.http.post(`${APP_CONSTANTS.BACKEND_URL}getDataOflevel`, body);
  }


}
