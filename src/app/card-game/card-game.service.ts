import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APP_CONSTANTS } from '../shared/constants/app.constants';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class CardGameService {
  levelNo!:number;
  constructor(private http: HttpClient, private cookieService: CookieService) {}

  getLevelData(): Observable<any> {
    let gameId = this.cookieService.get('gameId');
    let levelNo = this.levelNo;

    let body = {
      game_id: gameId,
      level_no: levelNo,
    };

    // console.log('printing url ' + `${APP_CONSTANTS.BACKEND_URL}getDataOflevel`);

    return this.http.post(`${APP_CONSTANTS.BACKEND_URL}getDataOflevel`, body);
  }

  insertProgressOfuser(score: number, game_won: number): Observable<any> {
    let gameId = +this.cookieService.get('gameId');
    let levelNo = this.levelNo;
    let user_id: number = 1;

    let body = {
      user_id: this.cookieService.get("user_id"),
      points: score,
      game_id: gameId,
      level_no: levelNo,
      game_won: game_won,
    };

    return this.http.post(`${APP_CONSTANTS.BACKEND_URL}insertProgress`, body);
  }


  fetchImages():Observable<any>
  {
    let gameId = this.cookieService.get('gameId');
    let levelNo = this.levelNo;
    let body = {
      game_id: gameId,
      level_no: levelNo,
    };

    return this.http.post(`${APP_CONSTANTS.BACKEND_URL}getImages`,body);
  }


  fetchImagesId():Observable<any>
  {
    let gameId = this.cookieService.get('gameId');
    let levelNo = this.levelNo;
    console.log("level",levelNo)
    let body = {
      game_id: gameId,
      level_no: levelNo,
    };

    return this.http.post(`${APP_CONSTANTS.BACKEND_URL}getImagesId`,body);
  }


  fetchImageUrlById(id:number):Observable<any>
  {
    return this.http.post(`${APP_CONSTANTS.BACKEND_URL}fetchImageUrlById`,id);
  }
}
