import { Component } from '@angular/core';
import { Game } from 'src/app/shared/interfaces/game.interface';
import { GameService } from '../game.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  gameData!: Game[];
  selected_game_id!: number;

  constructor(
    private gameservice: GameService,
    private cookieService: CookieService
  ) {}

  ngOnInit(): void {
    this.gameservice.getGameData().subscribe((data) => {
      console.log(data);
      this.gameData = data;
    });
  }

  setGameId(game_id: number): void {
    this.selected_game_id = game_id;
    this.cookieService.delete('gameId');

    this.cookieService.set('gameId', this.selected_game_id.toString());
  }
}
