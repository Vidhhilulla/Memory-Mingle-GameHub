import { Component, Input } from '@angular/core';
import { GameService } from '../game.service';
import { Game } from 'src/app/shared/interfaces/game.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { Instruction } from 'src/app/shared/interfaces/instruction.interface';
import { level } from 'src/app/shared/Objects/level';
import { CookieService } from 'ngx-cookie-service';
import { CardGameService } from 'src/app/card-game/card-game.service';

@Component({
  selector: 'app-game-instruction',
  templateUrl: './game-instruction.component.html',
  styleUrls: ['./game-instruction.component.css'],
})
export class GameInstructionComponent 
{
  // @Input()
  // gameId!:number




  slug!: string;
  instructions!: Instruction;
  levelno!: number;

  constructor(private route: ActivatedRoute, private gameservice: GameService, private cookieService: CookieService,private router: Router,private cgs: CardGameService) {
    this.route.params.subscribe((value) => {
      this.slug = value['slug'];
      console.log(this.slug);

      // console.log(this.gameId);

    });
  }

  ngOnInit(): void 
  
  {
    this.gameservice
      .getInstructions(this.slug)
      .subscribe((data: Instruction) =>
       {
        console.log(data);
        this.instructions = data;
      });
  }

  sendLevel(levelName: String): void {
    const key = levelName.toUpperCase();

    if (key in level) {
      console.log(`Value of ${key}: ${level[key]}`);
      this.levelno = level[key];
    } else {
      console.log(`Key ${key} does not exist in the level object.`);
    }


    console.log(this.levelno)
    this.cgs.levelNo = this.levelno;
    this.router.navigate(["/play-game",this.slug])
  }


}

