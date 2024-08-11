import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { CardGameService } from '../card-game.service';
import { cardGameConstarint } from 'src/app/shared/interfaces/cardGameConstraint';
import { APP_CONSTANTS } from 'src/app/shared/constants/app.constants';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { QuitModalComponent } from 'src/app/shared/components/quit-modal/quit-modal.component';
import { HttpClient } from '@angular/common/http';
import { MovesOutModalComponent } from 'src/app/shared/components/moves-out-modal/moves-out-modal.component';
import { CongratulationsModalComponent } from 'src/app/shared/components/congratulations-modal/congratulations-modal.component';
import { TilePattern } from 'src/app/shared/interfaces/tilePattern.interface';

@Component({
  selector: 'app-tile-match',
  templateUrl: './tile-match.component.html',
  styleUrls: ['./tile-match.component.css']
})
export class TileMatchComponent implements OnInit {
  slug!: string;
  selectedObjects3: any[] = [];
  tilePattern!:TilePattern[];
  lengthOfTile!:number;
  noOfTiles!:number;
  tiles:any[]=[];
  pattern:number[]=[];
  sizeOfPattern!:number;
  count:number=0;
  constrainsts!: cardGameConstarint;
  indexesOfPattern: Set<number> = new Set();


  constructor(
    private router: Router,
    private cookieservice: CookieService,
    private route: ActivatedRoute,
    private cardgameservice: CardGameService,
    private modalService: NgbModal,
    private http: HttpClient
  ) {  
    this.cardgameservice.getLevelData().subscribe((val) => {
      this.constrainsts = val;
      this.noOfTiles = this.constrainsts.no_of_cards;
    });
  }



  ngOnInit(): void 
  {
    // this.cardgameservice.slug = 'patternMatch'
    this.getPattern(this.cardgameservice.levelNo)
    
  }
  
  getPattern(level:number):void{
    this.cardgameservice.getPattern(level).subscribe((data)=>{
      this.tilePattern=data;
      this.lengthOfTile=  this.tilePattern.length;
      this.findPattern()
    })
    
  }
  findPattern():void{
    const randomIndex=Math.floor(Math.random()*this.lengthOfTile)
    this.sizeOfPattern=this.tilePattern[randomIndex].no_of_pattern
    this.pattern=this.tilePattern[randomIndex].pattern.split(",").map(Number)
    console.log(this.pattern)
    this.gernerateTiles();
  }
  gernerateTiles():void{
    for(let i=1;i<=this.noOfTiles;i++){
      this.tiles.push({
        number: i,
        color: "grey",
        trueColor:"grey",
        currentColor:"grey",
        isSelected: false,
      });
    }
    
    for(let i=0;i<this.sizeOfPattern;i++){
      this.indexesOfPattern.add(this.pattern[i])
    }
    for(let i=1;i<=this.noOfTiles;i++){
      if(this.indexesOfPattern.has(i)){
        this.tiles[i-1].trueColor = "black"
        this.tiles[i-1].currentColor = "black"
      }
    }
    setTimeout(()=>{
      for(let i=1;i<=this.noOfTiles;i++){
        if(this.indexesOfPattern.has(i)){
          this.tiles[i-1].currentColor = this.tiles[i-1].color
        }
      }
    },2000)
  }
  onTileClick(card:any):void{
    card.isSelected=true;
    if(card.trueColor!="black"){
      console.log("its a grey")
      this.sendProgressOfFailure();
    }
    else{
      this.count++;
      card.currentColor = "black"
      if(this.count==this.sizeOfPattern){
        console.log("its a black")
        this.totalScore();
      }
    }
  }
  isTrueColor(card:any):boolean{
    console.log(card.trueColor==="black")
    return card.trueColor==="black"
  }

  
  totalScore(): void {
    this.sendProgressOfSuccess();
  }

  onQuitClick(): void {
    this.sendProgressOfFailure();
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

    this.modalService.open(MovesOutModalComponent, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        // this.closeResult = `Closed with: ${result}`;
        
      },
      (reason) => {
        // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
      
    )
    this.cardgameservice.insertProgressOfuser(0, 0).subscribe((data) => {
      console.log("Inserted the failure data")
    });
  }

  sendProgressOfSuccess(): void {
    this.modalService.open(CongratulationsModalComponent, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        // this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    )
    this.cardgameservice.insertProgressOfuser(5,1).subscribe((data) => {
      console.log("Inserted the success data")
    });
  }
}
