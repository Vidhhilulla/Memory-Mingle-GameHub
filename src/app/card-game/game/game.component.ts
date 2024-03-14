import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { CardGameService } from '../card-game.service';
import { cardGameConstarint } from 'src/app/shared/interfaces/cardGameConstraint';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent {
  slug!: string;

  constructor(
    private router: Router,
    private cookieservice: CookieService,
    private route: ActivatedRoute,
    private cardgameservice: CardGameService
  ) {
    this.route.params.subscribe((value) => {
      this.slug = value['slug'];
      console.log(this.slug);

      // console.log(this.gameId);
    });
  }
  colors!: string[];
  selectedColor: string[] = [];
  myMap = new Map();
  selectedObjects3: any[] = [];
  isDisable: boolean = false;

  // for toast
  show: boolean = true;

  points: number = 0;
  pointScored: number = 0;
  count: number = 0;
  cardsArr: any[] = [];
  selectedCard: number | null = null;
  notEqual: number = 0;
  totalClicks: number = 0;

  // Getting the constraints from the backend
  constrainsts!: cardGameConstarint;
  noOfCards!: number;
  movesForlevel!: number;
  pairLeft!: number;

  ngOnInit(): void 
  {
    this.cardgameservice.getLevelData().subscribe((val) => {
      this.constrainsts = val;
      console.log(val);
      console.log(this.constrainsts);

      this.noOfCards = this.constrainsts.no_of_cards;
      console.log(this.noOfCards);
      this.movesForlevel = this.constrainsts.moves;
      console.log(this.movesForlevel);

      this.pairLeft = this.noOfCards / 2;
      console.log(this.pairLeft);
      this.generateColor(this.noOfCards / 2);

    });

  }

  generateColor(reqColors: number): void {
    this.colors = [
      '#ffcc00',
      '#ff0000',
      '#00ff00',
      '#0000ff',
      '#ff6600',
      '#9900cc',
      '#cc00cc',
      '#0099cc',
      '#009900',
      '#ff0099',
    ];
    const numbersUsed: Set<number> = new Set();
    for (let i = 0; i < reqColors; i++) {
      let index = Math.floor(Math.random() * this.colors.length);
      if (!numbersUsed.has(index)) {
        numbersUsed.add(index);
        this.selectedColor[i] = this.colors[index];
      }
    }
    for (let i = 0; i < reqColors; i++) {
      this.myMap.set(this.selectedColor[i], 0);
    }
    console.log(this.selectedColor);
    console.log(this.myMap);
    this.selectedObjects3 = this.generateObject(this.selectedColor);
    console.log(this.selectedObjects3);
  }

  generateObject(selectedColor: string[]): any[] {
    const formedObject: any[] = [];
    let n = this.noOfCards;
    console.log("Printing n"+n)
    let i = 0;
    while (i < n) {
      let index = Math.floor((Math.random() * n) / 2);
      let key = selectedColor[index];
      if (this.myMap.has(key) == true && this.myMap.get(key) < 2) {
        formedObject.push({
          number: i,
          color: selectedColor[index],
          isSelected: false,
        });
        this.myMap.set(key, this.myMap.get(key) + 1);
        i++;
      }
    }
    return formedObject;
  }

  onCardClick(card: any): void 
  {
    this.movesForlevel-=1;
    if(this.movesForlevel==0)
    {
      // To send the progress to the backend
      this.sendProgressOfTimeOut()
    }
    this.count = this.count + 1;
    this.cardsArr.push(card);
    console.log(`Clicked on card ${card.number} and  ${card.color}`);
    this.selectedCard = card.number;
    card.isSelected = true; // Toggle the isSelected property

    if (this.count % 2 == 0) {
      setTimeout(() => {
        this.check(0, 1);
      }, 500);
    }
  }
  check(i: number, j: number): void 
  {
    this.totalClicks += 1;
    if (this.cardsArr[0].color != this.cardsArr[1].color) {
      console.log('Not equal');
      this.notEqual += 1;

      this.cardsArr[i].isSelected = false;
      this.cardsArr[j].isSelected = false;
    } else {
      console.log('Equals');
      this.points += 1;
      this.pairLeft -= 1;

      if (this.points == this.noOfCards / 2) {
        this.totalScore();
      }
    }
    console.log('Printing score card');
    console.log(this.pairLeft);
    console.log(this.points);
    console.log(this.totalClicks);
    console.log(this.movesForlevel)

    this.cardsArr = [];
  }
  totalScore(): void 
  {
    this.pointScored = Math.ceil((this.noOfCards / this.count) * 10);
    this.sendProgressOfSuccess();
    console.log(`Thus Your total Score is ` + this.pointScored);
    console.log(`Thus notEqual is ` + this.notEqual);
    console.log(`Thus totalClicks is ` + this.totalClicks);
    console.log(`Thus Moves left are is ` + this.movesForlevel);

  }

  onQuitClick(): void 
  {
    this.router.navigate(['/quit']);

  }
  // we'll send 0 to indicate that he has lost the game
  sendProgressOfTimeOut():void
  {

  }


  // we'll send 1 to indicate that he has won the game
  sendProgressOfSuccess():void
  {

  }


}
