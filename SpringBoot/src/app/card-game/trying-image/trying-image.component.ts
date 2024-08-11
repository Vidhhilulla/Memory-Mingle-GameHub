import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { CardGameService } from '../card-game.service';
import { APP_CONSTANTS } from 'src/app/shared/constants/app.constants';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-trying-image',
  templateUrl: './trying-image.component.html',
  styleUrls: ['./trying-image.component.css']
})
export class TryingImageComponent implements OnInit {
  imageUrlIdData: any;

  constructor(
    private router: Router,
    private cookieservice: CookieService,
    private route: ActivatedRoute,
    private cardgameservice: CardGameService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.fetchImagesId();
  }

  fetchImagesId(): void {
    this.cardgameservice.fetchImagesId().subscribe((data) => {
      this.imageUrlIdData=data;
      console.log(this.imageUrlIdData)

      for (let i = 0; i < this.imageUrlIdData.length; i++) {
        console.log("Printing data")
        console.log(this.imageUrlIdData[i].id);
      }
    });
  }


  getImage(id: number): any {
    return this.http.post(`${APP_CONSTANTS.BACKEND_URL}fetchImageUrlById`,{id});
  }


  getUrl(id:number){
   return "http://localhost:8082/api/fetchImageUrlById/"+id;
  }

}
