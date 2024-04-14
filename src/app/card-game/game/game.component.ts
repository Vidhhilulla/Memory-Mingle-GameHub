import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { CardGameService } from '../card-game.service';
import { cardGameConstarint } from 'src/app/shared/interfaces/cardGameConstraint';
import { cardGameImage } from 'src/app/shared/interfaces/cardgameImage';
import { APP_CONSTANTS } from 'src/app/shared/constants/app.constants';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { QuitModalComponent } from 'src/app/shared/components/quit-modal/quit-modal.component';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit 
{
  slug!: string;
  colors: any;
  selectedColor!: any[] ;
  myMap = new Map<string, number>();
  selectedObjects3: any[] = [];
  isDisable = false;
  show = true;
  points = 0;
  pointScored = 0;
  count = 0;
  cardsArr: any[] = [];
  selectedCard: number | null = null;
  notEqual = 0;
  totalClicks = 0;
  constrainsts!: cardGameConstarint;
  noOfCards = 0;
  movesForlevel = 0;
  pairLeft = 0;
  repeatedColor!:any;
  imageUrlIdData: any;


  constructor(
    private router: Router,
    private cookieservice: CookieService,
    private route: ActivatedRoute,
    private cardgameservice: CardGameService,
    private modalService: NgbModal,
    private http: HttpClient
  ) {

    
    this.route.params.subscribe((value) => {
      this.selectedColor = []
      this.slug = value['slug'];
      console.log(value)
      this.cardgameservice.getLevelData().subscribe((val) => {
        this.constrainsts = val;
        console.log(val)
        this.noOfCards = this.constrainsts.no_of_cards;
        console.log(this.noOfCards)
        this.movesForlevel = this.constrainsts.moves;
        this.pairLeft = this.noOfCards / 2;
        this.fetchImagesId()
        
      });
    });

  }



  ngOnInit(): void 
  {
    // this.fetchImages();
   

  }

  fetchImagesId(): void {
    this.cardgameservice.fetchImagesId().subscribe((data) => {
      // console.log(data,"from service")
      this.imageUrlIdData = data;
      this.colors = data
      console.log("after service",this.colors)
      console.log("imagedata",this.imageUrlIdData)
      for (let i = 0; i < this.imageUrlIdData.length; i++) {
        console.log(this.imageUrlIdData[i].id);
      }
      this.generateImageUrl(this.noOfCards / 2);
    });
    // console.log("image",this.imageUrlIdData)
  }



  generateImageUrl(reqColors: number): void 
  {
    // for (let img of this.imageUrlData) {
    //   const imageUrl = APP_CONSTANTS.path_of_images+img;
    //   console.log(imageUrl);
    //   // add it in this.colors
    //   this.colors.push(imageUrl);
    // }
    // this.colors = this.imageUrlIdData;
    console.log(this.colors,"colors")
    console.log(this.colors.length)


    const numbersUsed: Set<number> = new Set();
    let len = 0, i =0;
   while(len != 8){
      let index = Math.floor(Math.random() * this.colors.length);
      console.log(index,"index")
      if (!numbersUsed.has(index)) {
        numbersUsed.add(index);
        // this.selectedColor[i] = this.colors[index];
        this.selectedColor.splice(i,0,this.colors[index])
        i++;
        len++;
      }
    }
    let k =Math.floor(Math.random()*100)
    k=k%reqColors
    this.repeatedColor = [];
    for (let i = 0; i < reqColors; i++) {
      this.repeatedColor[(i+k)%(reqColors)]=this.selectedColor[i];
    }
    this.selectedObjects3 = this.generateObject(this.selectedColor,this.repeatedColor);
    console.log(this.selectedObjects3,"selected")
  }

  generateObject(selectedColor: number[],repeatedColor:number[]): any[] {
    const formedObject: any[] = [];
    let n = this.noOfCards;
    let leng = this.selectedColor.length
    let i = 0;
    let j = 0;
    while (i < leng && j < leng) {
      let index = Math.floor((Math.random() * 2));
      if(index===0){
        formedObject.push({
          number: i,
          color: selectedColor[i],
          isSelected: false,
        });
        i++;
      }
      else{
        formedObject.push({
          number: j,
          color: repeatedColor[j],
          isSelected: false,
        });
        j++;
      }
    }
    if(i===leng){
      while(j<leng){
        formedObject.push({
          number: j,
          color: repeatedColor[j],
          isSelected: false,
        });
        j++
      }
    }
    if(j===leng){
      while(i<leng){
        formedObject.push({
          number: i,
          color: selectedColor[i],
          isSelected: false,
        });
        i++;
      }
    }
    console.log(selectedColor)
    console.log(repeatedColor)
    console.log(formedObject)
    return formedObject;
}

  onCardClick(card: any): void {
    this.movesForlevel -= 1;
    if (this.movesForlevel === 0) {
      // this.sendProgressOfFailure();
    }
    this.count++;
    this.cardsArr.push(card);
    this.selectedCard = card.number;
    card.isSelected = true;

    if (this.count % 2 === 0) {
      setTimeout(() => {
        this.check(0, 1);
      }, 500);
    }
  }

  check(i: number, j: number): void {
    this.totalClicks++;
    if (this.cardsArr[0].number !== this.cardsArr[1].number) {
      this.notEqual++;
      this.cardsArr[i].isSelected = false;
      this.cardsArr[j].isSelected = false;
    } else {
      this.points++;
      this.pairLeft--;

      if (this.points === this.noOfCards / 2) {
        this.totalScore();
      }
    }

    this.cardsArr = [];
  }

  totalScore(): void {
    this.pointScored = Math.ceil((this.noOfCards / this.count) * 10);
    // this.sendProgressOfSuccess();
  }

  onQuitClick(): void {
    // this.sendProgressOfFailure();
    // this.router.navigate(['/quit']);
	  this.modalService.open(QuitModalComponent, { ariaLabelledBy: 'modal-basic-title' }).result.then(
		(result) => {
		  // this.closeResult = `Closed with: ${result}`;
		},
		(reason) => {
		  // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
		},
	  );
  }

  sendProgressOfFailure(): void {
    this.cardgameservice.insertProgressOfuser(0, 0).subscribe((data) => {
      // console.log(data);
    });
  }

  sendProgressOfSuccess(): void {
    this.cardgameservice.insertProgressOfuser(this.pointScored, 1).subscribe((data) => {
      // console.log(data);
    });
  }



  // ye fetch images ko kahi se call karna padeega
  // calling it on init ka first line
  
  fetchImages(): void {
    this.cardgameservice.fetchImages().subscribe((data) => {
      this.imageUrlIdData = data;
    });
  }

  getImage(id: number): any {
    return this.http.post(`${APP_CONSTANTS.BACKEND_URL}fetchImageUrlById`,{id});
  }


  getUrl(id:number){
   return "http://localhost:8082/api/fetchImageUrlById/"+(id+1);
  }

  
}
