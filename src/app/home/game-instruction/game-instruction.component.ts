import { Component, Input } from '@angular/core';
import { GameService } from '../game.service';
import { Game } from 'src/app/shared/interfaces/game.interface';
import { ActivatedRoute } from '@angular/router';
import { Instruction } from 'src/app/shared/interfaces/instruction.interface';
import { level } from 'src/app/shared/Objects/level';
import { CookieService } from 'ngx-cookie-service';

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

  constructor(private route: ActivatedRoute, private gameservice: GameService, private cookieService: CookieService) {
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


    this.cookieService.delete('levelNo');

    this.cookieService.set('levelNo',this.levelno .toString());

  }


}
