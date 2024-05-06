import { Component } from '@angular/core';
import { Game } from 'src/app/shared/interfaces/game.interface';
import { GameService } from '../game.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { LogOutConfirmationComponent } from 'src/app/shared/components/log-out-confirmation/log-out-confirmation.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  gameData!: Game[];
  selected_game_id!: number;
  username!:String
  logOutTimeStamp!:Date

  constructor(
    private gameservice: GameService,
    private cookieService: CookieService,
    private router: Router,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.gameservice.getGameData().subscribe((data) => {
      console.log(data);
      this.gameData = data;
    });

    this.username=this.cookieService.get("childName")
  }

  setGameId(game_id: number): void {
    this.selected_game_id = game_id;
    this.cookieService.delete('gameId');
    this.cookieService.set('gameId', this.selected_game_id.toString());
  }


  getUrl(image_url:String){
    return "http://localhost:8082/api/fetchImageOfGame/"+image_url;
   }


   guardianLogin():void{
    this.router.navigate(["/guardian-portal-login"])
   }

   logOut():void{
    this.modalService.open(LogOutConfirmationComponent, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        // this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      },

      );
      this.logOutTimeStamp= new Date();
      console.log(this.logOutTimeStamp)

   }
}
